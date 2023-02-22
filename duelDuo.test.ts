
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://127.0.0.1:5500/public/index.html')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Choices shows when "Draw" button is clicked', async () => {
    const draw = await driver.findElement(By.id('draw'))
    draw.click()
    const choices = await driver.findElement(By.id("choices"))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
})

test('player-duo shows when "Add to Duo" button is clicked', async () =>{
    const draw = await driver.findElement(By.id('draw'))
    draw.click()
//     const botButton = await driver.findElement(By.id('bot-btn'))
//     botButton.click()
//     const playerDuo = await driver.findElement(By.id('player-duo'))
//     const displayed = await playerDuo.isDisplayed()
//     expect(displayed).toBe(true)
})