import {Request, Response, Router} from "express";

const jwt = require("jsonwebtoken");
import {User} from "./userModel";
import "dotenv/config";

const router = Router();

router.post("/auth", async (req: Request, res: Response) => {
    try {
        const user = new User(req.body);
        await user.save();
        const accessToken = jwt.sign(user.toObject(), process.env.ACCESS_TOKEN_SECRET!);
        res.setHeader("Set-Cookie", `user=${accessToken}; Path=/`);
        res.status(201).send({message: "User created successfully"});
    } catch (error) {
        console.error(error);
        res.status(500).send({message: "Internal server error"});
    }
});

router.get("/users", async (req: Request, res: Response) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (error) {
        console.error(error);
        res.status(500).send({message: "Internal server error"});
    }
});
router.get("/user", async (req: Request, res: Response) => {
    try {
        const data = jwt.verify(req.headers.authorization, process.env.ACCESS_TOKEN_SECRET);
        const user = await User.find({email: data?.email});
        res.send(user);
    } catch (error) {
        console.error(error);
        res.status(401).send({message: "Unauthorized"});
    }
});

router.get("/messages", async (req: Request, res: Response) => {
    const {sender, receiver} = req.query;
    const user = await User.find({email: receiver});
    const filteredUser = user[0]?.messages?.filter((message: any) => message.sender === sender && message.receiver === receiver || message.sender === receiver && message.receiver === sender);
    res.send(filteredUser);
})

export default router;
