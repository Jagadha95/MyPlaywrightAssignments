import { test, expect } from '@playwright/test';
test("Book Movie Ticket in PVR Cinemas", async ({page}) => {
    
    // 1. Launch the browser and open https://www.pvrcinemas.com/
    await page.goto("https://www.pvrcinemas.com/");

    // 2. Select the city as Chennai
    let locationsideBar= page.locator("//div[@role='complementary']");
    let isLocationSideBarVisible = await locationsideBar.isVisible();
    if (isLocationSideBarVisible) {
        let citySelector = page.locator("//div[@class ='cities-names']/h6[text()='Chennai']");
        await citySelector.click();
        await page.waitForTimeout(2000);
    }

    // 3. Choose cinema from the available list
    await page.locator("//div[@class='date-show']/span[text()='Cinema']").click();
    await page.locator("//div[@id='cinema']/span").click();
    // Select the theater as "INOX The Marina Mall, OMR, Chennai"
    await page.locator("//ul[@role='listbox']/li/span[text()='INOX The Marina Mall, OMR, Chennai']").click();
    
    // 4. Select movie date
    await page.locator("//ul[@role='listbox']/li[3]").click();
   
    // 5. Choose any available movie
    await page.locator("//ul[@role='listbox']/li/span[text()='ANACONDA']").click();
    
    // 6. Select available show time
    await page.locator("//ul[@role='listbox']/li[1]").click();
   
    // 7. Click on Book button
    await page.locator("//button[@aria-label='Submit']/span").click();
    
    // 8. Click on Accept for Terms & Conditions
    await page.locator("//button[text()='Accept']").click();
   
    // 9. Select any available seat and proceed to payment
    await page.locator("//span[@id='CL.CLUB|I:2']").click();
    
    // 10. Verify seat information and total ticket amount using assertions
    let ticketValue = await page.locator("(//span[@class='seats_area_type'])[2]").textContent();
    let netAmount = await page.locator("(//div[@class='ticket-price']/p)[1]").textContent();
    let seatNumber = await page.locator("//div[@class='seat-number']/p").textContent();
    let ticketValueReplaced = ticketValue?.replaceAll(/[^0-9.]/g, '');
    expect(ticketValueReplaced).toEqual(netAmount?.trim());
    console.log("Ticket value matches the net amount: " + ticketValueReplaced);
    expect(seatNumber).toBe("I2");
    console.log("Seat number is as expected: " + seatNumber);

    //  11. Verify the Title of the page
    expect(await page.title()).toBe("PVR Cinemas");
    console.log("Page title is as expected: PVR Cinemas");

    // 12. Click on Proceed button to go to payment gateway
    await page.locator("//button[text()='Proceed']").click();
    console.log("Test completed successfully.");

});