describe('API Testing', () => {
   
     
    it('Approach 1: Hard-coded JSON object', () => {
       const requestBody1 = {
          tourist_name: "John",
          tourist_email: "johnxyz127@gmail.com",
          tourist_location: "London"
        };

        //created a json object and stored the request body.
   
        cy.request( { method: 'POST', 
                  url: 'http://restapi.adequateshop.com/api/Tourist',
                  body: requestBody1   //Directly passes the Json request body assigned to an object
                    })
         .then((response) => {
          expect(response.status).to.eq(201)
          expect(response.body.tourist_name).to.eq("John")
          expect(response.body.tourist_email).to.eq("johnxyz127@gmail.com")
          expect(response.body.tourist_location).to.eq("London")
          
        })
      })
    });



  it.only("Approach 2:Random generation of Request Body", () => 
  {
    const requestBody2 = {
      tourist_name: Math.random().toString(5).substring(2),
      tourist_email: Math.random().toString(5).substring(2)+"@gmail.com",
      tourist_location: "London"
    };

     cy.request( { method: 'POST', 
               url: 'http://restapi.adequateshop.com/api/Tourist',
               body: requestBody2
                 })
      .then((response) => {
       expect(response.status).to.eq(201)
       expect(response.body.tourist_name).to.eq(requestBody2.tourist_name)
      expect(response.body.tourist_email).to.eq(requestBody2.tourist_email)
      expect(response.body.tourist_location).to.eq(requestBody2.tourist_location)

     })
  });


  let Touristdetails: any;
    it.only('Approach 2: Body data from Fictures', () =>
    {
      cy.fixture("touristDetails").then((data) =>
      {
        Touristdetails = data;
        cy.request({
          method: "POST",
          url: Touristdetails.baseurl,
          body: Touristdetails
        })
        .then((response) => {
          expect(response.status).to.eq(201)
          expect(response.body.tourist_name).to.eq(Touristdetails.tourist_name)
         expect(response.body.tourist_email).to.eq(Touristdetails.tourist_email)
         expect(response.body.tourist_location).to.eq(Touristdetails.tourist_location)
   
        })
      });
     
   });

      

