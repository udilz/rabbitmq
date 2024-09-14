import express from "express";
import * as orderRepostories from "./repositories/orders.repositories";
import { mongoConnect } from "./utils/mongoose";
import { rabbitConnect } from "./utils/rabbitmq";

const app = express();
app.use(express.json());
mongoConnect();

app.get("/", async (_, res) => {
  const orders = await orderRepostories.getAllOrders();
  return res.json({message: "berhasil ambil data", data: orders});
});

app.post("/", async(req, res) => {
  const {productName, price, sellerName} = req.body;
  const newOrder = await orderRepostories.createOrders(productName, price, sellerName);

  //send message to queue createdproduct 
  const channel = await rabbitConnect();
  channel.sendToQueue("createdOrder", Buffer.from(JSON.stringify(newOrder)));
  console.log(`data telah di kirim ke queue createdOrder, data: ${JSON.stringify(newOrder)}`);
  
  return res.json({message: "berhasil membuat data", data: newOrder});
})

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
