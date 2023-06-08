import BasePage from "./Base.page";

class CartPage extends BasePage{
    static get url(){
        return "/cart.html";
    }

    static get itemNames(){
        return cy.get(".cart_item_name");
    }

    static get itemName(){
        return cy.get(".cart_details_name");
    }
}

export default CartPage;