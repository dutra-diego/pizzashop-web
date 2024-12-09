import { http, HttpResponse } from "msw"
import type { GetPopularProductsResponse } from "../get-popular-products"

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse[]
>("/metrics/popular-products", () => {
  return HttpResponse.json([
    {
      product: "Pizza 01 ",
      amount: 5,
    },
    {
      product: "Pizza 02 ",
      amount: 3,
    },
    {
      product: "Pizza 03 ",
      amount: 4,
    },
    {
      product: "Pizza 04 ",
      amount: 10,
    },
    {
      product: "Pizza 06 ",
      amount: 20,
    },
    {
      product: "Pizza 007 ",
      amount: 15,
    },
  ])
})
