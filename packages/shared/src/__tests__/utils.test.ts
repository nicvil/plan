import {
  generateSlug,
  buildUTMUrl,
  formatRelativeDate,
  truncateUrl,
  formatNumber,
  isLinkExpired,
  getShortUrl,
  isValidHexColor,
} from '../utils';

describe('generateSlug', () => {
  it('should generate a slug of default length', () => {
    const slug = generateSlug();
    expect(slug).toHaveLength(7);
  });

  it('should generate a slug of specified length', () => {
    const slug = generateSlug(10);
    expect(slug).toHaveLength(10);
  });

  it('should only contain alphanumeric characters', () => {
    const slug = generateSlug(100);
    expect(slug).toMatch(/^[a-zA-Z0-9]+$/);
  });
});

describe('buildUTMUrl', () => {
  it('should add UTM parameters to a URL', () => {
    const url = buildUTMUrl('https://example.com', {
      source: 'twitter',
      medium: 'social',
      campaign: 'launch',
    });
    expect(url).toContain('utm_source=twitter');
    expect(url).toContain('utm_medium=social');
    expect(url).toContain('utm_campaign=launch');
  });

  it('should skip empty params', () => {
    const url = buildUTMUrl('https://example.com', { source: 'google' });
    expect(url).toContain('utm_source=google');
    expect(url).not.toContain('utm_medium');
  });
});

describe('truncateUrl', () => {
  it('should not truncate short URLs', () => {
    expect(truncateUrl('https://example.com')).toBe('https://example.com');
  });

  it('should truncate long URLs', () => {
    const longUrl = 'https://example.com/' + 'a'.repeat(100);
    const result = truncateUrl(longUrl, 30);
    expect(result.length).toBeLessThanOrEqual(30);
    expect(result).toContain('...');
  });
});

describe('formatNumber', () => {
  it('should format thousands', () => {
    expect(formatNumber(1500)).toBe('1.5K');
  });

  it('should format millions', () => {
    expect(formatNumber(2500000)).toBe('2.5M');
  });

  it('should not format small numbers', () => {
    expect(formatNumber(999)).toBe('999');
  });
});

describe('isLinkExpired', () => {
  it('should return false for null expiry', () => {
    expect(isLinkExpired(null)).toBe(false);
  });

  it('should return true for past dates', () => {
    expect(isLinkExpired(new Date('2020-01-01'))).toBe(true);
  });

  it('should return false for future dates', () => {
    expect(isLinkExpired(new Date('2030-01-01'))).toBe(false);
  });
});

describe('getShortUrl', () => {
  it('should use custom domain if provided', () => {
    expect(getShortUrl('abc', 'https://short.io')).toBe('https://short.io/abc');
  });

  it('should use app URL as fallback', () => {
    expect(getShortUrl('abc', undefined, 'https://myapp.com')).toBe('https://myapp.com/abc');
  });

  it('should use default if nothing provided', () => {
    expect(getShortUrl('abc')).toBe('https://linkiq.app/abc');
  });
});

describe('isValidHexColor', () => {
  it('should accept valid hex colors', () => {
    expect(isValidHexColor('#000000')).toBe(true);
    expect(isValidHexColor('#FFFFFF')).toBe(true);
    expect(isValidHexColor('#6366f1')).toBe(true);
  });

  it('should reject invalid hex colors', () => {
    expect(isValidHexColor('000000')).toBe(false);
    expect(isValidHexColor('#GGG')).toBe(false);
    expect(isValidHexColor('#12345')).toBe(false);
  });
});
