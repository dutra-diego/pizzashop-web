import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ResponsiveContainer, LineChart, Line, YAxis, XAxis } from "recharts"
import colors from "tailwindcss/colors"
const data = [
  {
    date: "10/12",
    revenue: 1200,
  },
  {
    date: "11/12",
    revenue: 1300,
  },
  {
    date: "12/12",
    revenue: 200,
  },
  {
    date: "13/12",
    revenue: 1200,
  },
  {
    date: "14/12",
    revenue: 300,
  },
  {
    date: "15/12",
    revenue: 1111,
  },
  {
    date: "16/12",
    revenue: 122,
  },
]
export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-0">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontsize: 12 }}>
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              tickFormatter={(value: number) =>
                value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
              }
              width={100}
            />
            <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />
            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              stroke={colors.violet["500"]}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
