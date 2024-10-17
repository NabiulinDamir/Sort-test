describe('UI Tests', () => {
    it('should display the Sort button', () => {
        cy.visit('http://localhost:3000');    // URL приложения
        cy.get('button').contains('Sort').should('be.visible');
    });

    it('should sort the array when the Sort button is clicked', () => {
        cy.visit('http://localhost:3000');//URL  приложения
        cy.get('input[type="text"]').type('5, 3, 8, 1, 2');  //правильный селектор
        cy.get('button').contains('Sort').click();
        cy.get('.sorted-result').should('contain', '1, 2, 3, 5, 8');   //селектор для ожидаемого результата
    });
});