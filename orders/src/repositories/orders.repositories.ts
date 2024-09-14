import { Order } from "./models/orders.models";


export async function getAllOrders() {
    try {
        const getAll = await Order.find();
        return getAll;
    } catch (error) {
        console.log(error)
    }
}

export async function createOrders(productName: string, price: number, sellerName: string) {
    try {
        const newOrder = await Order.create({
            productName,
            price,
            sellerName
        })
        return await newOrder.save();
    } catch (error) {
        console.log(error)
    }
}