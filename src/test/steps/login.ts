import {Given, When, Then } from '@cucumber/cucumber'
import { Browser, Page, chromium } from "@playwright/test"

let page: Page
let browser: Browser

Given(`User must launch login page`, async function () {
    browser = await chromium.launch({ headless: false })
    const context = await browser.newContext()
    page = await context.newPage()
    await page.goto('https://automationexercise.com/')
});