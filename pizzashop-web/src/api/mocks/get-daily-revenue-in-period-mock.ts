import { http, HttpResponse } from "msw"
import type { GetDailyRevenueInPeriodResponse } from "../get-daily-revenue-in-period"

export const dailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse[]
>("/metrics/daily-receipt-in-period", () => {
  return HttpResponse.json([
    {
      date: "01/01/2024",
      receipt: 2000,
    },
    {
      date: "02/01/2024",
      receipt: 300,
    },
    {
      date: "02/01/2024",
      receipt: 5000,
    },
    {
      date: "03/01/2024",
      receipt: 1000,
    },
    {
      date: "04/01/2024",
      receipt: 400,
    },
    {
      date: "05/01/2024",
      receipt: 800,
    },
    {
      date: "06/01/2024",
      receipt: 1900,
    },
    {
      date: "07/01/2024",
      receipt: 3000,
    },
  ])
})
