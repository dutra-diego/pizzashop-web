import { env } from "@/env"
import { setupWorker } from "msw/browser"
import { signInMock } from "./sign-in-mock"
import { registerRestaurantMock } from "./register-restaurant-mock"
import { getDayOrdersAmountMock } from "./get-day-order-amount-mock"
import { getMonthOrdersAmountMock } from "./get-month-orders-amount-mock"
import { getMonthCanceledOrdersAmountMock } from "./get-month-canceled-orders-mock"
import { getMonthRevenueMock } from "./get-month-revenue"
import { dailyRevenueInPeriodMock } from "./get-daily-revenue-in-period-mock"
import { getPopularProductsMock } from "./get-popular-products-mock"
import { getProfileMock } from "./get-profile-mock"
import { getManagedRestaurantMock } from "./get-managed-restaurant-mock"
import { updateProfileMock } from "./update-profile-mock"
import { getOrdersMock } from "./get-orders-mock"
import { getOrdersDetailsMock } from "./get-orders-details-mock"
import { approveOrderMock } from "./approve-order-mock"
import { deliverOrderMock } from "./delivery-order-mock"
import { cancelOrderMock } from "./cancel-order-mock"
import { dispatchOrderMock } from "./dispatch-order-mock"

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueMock,
  dailyRevenueInPeriodMock,
  getPopularProductsMock,
  getProfileMock,
  getManagedRestaurantMock,
  updateProfileMock,
  getOrdersMock,
  getOrdersDetailsMock,
  approveOrderMock,
  deliverOrderMock,
  cancelOrderMock,
  dispatchOrderMock
)

export async function enableMSW() {
  if (env.MODE !== "test") {
    return
  }
  await worker.start()
}
