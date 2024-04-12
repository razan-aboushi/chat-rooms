import {AccessToken} from "livekit-server-sdk";
import {NextRequest, NextResponse} from "next/server";

export async function GET(req: NextRequest) {
    const room = req.nextUrl.searchParams.get("room");
    const username = req.nextUrl.searchParams.get("username");

    if (!room || !username) {
        return NextResponse.json(
            {error: 'Missing required query parameters: "room" and/or "username"'},
            {status: 400}
        );
    }

    const apiKey = process.env.LIVEKIT_API_KEY;
    const apiSecret = process.env.LIVEKIT_API_SECRET;
    const wsUrl = process.env.NEXT_PUBLIC_LIVEKIT_URL;

    if (!apiKey || !apiSecret || !wsUrl) {
        return NextResponse.json(
            {error: "Server misconfigured: missing required environment variables"},
            {status: 500}
        );
    }

    try {
        const at = new AccessToken(apiKey, apiSecret, {identity: username});

        at.addGrant({room, roomJoin: true, canPublish: true, canSubscribe: true});

        return NextResponse.json({token: at.toJwt()});
    } catch (error) {
        return NextResponse.json(
            {error: "Failed to generate access token", details: error.message},
            {status: 500}
        );
    }
}
