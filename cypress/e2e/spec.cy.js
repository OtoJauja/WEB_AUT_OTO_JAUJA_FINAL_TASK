import TextBoxPage from "../pageObjects/TextBox.page";
import CheckBoxPage from "../pageObjects/Checkbox,page";
import RadioButtonPage from "../pageObjects/RadioButton.page";
import BasePage from "../pageObjects/Base.page";

describe("DemoQA spec", () => {
  context("Textbox scenarios", () => {
    beforeEach(() => {
      cy.visit("/");
      TextBoxPage.visit();
    });
  });
});