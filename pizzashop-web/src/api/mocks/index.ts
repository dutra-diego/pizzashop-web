import { env } from '@/env'
import { setupWorker } from 'msw/browser'
import { signInMock } from './sign-in-mock'
import { registerRestaurantMock } from './register-restaurant-mock'
import { getDayOrdersAmountMock } from './get-day-order-amount-mock'
import { getMonthOrdersAmountMock } from './get-month-orders-amount-mock'
import { getMonthCanceledOrdersAmountMock } from './get-month-canceled-orders-mock'
import { getMonthRevenueMock } from './get-month-revenue'
import { dailyRevenueInPeriodMock } from './get-daily-revenue-in-period-mock'
import { getPopularProductsMock } from './get-popular-products-mock'


export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueMock,
  dailyRevenueInPeriodMock,
  getPopularProductsMock
)

export async function enableMSW() {
  if(env.MODE !== 'test') {
    return
  }
  await worker.start()
}