import { Before } from "cypress-cucumber-preprocessor/steps";
const addToCart1: string = ".products";
const addToCart2: string = ".product";
const cartIcon: string = ".cart-icon";
const checkBox: string = "[type='checkbox']";
const promoCode1: string = ".promoCode";


let productnames: any;

beforeEach(() => 
{
  cy.fixture("productNames").then((data) => 
  {
    productnames = data;
  });
});


describe('Add products to cart and proceed with checkout', () => {
    it('should add products to cart and proceed with checkout', () => {
      // Navigate to the website
      cy.visit(productnames.baseurl);
  
      // Click on "Add to cart" option for some random listed products
      cy.get(addToCart1).find(addToCart2).eq(1).contains(productnames.addToCart).click()

      // Click on Cart option on the top right
      cy.get(cartIcon).click();
  
      // Click on 'Proceed to checkout'
      cy.contains(productnames.checkout).click();
  
      // Enter a random code within the 'Enter promo code' text box
      cy.get(promoCode1).type(productnames.randomCode);
  
      // Click on 'Apply' and wait for the "Invalid code" text
      cy.contains(productnames.apply).click();
  
      // Click on "Place order"
      cy.contains(productnames.order).click();
  
      // Select 'India' from the Choose country dynamic dropdown
      cy.get("select").select(productnames.country);
  
      // Check the 'Agree to terms and conditions' checkbox
      cy.get(checkBox).check({ force: true });
  
      // Click on proceed and verify the success message displayed
      cy.contains(productnames.proceed).click();
      cy.contains(productnames.checkoutVerificationText).should("be.visible");
    });
  });
  





