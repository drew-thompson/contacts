import { getGreeting } from '../support/app.po';

describe('contacts', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to contacts!');
  });
});
