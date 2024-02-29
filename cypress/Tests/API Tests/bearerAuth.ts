describe('Bearer Token Authentication', () =>
{
  const validToken = "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";

  it('Bearer Tocken Auth - Github Repo', () =>
  {
    cy.request({
        url: "https://api.github.com/user/repos",
        method: "GET",
        headers:
        {
           Authorization: "Bearer " +validToken
        }
    }).then((response) =>
    {
        expect(response.status).to.eq(200);
    })
  })
})

