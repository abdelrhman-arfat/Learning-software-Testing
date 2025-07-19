import puppeteer from "puppeteer";

/**
 * orm action="/home.html" id="login-form">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" /><br />
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" /><br />
      <input type="submit" id="submit" value="Login" />
 */

async function testForm() {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();

  await page.goto("http://localhost:3001/page/form");

  await page.type("#username", "username");
  await page.type("#password", "password");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  await page.click("#submit");
  await new Promise((resolve) => setTimeout(resolve, 8000));

  browser.close();
}

testForm();
