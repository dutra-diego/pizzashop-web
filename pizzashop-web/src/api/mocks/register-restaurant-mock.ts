import type { RegisterRestaurantBody } from "./../register-restaurant"
import { http, HttpResponse } from "msw"

export const registerRestaurantMock = http.post<never, RegisterRestaurantBody>(
  "/restaurants",
  async ({ request }) => {
    const { restaurantName } = await request.json()
    if (restaurantName === "Pizza Shop") {
      return new HttpResponse(null, {
        status: 201,
      })
    }
    return new HttpResponse(null, { status: 400 })
  }
)
