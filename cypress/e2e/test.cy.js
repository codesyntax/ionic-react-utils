describe('My First Test', function () {
    it('Visits the app root url', function () {
        cy.visit('/folder/Inbox');
        cy.contains('#container', 'Inbox');
    });
});
