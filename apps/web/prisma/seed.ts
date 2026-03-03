import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create a demo user
  const user = await prisma.user.upsert({
    where: { email: 'demo@linkiq.app' },
    update: {},
    create: {
      email: 'demo@linkiq.app',
      name: 'Demo User',
      plan: 'FREE',
    },
  });
  console.log(`  ✓ User: ${user.email}`);

  // Create a workspace
  const workspace = await prisma.workspace.upsert({
    where: { slug: 'demo-workspace' },
    update: {},
    create: {
      name: 'Demo Workspace',
      slug: 'demo-workspace',
      ownerId: user.id,
    },
  });
  console.log(`  ✓ Workspace: ${workspace.name}`);

  // Add user as workspace owner
  await prisma.workspaceMember.upsert({
    where: {
      userId_workspaceId: {
        userId: user.id,
        workspaceId: workspace.id,
      },
    },
    update: {},
    create: {
      userId: user.id,
      workspaceId: workspace.id,
      role: 'OWNER',
    },
  });
  console.log('  ✓ Workspace member (OWNER)');

  // Create tags
  const tagData = [
    { name: 'marketing', color: '#6366f1' },
    { name: 'social', color: '#8b5cf6' },
    { name: 'product', color: '#10b981' },
  ];
  const tags = [];
  for (const t of tagData) {
    let tag = await prisma.tag.findFirst({ where: { name: t.name } });
    if (!tag) {
      tag = await prisma.tag.create({ data: t });
    }
    tags.push(tag);
  }
  console.log(`  ✓ Tags: ${tags.map((t) => t.name).join(', ')}`);

  // Create sample links
  const links = [
    {
      slug: 'demo',
      destinationUrl: 'https://example.com',
      title: 'Demo Link',
      description: 'A sample link for testing',
      workspaceId: workspace.id,
    },
    {
      slug: 'github',
      destinationUrl: 'https://github.com',
      title: 'GitHub',
      description: 'GitHub homepage',
      workspaceId: workspace.id,
    },
    {
      slug: 'docs',
      destinationUrl: 'https://nextjs.org/docs',
      title: 'Next.js Docs',
      description: 'Next.js documentation',
      workspaceId: workspace.id,
    },
  ];

  for (const linkData of links) {
    let link = await prisma.link.findFirst({
      where: {
        slug: linkData.slug,
        workspaceId: workspace.id,
        domainId: null,
      },
    });

    if (!link) {
      link = await prisma.link.create({
        data: linkData,
      });
    }

    // Add UTM params to the first link
    if (linkData.slug === 'demo') {
      await prisma.uTMParams.upsert({
        where: { linkId: link.id },
        update: {},
        create: {
          linkId: link.id,
          source: 'twitter',
          medium: 'social',
          campaign: 'launch',
        },
      });

      await prisma.qRCode.upsert({
        where: { linkId: link.id },
        update: {},
        create: {
          linkId: link.id,
          fgColor: '#6366f1',
          bgColor: '#FFFFFF',
          size: 300,
        },
      });
    }

    // Add sample clicks
    const devices = ['Desktop', 'Mobile', 'Tablet'];
    const browsers = ['Chrome', 'Safari', 'Firefox'];
    const oses = ['Windows', 'macOS', 'iOS', 'Android'];
    const countries = ['US', 'GB', 'DE', 'FR', 'JP'];

    for (let i = 0; i < 5; i++) {
      await prisma.click.create({
        data: {
          linkId: link.id,
          device: devices[i % devices.length],
          browser: browsers[i % browsers.length],
          os: oses[i % oses.length],
          country: countries[i % countries.length],
          referrer: i % 2 === 0 ? 'https://twitter.com' : 'https://google.com',
          clickedAt: new Date(Date.now() - i * 24 * 60 * 60 * 1000),
        },
      });
    }

    console.log(`  ✓ Link: ${linkData.slug} (with ${5} clicks)`);
  }

  console.log('\n✅ Seed complete!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
