import { Builder, Capabilities, By } from "selenium-webdriver"
// const {  } = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test ("view all bots", async () => {
    const seeAllBtn = await driver.findElement(By.xpath('(//body/button[1]'))
    await seeAllBtn.click()
    await driver.sleep(3000)
})

test ("Add cards to duo", async () => {
    const drawBtn = await driver.findElement(By.xpath('//button[@id]'))
    await drawBtn.click()
    await driver.sleep(3000)
    //const bot-btn = = await driver.findElement(By.xpath


})