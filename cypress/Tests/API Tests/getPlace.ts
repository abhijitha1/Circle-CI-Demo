describe("Get Place Information", () =>
{
    it("Get PLace", () =>
    {
        cy.request("https://rahulshettyacademy.com//maps/api/place/get/json?key=qaclick123&place_id=7f019c887acff9d88996603a13af4124")
        .its('status').should('equal', 200);
    })
})