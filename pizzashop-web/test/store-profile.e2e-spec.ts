import { test, expect } from "@playwright/test"

test("update profile sucessfully", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" })

  await page.getByRole("button", { name: "Pizza Shop" }).click()
  await page.getByRole("menuitem", { name: "Perfil da loja" }).click()

  await page.getByLabel("Nome").fill("Rocket Pizza")
  await page.getByLabel("Descrição").fill("Another Description")

  await page.getByRole("button", { name: "Salvar" }).click()

  await page.waitForLoadState("networkidle")

  const toast = page.getByText("Perfil atualizado com sucesso!")

  await expect(toast).toBeVisible()

  await page.getByRole("button", { name: "Close" }).click()

  await expect(page.getByRole("button", { name: "Rocket Pizza" })).toBeVisible()
})
