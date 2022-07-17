import BasePage from "./BasePage";

class CreateMovie extends BasePage{

    get inputNameField() { return cy.xpath('//input[1]'); }
    get inputRatingField() { return cy.xpath('//input[@type="number"]'); }
    get inputTimeField() { return cy.xpath('//input[3]'); }
    get addMovieButton() { return cy.xpath('//button[normalize-space()="Add Movie"]'); }
    
    clickAddMovieButton() {
        this.addMovieButton.click();
    }

    inputName(name) {
        return this.inputNameField
            .clear()
            .type(name);
    }

    inputRating(rating) {
        return this.inputRatingField
            .clear()
            .type(rating);
    }

    inputTime(time) {
        return this.inputTimeField
            .clear()
            .type(time);
    }
/*
    clickSearchButton() {
        return this.searchButton.click();
    }

    isSignedIn() {
        return this.signOutLink.should('exist');
    }
    */
}

module.exports = new CreateMovie();