import { expect, test } from "@playwright/test"

test("display day orders amount metrics", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" })
  await expect(page.getByText("20", { exact: true }).nth(1)).toBeVisible()
  await expect(page.getByText("-5% em relação a ontem.")).toBeVisible()
})
test("display month orders amount metrics", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" })

  await expect(page.getByText("20", { exact: true }).first()).toBeVisible()
  await expect(
    page
      .locator("div")
      .filter({ hasText: /^20\+10% em relação ao mês passado\.$/ })
      .getByRole("paragraph")
  ).toBeVisible()
})
test("display month canceled orders amount metrics", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" })

  await expect(page.getByText("200", { exact: true })).toBeVisible()
  await expect(page.getByText("-10% em relação ao mês")).toBeVisible()
})
test("display month revenue metrics", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" })

  await expect(page.getByText("R$ 200,00")).toBeVisible()
  await expect(page.getByText("+10% em relação ao mês").first()).toBeVisible()
})
