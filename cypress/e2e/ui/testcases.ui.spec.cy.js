const HomePage = require('../../page-object-model/HomePage');
const CreateMovie = require('../../page-object-model/CreateMovie');

describe('Test cases UI', () => {

    let data;
    before(() => {
        cy.fixture('movieTest').then((fData) => {
            data = fData;
        });
    });
    
    beforeEach(() => {
        const uiUrl = Cypress.env('uiUrl');
        cy.visit(uiUrl);
    });

    it('Create Movie UI 1', () => {
        HomePage.clickCreateMovieLink();
        CreateMovie.inputName(data.movie.name);
        CreateMovie.inputRating(data.movie.rating);
        CreateMovie.inputTime(data.movie.time);
        CreateMovie.clickAddMovieButton();
        cy.on('window:alert',(t)=>{
            //assertion
            expect(t).to.contains('Movie inserted successfully');
         })
         HomePage.clickListMoviesLink();
         HomePage.getInputNameFilter(data.movie.name);
         HomePage.rowDivElements.should('have.length', 1)
        
    });

    it('Create Movie UI 2', () => {
        HomePage.clickCreateMovieLink();
        let movieName = 'The Matrix'
        CreateMovie.inputName(movieName);
        CreateMovie.inputRating('9.6');
        CreateMovie.inputTime('2h 16m');
        CreateMovie.clickAddMovieButton();
        cy.on('window:alert',(t)=>{
            //assertion
            expect(t).to.contains('Movie inserted successfully');
         })
         HomePage.clickListMoviesLink();
         HomePage.getInputNameFilter(movieName);
         HomePage.rowDivElements.should('have.length', 1)
        
    });

    it('Delete Movie UI', () => {
        HomePage.clickListMoviesLink();
        HomePage.getInputNameFilter(data.movie.name);
        HomePage.clickDeleteButton();
         cy.on('window:confirm', () => true);
        HomePage.getInputNameFilter(data.movie.name);
        HomePage.rowDivElements.should('have.length', 0)
    });
});
