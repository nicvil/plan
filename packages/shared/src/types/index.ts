export enum Plan {
  FREE = 'FREE',
  PRO = 'PRO',
  GROWTH = 'GROWTH',
  TEAM = 'TEAM',
  ENTERPRISE = 'ENTERPRISE',
}

export enum Role {
  OWNER = 'OWNER',
  ADMIN = 'ADMIN',
  MEMBER = 'MEMBER',
}

export interface User {
  id: string;
  email: string;
  name: string | null;
  image: string | null;
  plan: Plan;
  pushToken: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Workspace {
  id: string;
  name: string;
  slug: string;
  logo: string | null;
  ownerId: string;
  createdAt: Date;
}

export interface WorkspaceMember {
  id: string;
  userId: string;
  workspaceId: string;
  role: Role;
}

export interface Domain {
  id: string;
  domain: string;
  verified: boolean;
  workspaceId: string;
  createdAt: Date;
}

export interface Link {
  id: string;
  slug: string;
  destinationUrl: string;
  title: string | null;
  description: string | null;
  password: string | null;
  expiresAt: Date | null;
  workspaceId: string;
  domainId: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface UTMParams {
  id: string;
  linkId: string;
  source: string | null;
  medium: string | null;
  campaign: string | null;
  term: string | null;
  content: string | null;
}

export interface QRCode {
  id: string;
  linkId: string;
  fgColor: string;
  bgColor: string;
  logo: string | null;
  size: number;
  fileUrl: string | null;
}

export interface Click {
  id: string;
  linkId: string;
  ip: string | null;
  country: string | null;
  city: string | null;
  device: string | null;
  os: string | null;
  browser: string | null;
  referrer: string | null;
  clickedAt: Date;
}

export interface Tag {
  id: string;
  name: string;
  color: string;
}

// API response types
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface LoginResponse {
  tokens: AuthTokens;
  user: User;
}

export interface LinkWithRelations extends Link {
  utmParams?: UTMParams | null;
  qrCode?: QRCode | null;
  tags?: Tag[];
  clicks?: Click[];
  _count?: {
    clicks: number;
  };
}

export interface AnalyticsSummary {
  totalClicks: number;
  clicksToday: number;
  clicksThisWeek: number;
  clicksThisMonth: number;
  topLinks: Array<{ link: Link; clicks: number }>;
  deviceBreakdown: Record<string, number>;
  osBreakdown: Record<string, number>;
  browserBreakdown: Record<string, number>;
  countryBreakdown: Record<string, number>;
  referrerBreakdown: Record<string, number>;
}
