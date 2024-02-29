describe("Delete the place", () =>
{
    it("Delete Place", () =>
    {
        cy.request({
            method: 'DELETE',
            url: 'https://rahulshettyacademy.com/maps/api/place/delete/json?key=qaclick123',
            body:
            {
                "place_id":"4cac338cf1e44416a23ef2d84d45bbb8"

            }

        }).its('status').should('equal', 200);
    })
})