import axios from 'axios';
import { userProps } from "@/types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export async function handleSubmit(e: any, router: AppRouterInstance, avatarId: string, socket: any) {
    e.preventDefault();
    console.log(e.target[1].value);
    try {
        await axios.post("/auth", {
            name: e.target[0].value,
            email: e.target[1].value,
            imageId: `https://robohash.org/${avatarId}.png`,
        }, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        socket.emit("joined", "new user");
        router.push("/chat");
    } catch (err) {
        console.log(err);
    }
}

export async function fetchUser(cookie: { user?: any; }, setUser: { (user: any): void; (arg0: any): void; }) {
    const accessToken = cookie.user;
    try {
        const response = await axios.get("/user", {
            headers: {
                Authorization: `${accessToken}`,
            },
        });
        setUser(response.data[0]);
    } catch (err) {
        console.log(err);
    }
}

export async function fetchUsers(mySelf: userProps, setUsers: any) {
    try {
        const { data } = await axios.get("/users");
        setUsers(data.filter((user: any) => user.email !== mySelf?.email));
    } catch (err) {
        console.log(err);
    }
}

export async function fetchMessages(sender: any, receiver: any, setMessages: any) {
    if (sender && receiver) {
        try {
            const { data } = await axios.get(`/messages?sender=${sender?.email}&receiver=${receiver?.email}`);
            setMessages(data);
        } catch (err) {
            console.log(err);
            setMessages(null);
        }
    }
}
