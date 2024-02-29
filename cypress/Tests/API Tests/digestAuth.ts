describe("Digest Authentication", () =>
{
    it("Digest Auth", () =>
    {
       cy.request(
        {
          method: "GET",
          url: "https://postman-echo.com/basic-auth",
          auth: {
            username: 'postman',
            password: 'password',
            method: 'Digest'
          } 
        }).then((response) =>
        {
            expect(response.status).to.eq(200);
            expect(response.body.authenticated).to.eq(true);
        })
    })
})