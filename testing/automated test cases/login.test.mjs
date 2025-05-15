import { Builder, By, until } from "selenium-webdriver";

async function testLogin() {
    const driver = new Builder().forBrowser("chrome").build();
    
    try {
        await driver.get("http://localhost:3000/login");

        // ✅ Valid login
        const emailField = await driver.findElement(By.name("email"));
        await emailField.sendKeys("testuser@example.com");

        const passwordField = await driver.findElement(By.name("password"));
        await passwordField.sendKeys("password123");

        const submitButton = await driver.findElement(By.css("button[type='submit']"));
        await submitButton.click();

        await driver.wait(until.urlContains("/dashboard"), 5000);
        console.log("✅ Valid login test passed!");

        // ✅ Logout before testing invalid login
        const logoutButton = await driver.wait(until.elementLocated(By.css("button.logout")), 5000);
        await logoutButton.click();
        await driver.wait(until.urlContains("/login"), 5000);

        // ❌ Invalid login attempt
        const wrongEmailField = await driver.findElement(By.name("email"));
        await wrongEmailField.sendKeys("wronguser@example.com");

        const wrongPasswordField = await driver.findElement(By.name("password"));
        await wrongPasswordField.sendKeys("wrongpassword");

        const wrongSubmitButton = await driver.findElement(By.css("button[type='submit']"));
        await wrongSubmitButton.click();

        await driver.wait(until.elementLocated(By.css(".error-message")), 5000);
        console.log("✅ Invalid login test passed!");
    } catch (error) {
        console.error("❌ Login test failed:", error);
    } finally {
        await driver.quit();
    }
}

testLogin();
