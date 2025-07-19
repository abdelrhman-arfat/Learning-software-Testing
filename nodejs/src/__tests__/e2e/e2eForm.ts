import puppeteer from "puppeteer";

test("Form login should submit successfully", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3001/page/form");

  await page.type("#username", "username");
  await page.type("#password", "password");
  await page.click("#submit");
  await browser.close();
}, 80000);
