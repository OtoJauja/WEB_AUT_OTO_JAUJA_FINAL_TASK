import fillInPage from "../pageObjects/FillInPage";

describe("Final tests", () => {
  beforeEach(() => {
    fillInPage.visit();
  });

  it('Final tasks', () => {
    //ievada visus nepieciešamo laukus
    fillInPage.firstName.type("Oto");
    fillInPage.lastName.type('Jauja');
    fillInPage.getEmail.type('oto.jauja@va.lv');
    fillInPage.getNumber.type('91021420');
    fillInPage.getAdress.type("Adress was here");;
    fillInPage.getGender.contains('Male').click();

    // uzpiež uz birth date
    fillInPage.getBirthDate.click();
  
    // navigē uz februāri
    fillInPage.getMonth.select('February');

    // navigē uz 1930 gadu
    fillInPage.getYear.select('1930');
  
    // selektē 28 dienu
    fillInPage.getDay.contains("28").click();

    // izvēlas subjektu economics
    fillInPage.getSubjects.type('Economics{enter}');

    // izvēlas mūziku
    fillInPage.getMusic.click();

    // augšuplādē foto
    fillInPage.uploadPhoto.click().selectFile('./cypress/fixtures/files/bilde.jpg');

    // izvēlas štatu kā NCR
    fillInPage.getState.click().type('NCR{enter}');

    // izvēlas pilšetu kā dehli
    fillInPage.getCity.click().type('Delhi{enter}');

    // nospiež submit
    fillInPage.clickSubmit.click();

    // validē laukumus
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