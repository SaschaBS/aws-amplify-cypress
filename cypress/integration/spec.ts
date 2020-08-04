it('changes border color on focus', () => {
  const nameControl = 'mat-form-field#name_field';

  cy.visit('/');
  cy.get(nameControl).find('input').first().type('abc');

  cy.get(nameControl)
    .find('.mat-form-field-outline-start')
    .first()
    .should('have.css', 'color', 'rgb(0, 213, 185)');
});

it('changes border color on error', () => {
  const emailControl = 'mat-form-field:nth-child(4)';

  cy.visit('/');
  cy.get(emailControl).find('input').first().type('abc').blur();
  cy.get(emailControl)
    .find('mat-error')
    .first()
    .should('have.text', 'Not a valid email');
});
