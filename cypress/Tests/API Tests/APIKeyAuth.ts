describe('API Key Authentication', () =>
{
    it('API Auth', ()=>
    {
       cy.request({
        method: 'GET',
        url: "api.openweathermap.org/data/2.5/forecast/daily?q=Delhi",
        qs:
        {
          q: "Delhi",
          appid: "fe9c5cddb7e01d747b4611c3fc9eaf2"
        }
       }).then((response) => 
       {
        expect(response.status).to.eq(200);
       })
    })
})