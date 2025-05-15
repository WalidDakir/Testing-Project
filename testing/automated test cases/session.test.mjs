import { Builder, By, until, WebDriver, WebElement } from "selenium-webdriver";

async function testRegistration() {
  const driver = new Builder().forBrowser("chrome").build();
  try {
    await driver.get("http://localhost:3000/register");

    // ✅ Fill Registration Form
    const nameField = await driver.findElement(By.name("name"));
    await nameField.sendKeys("Test User");

    const emailField = await driver.findElement(By.name("email"));
    await emailField.sendKeys("testuser@example.com");

    const passwordField = await driver.findElement(By.name("password"));
    await passwordField.sendKeys("password123");

    const submitButton = await driver.findElement(By.css("button[type='submit']"));
    await submitButton.click();

    // ✅ Wait for success message
    await driver.wait(until.elementLocated(By.css(".success-message")), 5000);
    console.log("✅ Registration test passed!");
  } catch (error) {
    console.error("❌ Registration test failed:", error);
  } finally {
    await driver.quit();
  }
}

testRegistration();
