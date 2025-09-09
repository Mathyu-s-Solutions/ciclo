import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const allowed = ['/', '/inicio', '/contacto', '/nosotros', '/planta', '/productos', '/servicios'];

    if (!allowed.some(path => pathname === path || pathname.startsWith(path + '/'))) {
        return NextResponse.redirect(new URL('/inicio', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!_next|static|favicon.ico|img|api|fonts|locales|pages).*)'],
};
