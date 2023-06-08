
class fillInPage {

    static get url(){
        return "/automation-practice-form";
    }

    static visit(){
        cy.visit(this.url);
    }

    static get firstName()
    {
        return cy.get("input#firstName");
    }

    static get lastName()
    {
        return cy.get("input#lastName");
    }

    static get getEmail()
    {
        return cy.get('input#userEmail');
    }

    static get getNumber()
    {
        return cy.get('input#userNumber');
    }

    static get getAdress()
    {
        return cy.get('textarea#currentAddress');
    }

    static get getGender()
    {
        return cy.get('label.custom-control-label');
    }

    static get getGender()
    {
        return cy.get('label.custom-control-label');
    }

    static get getBirthDate()
    {
        return cy.get('input#dateOfBirthInput');
    }

    static get getMonth()
    {
        return cy.get('select.react-datepicker__month-select');
    }

    static get getYear()
    {
        return cy.get('.react-datepicker__year-select');
    }

    static get getDay()
    {
        return cy.get('div.react-datepicker__week div');
    }

    static get getSubjects()
    {
        return cy.get('input#subjectsInput');
    }

    static get getMusic()
    {
        return cy.get('label[for="hobbies-checkbox-3"]');
    }

    static get getState()
    {
        return cy.get('div#state');
    }

    static get getCity()
    {
        return cy.get('div#city');
    }

    static get clickSubmit()
    {
        return cy.get('button#submit');
    }

}

export default fillInPage;