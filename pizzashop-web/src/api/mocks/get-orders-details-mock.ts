import { http, HttpResponse } from "msw"

import type {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from "../get-order-details"

export const getOrdersDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>("/orders/:orderId", ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "321321321",
    },
    status: "pending",
    createdAt: new Date().toISOString(),
    totalInCents: 5000,
    orderItems: [
      {
        id: "order-item-1",
        priceInCents: 1000,
        product: { name: "Pizza Pepperoni" },
        quantity: 1,
      },
      {
        id: "order-item-1",
        priceInCents: 2000,
        product: { name: "Pizza Calabresa" },
        quantity: 2,
      },
    ],
  })
})
