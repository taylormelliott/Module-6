import { Builder, Capabilities, By } from "selenium-webdriver";

const chromedriver = require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
  await driver.get("http://localhost:4000");
});

afterAll(async () => {
  await driver.quit();
});

test("I can start a game", async () => {
  let button = await (await driver).findElement(By.id("start-game"));
  await button.click();
});

test("User clicks upper left square and an X appears", async () => {
  let clickSqr = await (await driver).findElement(By.id("cell-0"));
  await clickSqr.click();
});

test("User clicks upper right square and an X appears", async () => {
  let clickSqr = await (await driver).findElement(By.id("cell-2"));
  await clickSqr.click();
});

test("User clicks lower right square and an X appears", async () => {
  let clickSqr = await (await driver).findElement(By.id("cell-8"));
  await clickSqr.click();
});

test("Computer makes a move by adding an O to the top middle square after user clicks top left square", async () => {
  let clickSqr = await (await driver).findElement(By.id("cell-0"));
  await clickSqr.click();
  await (await driver).sleep(1500);
});
