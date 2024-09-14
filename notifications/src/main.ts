import express from "express";
import { consumeOrderCreatedEvents } from "./utils/rabbitmq";


const app = express();

consumeOrderCreatedEvents();

app.get("/", (_, res) => {
    return res.send("ini notifikasi"); 
})

app.listen(8001, () => {
    console.log("Listening on port 8001");
})