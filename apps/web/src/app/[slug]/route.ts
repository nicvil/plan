import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  // TODO: Look up link by slug in database + Redis cache
  // TODO: Record click with device/geo info
  // TODO: Check for password protection and expiry

  // For now, return 404
  return NextResponse.json(
    { error: 'Link not found' },
    { status: 404 },
  );
}
