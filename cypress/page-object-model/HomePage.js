import BasePage from "./BasePage";

class HomePage extends BasePage{

    get listMoviesLink() { return cy.xpath('//a[normalize-space()="List Movies"]'); }
    get createMoviesLink() { return cy.xpath('//a[normalize-space()="Create Movie"]'); }
    get inputNameFilter() { return cy.xpath('//div[contains(@class,"-filters")]//div//div[2]//input'); }
    get deleteButton() { return cy.xpath('(//div[contains(text(),"Delete")])[1]'); }
    get updateButton() { return cy.xpath('(//div[contains(text(),"Upadate")])[1]'); }
    get rowDivElements() { return cy.xpath('//div[@role="rowgroup"]//div[@role="row"]'); }


    clickCreateMovieLink() {
        this.createMoviesLink.click();
    }

    clickListMoviesLink() {
        this.listMoviesLink.click();
    }

    getInputNameFilter(name) {
        return this.inputNameFilter
            .clear()
            .type(name);
    }

    clickDeleteButton() {
        return this.deleteButton.click();
    }

    clickUpdateButton() {
        return this.updateButton.click();
    }
}

module.exports = new HomePage();