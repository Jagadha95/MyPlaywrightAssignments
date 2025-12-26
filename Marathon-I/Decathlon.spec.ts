import { test, expect } from "@playwright/test";
test("Search Product and Add to Cart in Decathlon", async ({page}) => {
    // 1. Launch the browser and open https://www.decathlon.in/
    await page.goto("https://www.decathlon.in/");

    // 2. Verify URL using Playwright assertions
    await expect(page).toHaveTitle("Buy Sporting Goods, Sportswear and Equipments | Download App");

    // 3. Verify the Decathlon homepage is displayed
    await expect(page.locator("//div[@class='floor-25']//div").nth(0)).toBeVisible();
    console.log("Decathlon homepage is displayed.");
   
    // 4. Verify if search box is enabled
    let searchBox = page.locator("//div[@class='bg-grey-50 rounded-full']");
    await expect(searchBox).toBeEnabled();
    console.log("Search Box is enabled.");

    // 5. Click on the search Box
    await searchBox.click();
    await page.waitForTimeout(2000);

    // 6. Enter the product name “Shoes”
    await page.getByPlaceholder("Search For 60+ Sports and 6000+ Products").fill("Shoes");
    await page.waitForTimeout(2000);

    // 7. Press Enter or select a suggestion from the dropdown
    await searchBox.press("Enter");
    await page.waitForTimeout(2000);

    // 8. Verify the product listing page is displayed or Verify search results page title
    await expect(page).toHaveTitle("Search | Shoes");
    console.log("Product Listing Page is displayed.");

    // 9. Click on the Sport filter dropdown
    // 10. Select Running from the Sport dropdown
    await page.locator("//span[text()='Sport']/following-sibling::ul/li//span[contains(text(),'Running')]").click();
    await page.waitForTimeout(2000);

    // 11. Click on the Gender filter dropdown
    // 12. Select Men
    await page.locator("//span[text()='Gender']/following-sibling::ul/li//span[contains(text(),'Men')]").click();
    await page.waitForTimeout(2000);

    // 13. Click on the Size filter dropdown
    // 14. Select size UK 10
    await page.locator("//span[text()='Size']/following-sibling::ul/li//span[contains(text(),'Uk 10')]").click();

    // 15. Click on the Price filter dropdown
    // 16. Select a price range (e.g., ₹1000 – ₹3000)
    await page.locator("//span[text()='Most Relevant']").click();
    await page.locator("//ul/li/a[text()='Price: Low to High']").click();
   
    // 17. From the filtered results, click on the first available product
    await page.locator("(//div[@class='bg-grey-50']/img)[1]").click();
   
    // 18. On the product details page, select Size – UK 10
    await page.locator("//div[@id='size-select-container']//div[contains(text(),'UK 10.5')]").click();

    // 19. Click on Add to cart button
    await page.locator("//button[@aria-label='addToCart']").click();

    // 20. Verify that the product is successfully added to the cart
    expect(page.getByText("Product added to cart")).toBeVisible();
    console.log("Product successfully added to the cart.");
});