export const PLAN_LIMITS = {
  FREE: {
    maxLinks: 25,
    maxClicks: 1000,
    maxDomains: 0,
    maxWorkspaceMembers: 1,
    analytics: 'basic',
    apiAccess: false,
    qrCustomization: false,
  },
  PRO: {
    maxLinks: 1000,
    maxClicks: 50000,
    maxDomains: 3,
    maxWorkspaceMembers: 1,
    analytics: 'advanced',
    apiAccess: true,
    qrCustomization: true,
  },
  GROWTH: {
    maxLinks: 5000,
    maxClicks: 250000,
    maxDomains: 10,
    maxWorkspaceMembers: 5,
    analytics: 'advanced',
    apiAccess: true,
    qrCustomization: true,
  },
  TEAM: {
    maxLinks: -1, // unlimited
    maxClicks: -1,
    maxDomains: 25,
    maxWorkspaceMembers: 20,
    analytics: 'advanced',
    apiAccess: true,
    qrCustomization: true,
  },
  ENTERPRISE: {
    maxLinks: -1,
    maxClicks: -1,
    maxDomains: -1,
    maxWorkspaceMembers: -1,
    analytics: 'advanced',
    apiAccess: true,
    qrCustomization: true,
  },
} as const;

export const COLORS = {
  primary: '#6366f1',
  accent: '#8b5cf6',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
  bgDark: '#0f0f13',
  bgLight: '#f8fafc',
  surfaceDark: '#1a1a24',
  surfaceLight: '#ffffff',
} as const;

export const DEFAULT_QR_OPTIONS = {
  fgColor: '#000000',
  bgColor: '#FFFFFF',
  size: 300,
} as const;

export const ROUTES = {
  home: '/',
  login: '/login',
  signup: '/signup',
  dashboard: '/dashboard',
  links: '/dashboard/links',
  analytics: '/dashboard/analytics',
  settings: '/dashboard/settings',
  qrCodes: '/dashboard/qr-codes',
  utmBuilder: '/dashboard/utm-builder',
  domains: '/dashboard/domains',
  team: '/dashboard/team',
  billing: '/dashboard/billing',
  apiKeys: '/dashboard/api-keys',
} as const;

export const API_ROUTES = {
  links: '/api/links',
  analytics: '/api/analytics',
  workspaces: '/api/workspaces',
  domains: '/api/domains',
  tags: '/api/tags',
  auth: {
    mobileLogin: '/api/auth/mobile/login',
    mobileRefresh: '/api/auth/mobile/refresh',
    mobileLogout: '/api/auth/mobile/logout',
    pushToken: '/api/auth/mobile/push-token',
  },
} as const;
