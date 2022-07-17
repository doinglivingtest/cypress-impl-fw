const movies = require('../../fixtures/populatingMovies');
let movieName = '';
let movieRating = '';
let movieTime = '';
let movieId = '';
let flagVars = true;

describe('Test cases API', () => {

    movies.forEach((movie) => {
        it('Populating React APP - POST', () => {
            cy.fixture('populatingMovies').as('movies');
            const apiServer = Cypress.env('apiServer');
            cy.request({
                method: 'POST', 
                url: apiServer + '/movie', 
                body: {
                  name: movie.name,
                  rating: movie.rating,
                  time: movie.time
                }
              }).then( (response) => {
                expect(response.status).to.eq(208)
                expect(response.body).to.have.property('id')
                expect(response.body).to.have.property('success', true)
                expect(response.body).to.have.property('message', 'Movie created!')

                if(flagVars){
                    movieName = movie.name;
                    movieRating = parseFloat(movie.rating);
                    movieTime = movie.time;
                    movieId = response.body.id;
                    flagVars = false;
                  }
              })
          })
    });
    

    it('Get all the movies - GET', () => {
        const apiServer = Cypress.env('apiServer');
        cy.request({
            method: 'GET', 
            url: apiServer + '/movies', 
          }).then( (response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('success', true)
            expect(response.body.data).to.have.length(20)
          })
        
    });
    

    it('Get a specific movie - GET', () => {
        const apiServer = Cypress.env('apiServer');
        cy.request({
            method: 'GET', 
            url: apiServer + '/movie/' + movieId, 
          }).then( (response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('success', true);
            expect(response.body.data.time[0]).to.equal('1h 20m');
            expect(response.body.data).to.have.property('name', movieName);
            expect(response.body.data).to.have.property('rating', movieRating);
            expect(response.body.data).to.have.property('_id', movieId);
          })
        
    });

    it('Update a specific movie - PUT', () => {
        const apiServer = Cypress.env('apiServer');
        cy.request({
            method: 'PUT', 
            url: apiServer + '/movie/' + movieId,
            body: {
                name: 'Movie Update Test PUT',
                rating: '10',
                time: '1h 58m'
              } 
          }).then( (response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('success', true);
            expect(response.body).to.have.property('message', 'Movie updated!');
            expect(response.body).to.have.property('id', movieId);
          })
        
    });

    it('Delete a specific movie - DELETE', () => {
        const apiServer = Cypress.env('apiServer');
        cy.request({
            method: 'DELETE', 
            url: apiServer + '/movie/' + movieId
          }).then( (response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('success', true);
          })
        
    });

    it('Delete an invalid movie - DELETE', () => {
        const apiServer = Cypress.env('apiServer');
        cy.request({
            method: 'DELETE', 
            url: apiServer + '/movie/' + 111
          }).then( (response) => {
            expect(response.status).to.eq(404);
            expect(response.body).to.have.property('success', false);
            expect(response.body).to.have.property('error', 'Movie not found');
          })
        
    });

    it('Get an invalid movie - GET', () => {
        const apiServer = Cypress.env('apiServer');
        cy.request({
            method: 'GET', 
            failOnStatusCode: false,
            url: apiServer + '/movie/' + 111
          }).then( (response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('success', false);
          })
        
    });

    it('Create a movie with no data- POST', () => {
        const apiServer = Cypress.env('apiServer');
        cy.request({
            method: 'POST', 
            failOnStatusCode: false,
            url: apiServer + '/movie', 
            body: {
              name: '',
              rating: '',
              time: ''
            }
          }).then( (response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('error');
            expect(response.body).to.have.property('message', 'Movie not created!');
            
          })
      })
});
