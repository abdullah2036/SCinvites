import { NextResponse, type NextRequest } from 'next/server';
import { routeFor } from '@/lib/routing';

export function proxy(request: NextRequest) {
  const decision = routeFor(request.nextUrl.pathname, process.env.OWNER_PATH ?? '');
  if (decision.notFound) {
    return NextResponse.rewrite(new URL('/_hidden-not-found', request.url));
  }
  if (decision.rewrite) {
    const url = request.nextUrl.clone();
    url.pathname = decision.rewrite;
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|fonts|brand|favicon.ico|robots.txt).*)'],
};
