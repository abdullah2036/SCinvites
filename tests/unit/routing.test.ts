import { describe, it, expect } from 'vitest';
import { routeFor } from '@/lib/routing';

describe('secret studio path', () => {
  it('rewrites the owner path to /studio', () => {
    expect(routeFor('/s3cret', 's3cret')).toEqual({ rewrite: '/studio' });
    expect(routeFor('/s3cret/events', 's3cret')).toEqual({ rewrite: '/studio/events' });
  });
  it('hides direct /studio access', () => {
    expect(routeFor('/studio', 's3cret')).toEqual({ notFound: true });
    expect(routeFor('/studio/settings', 's3cret')).toEqual({ notFound: true });
  });
  it('leaves other paths alone', () => {
    expect(routeFor('/i/abc', 's3cret')).toEqual({});
    expect(routeFor('/s3cretx', 's3cret')).toEqual({});
    expect(routeFor('/studios', 's3cret')).toEqual({});
  });
  it('hides the studio entirely when no owner path is configured', () => {
    expect(routeFor('/studio', '')).toEqual({ notFound: true });
  });
});
