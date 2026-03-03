export class UnauthorizedError extends Error {
  constructor(message = 'Unauthorized') {
    super(message);
    this.name = 'UnauthorizedError';
  }
}

export interface AuthUser {
  id: string;
  email: string;
  name: string | null;
}

/**
 * Unified auth middleware that supports both web sessions and mobile JWT tokens.
 * Web: Uses NextAuth.js cookie sessions
 * Mobile: Uses JWT Bearer token in Authorization header
 */
export async function requireAuth(req: Request): Promise<AuthUser> {
  // 1. Try Bearer token (mobile)
  const authHeader = req.headers.get('Authorization');
  if (authHeader?.startsWith('Bearer ')) {
    const token = authHeader.slice(7);
    // TODO: Verify JWT and return user
    // const payload = verifyJWT(token);
    // if (payload) return await getUserById(payload.userId);
    void token;
  }

  // 2. Try session (web) — requires NextAuth setup
  // const session = await getServerSession(authOptions);
  // if (session?.user) return session.user as AuthUser;

  throw new UnauthorizedError();
}
