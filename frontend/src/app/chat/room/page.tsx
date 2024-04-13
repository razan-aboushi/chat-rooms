"use client";
import "@livekit/components-styles";
import {
    LiveKitRoom,
    GridLayout,
    ParticipantTile,
    ControlBar,
    useTracks,
    RoomAudioRenderer,
} from "@livekit/components-react";
import {useEffect, useState} from "react";
import {Track} from "livekit-client";
import {useUser} from "@/store/userStore";

const ChatRoomPage = () => {
    const myUser = useUser((state) => state.myUser);
    const room = "quickstart-room";
    const name = myUser?.name;
    const [token, setToken] = useState("");

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(
                    `/api/get-participant-token?room=${room}&username=${name}`
                );
                const data = await response.json();
                setToken(data.token);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    if (token === "") {
        return <div>Getting token...</div>;
    }

    return (
        <LiveKitRoom
            video={true}
            audio={true}
            token={token}
            connectOptions={{autoSubscribe: false}}
            serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
            data-lk-theme="default"
            style={{height: "100dvh"}}>
            <MyVideoConference/>
            <RoomAudioRenderer/>
            <ControlBar/>
        </LiveKitRoom>
    );
}

function MyVideoConference() {
    const tracks = useTracks(
        [
            {source: Track.Source.Camera, withPlaceholder: true},
            {source: Track.Source.ScreenShare, withPlaceholder: false},
        ],
        {onlySubscribed: false}
    );
    return (
        <GridLayout
            tracks={tracks}
            style={{height: "calc(100vh - var(--lk-control-bar-height))"}}>
            <ParticipantTile/>
        </GridLayout>
    );
}

export default ChatRoomPage;