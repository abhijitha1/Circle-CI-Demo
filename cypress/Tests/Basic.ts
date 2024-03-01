it("test1", function()
{
  cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/", {timeout:4000});
  let x = "Test"
  x.concat("23")
  cy.log(x)
  let x1: number = 23;
  let x2: string = "Test3"
  let x3: Boolean = true
})

it("learning assertions", function()
{
    let Array: number [] = [1,2,3,4,5];
    let tuple: [number, number] = [1,2];

    type point = {x: number, y: number}; //using type annotation to initialise the intent
    let center: point = { x: 0, y: 2 }; //Javascript variables initialised to objects
    center.x = 123; //We can directly modify the values of the objects using type variables.
    center.y = 223;
    let example: any;

})

it("learning assertions", function()
{
    let Array: number [] = [1,2,3,4,5];
    let tuple: [number, number] = [1,2];

    type point = {x: number, y: number}; //using type annotation to initialise the intent
    let center: point = { x: 0, y: 2 }; //Javascript variables initialised to objects
    center.x = 13; //We can directly modify the values of the objects using type variables.
    center.y = 23;
    let example: any;

})

it("learning assertions", function()
{
    let Array: number [] = [1,2,3,4,5];
    let tuple: [number, number] = [1,2];

    type point = {x: number, y: number}; //using type annotation to initialise the intent
    let center: point = { x: 0, y: 2 }; //Javascript variables initialised to objects
    center.x = 23; //We can directly modify the values of the objects using type variables.
    center.y = 3;
    let example: any;

})
