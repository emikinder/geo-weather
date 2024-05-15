import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    if (request.geo?.latitude && request.geo?.longitude) {
        const res = NextResponse.next();
        res.headers.set("x-latitude", request.geo.latitude);
        res.headers.set("x-longitude", request.geo.longitude);
        return res;
    }
}
