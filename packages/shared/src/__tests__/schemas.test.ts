import { createLinkSchema, loginSchema, signupSchema, createWorkspaceSchema } from '../schemas';

describe('createLinkSchema', () => {
  it('should validate a valid link', () => {
    const result = createLinkSchema.safeParse({
      destinationUrl: 'https://example.com',
      slug: 'my-link',
    });
    expect(result.success).toBe(true);
  });

  it('should reject an invalid URL', () => {
    const result = createLinkSchema.safeParse({
      destinationUrl: 'not-a-url',
      slug: 'my-link',
    });
    expect(result.success).toBe(false);
  });

  it('should reject an invalid slug', () => {
    const result = createLinkSchema.safeParse({
      destinationUrl: 'https://example.com',
      slug: 'invalid slug!',
    });
    expect(result.success).toBe(false);
  });

  it('should accept optional UTM params', () => {
    const result = createLinkSchema.safeParse({
      destinationUrl: 'https://example.com',
      slug: 'promo',
      utmParams: {
        source: 'twitter',
        medium: 'social',
        campaign: 'launch',
      },
    });
    expect(result.success).toBe(true);
  });
});

describe('loginSchema', () => {
  it('should validate valid credentials', () => {
    const result = loginSchema.safeParse({
      email: 'user@example.com',
      password: 'password123',
    });
    expect(result.success).toBe(true);
  });

  it('should reject an invalid email', () => {
    const result = loginSchema.safeParse({
      email: 'not-an-email',
      password: 'password123',
    });
    expect(result.success).toBe(false);
  });

  it('should reject a short password', () => {
    const result = loginSchema.safeParse({
      email: 'user@example.com',
      password: 'short',
    });
    expect(result.success).toBe(false);
  });
});

describe('signupSchema', () => {
  it('should validate valid signup data', () => {
    const result = signupSchema.safeParse({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'Password1',
    });
    expect(result.success).toBe(true);
  });

  it('should require uppercase in password', () => {
    const result = signupSchema.safeParse({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password1',
    });
    expect(result.success).toBe(false);
  });

  it('should require a number in password', () => {
    const result = signupSchema.safeParse({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'Password',
    });
    expect(result.success).toBe(false);
  });
});

describe('createWorkspaceSchema', () => {
  it('should validate a valid workspace', () => {
    const result = createWorkspaceSchema.safeParse({
      name: 'My Workspace',
      slug: 'my-workspace',
    });
    expect(result.success).toBe(true);
  });

  it('should reject uppercase in slug', () => {
    const result = createWorkspaceSchema.safeParse({
      name: 'My Workspace',
      slug: 'My-Workspace',
    });
    expect(result.success).toBe(false);
  });
});
