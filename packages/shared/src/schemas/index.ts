import { z } from 'zod';

export const createLinkSchema = z.object({
  destinationUrl: z.string().url('Please enter a valid URL'),
  title: z.string().max(255).optional(),
  description: z.string().max(1000).optional(),
  slug: z
    .string()
    .min(1, 'Slug is required')
    .max(100)
    .regex(/^[a-zA-Z0-9_-]+$/, 'Slug can only contain letters, numbers, hyphens, and underscores'),
  domainId: z.string().optional(),
  password: z.string().min(4).max(100).optional(),
  expiresAt: z.string().datetime().optional(),
  tags: z.array(z.string()).optional(),
  utmParams: z
    .object({
      source: z.string().max(255).optional(),
      medium: z.string().max(255).optional(),
      campaign: z.string().max(255).optional(),
      term: z.string().max(255).optional(),
      content: z.string().max(255).optional(),
    })
    .optional(),
  qrCode: z
    .object({
      fgColor: z
        .string()
        .regex(/^#[0-9a-fA-F]{6}$/)
        .default('#000000'),
      bgColor: z
        .string()
        .regex(/^#[0-9a-fA-F]{6}$/)
        .default('#FFFFFF'),
      logo: z.string().url().optional(),
      size: z.number().int().min(100).max(2000).default(300),
    })
    .optional(),
});

export const updateLinkSchema = createLinkSchema.partial();

export const loginSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const signupSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Please enter a valid email'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
});

export const createWorkspaceSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  slug: z
    .string()
    .min(1, 'Slug is required')
    .max(50)
    .regex(/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens'),
});

export const inviteMemberSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  role: z.enum(['ADMIN', 'MEMBER']),
});

export const addDomainSchema = z.object({
  domain: z
    .string()
    .min(1, 'Domain is required')
    .regex(
      /^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
      'Please enter a valid domain',
    ),
});

export const utmParamsSchema = z.object({
  source: z.string().max(255).optional(),
  medium: z.string().max(255).optional(),
  campaign: z.string().max(255).optional(),
  term: z.string().max(255).optional(),
  content: z.string().max(255).optional(),
});

export type CreateLinkInput = z.infer<typeof createLinkSchema>;
export type UpdateLinkInput = z.infer<typeof updateLinkSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type SignupInput = z.infer<typeof signupSchema>;
export type CreateWorkspaceInput = z.infer<typeof createWorkspaceSchema>;
export type InviteMemberInput = z.infer<typeof inviteMemberSchema>;
export type AddDomainInput = z.infer<typeof addDomainSchema>;
export type UTMParamsInput = z.infer<typeof utmParamsSchema>;
