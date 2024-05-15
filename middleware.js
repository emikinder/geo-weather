export function middleware(req) {
    if (req.geo?.latitude && req.geo?.longitude) {
        const res = NextResponse.next();
        res.headers.set("x-latitude", req.geo.latitude);
        res.headers.set("x-longitude", req.geo.longitude);
        return res;
    }
}
