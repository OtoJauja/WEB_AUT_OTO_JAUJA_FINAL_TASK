import TextBoxPage from "../pageObjects/TextBox.page";
import CheckBoxPage from "../pageObjects/Checkbox,page";
import RadioButtonPage from "../pageObjects/RadioButton.page";
import BasePage from "../pageObjects/Base.page";


describe('Test Form Submission', () => {
  // Define your page elements
  const nameInput = '[id="firstName"]';
  const lastNameInput = '[id="lastName"]';
  const userEmailInput = '[id="userEmail"]';
  const userNumberInput = '[id="userNumber"]';
  const dateOfBirthInput = '[id="dateOfBirthInput"]';
  const subjectsInput = '[id="subjectsInput"]';
  const hobbiesMusicInput = '[id="hobbies-checkbox-3"]';
  const stateInput = '[id="stateCity-wrapper"] > [class=" css-tlfecz-indicatorContainer"]';
  const cityInput = '[id="city"] > .css-1hwfws3';
  const submitButton = '[id="submit"]';

  beforeEach(() => {
    // Open the website
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('Fill and validate the form', () => {
    // Input all the necessary information in the text fields
    cy.get(nameInput).type('John');
    cy.get(lastNameInput).type('Doe');
    cy.get(userEmailInput).type('john.doe@example.com');
    cy.get(userNumberInput).type('1234567890');

    // Set the Date of Birth with Calendar widget to 28th of February, 1930
    cy.get(dateOfBirthInput).click();
    cy.contains('1930').click();
    cy.contains('February').click();
    cy.get('.react-datepicker__day--028').click();

    // Set Subjects to Economics
    cy.get(subjectsInput).type('Economics{enter}');

    // Set Hobbies to Music
    cy.get(hobbiesMusicInput).check();

    // Upload an image
    cy.get('input[type="file"]').attachFile('files/your-image.jpg');

    // Set State to NCR
    cy.get(stateInput).type('NCR{enter}');

    // Set City to Delhi
    cy.get(cityInput).type('Delhi{enter}');

    // Click Submit
    cy.get(submitButton).click();

    // Validate that each Labeled row contains the correct information
    cy.get('#example-modal-sizes-title-lg').should('be.visible');
    cy.get('table').contains('td', 'Student Name').next().should('have.text', 'John Doe');
    cy.get('table').contains('td', 'Student Email').next().should('have.text', 'john.doe@example.com');
    // Do this for every label you wish to validate
  });
});
