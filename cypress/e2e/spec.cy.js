import fillInPage from "../pageObjects/FillInPage";

describe("Final tests", () => {
  beforeEach(() => {
    // Open the website
    fillInPage.visit();
  });

  it('Final tasks', () => {
    // Input all the necessary information in the text fields
    fillInPage.firstName.type("Oto");
    fillInPage.lastName.type('Jauja');
    fillInPage.getEmail.type('oto.jauja@va.lv');
    fillInPage.getNumber.type('91021420');
    fillInPage.getAdress.type("Adress was here");;
    fillInPage.getGender.contains('Male').click();

    // Set the Date of Birth with Calendar widget to 28th of February, 1930
    fillInPage.getBirthDate.click();
  
    // Navigate to February
    fillInPage.getMonth.select('February');

    // Navigate to 1930
    fillInPage.getYear.select('1930');
  
    // Select the 28th
    fillInPage.getDay.contains("28").click();

    // Set Subjects to Economics
    fillInPage.getSubjects.type('Economics{enter}');

    // Set Hobbies to Music
    fillInPage.getMusic.click();

    // Upload an image
    fillInPage.uploadPhoto.click().selectFile('./cypress/fixtures/files/bilde.jpg');

    // Set State to NCR
    fillInPage.getState.click().type('NCR{enter}');

    // Set City to Delhi
    fillInPage.getCity.click().type('Delhi{enter}');

    // Click Submit
    fillInPage.clickSubmit.click();

    // Validate that each Labeled row contains the correct information
    cy.get('#example-modal-sizes-title-lg').should('be.visible');
    cy.get('table').contains('td', 'Student Name').next().should('have.text', 'Oto Jauja');
    cy.get('table').contains('td', 'Student Email').next().should('have.text', 'oto.jauja@va.lv');
    cy.get('table').contains('td', 'Gender').next().should('have.text', 'Male');
    cy.get('table').contains('td', 'Mobile').next().should('have.text', '91021420');
    cy.get('table').contains('td', 'Date of Birth').next().should('have.text', '28 January,1930');
    cy.get('table').contains('td', 'Subjects').next().should('have.text', 'Economics');
    cy.get('table').contains('td', 'Hobbies').next().should('have.text', 'Music');
    cy.get('table').contains('td', 'Picture').next().should('have.text', 'bilde.jpg');
    cy.get('table').contains('td', 'Address').next().should('have.text', 'Adress was here');
    cy.get('table').contains('td', 'State and City').next().should('have.text', 'NCR Delhi');
  });
});