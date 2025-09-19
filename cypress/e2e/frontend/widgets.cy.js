import { HomePage, ItemsPage, WidgetPage } from "../../support/pages";

describe('Forms', () => {
  it(`Scenario: Move progress bar and reset
      Given I want to move the progress bar
      And stop before 25%
      And then return the progress bar
      When the progress bar reaches 100%
      Then the progress bar should be reset`, () => {
      
      HomePage.access();
      HomePage.accessCards("Widgets");
      ItemsPage.accessItems("Progress Bar");
      WidgetPage.start();
      cy.wait(500); // espera um pouco para a barra andar
      WidgetPage.stop();

      // validar que barra <= 25%
      WidgetPage.validateMaxValue(25);

      // retomar até 100%
      WidgetPage.start();

      WidgetPage.waitUntil100ThenReset();

      // resetar e validar 0%
      WidgetPage.reset();
  });
});