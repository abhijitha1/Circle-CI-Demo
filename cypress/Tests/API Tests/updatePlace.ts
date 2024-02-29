describe("Update the added place", () =>
{
    it("Update Place", () =>
    {
        cy.request({
            method: "PUT",
            url: "http://rahulshettyacademy.com/maps/api/place/get/json?place_id=3f65f85396e650203252935e2630d981&key=qaclick123",
            body: {
                "place_id":"3f65f85396e650203252935e2630d981",
                "address":"70 Summer walk, USA",
                "key":"qaclick123"
            }
        }).its('status').should('equal', 200);
    })
})