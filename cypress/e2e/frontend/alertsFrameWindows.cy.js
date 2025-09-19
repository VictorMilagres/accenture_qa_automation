import { HomePage, ItemsPage, WindowsPage } from "../../support/pages";

describe('template spec', () => {
  it(`Scenario: Validate new window opens
      Given I need to validate a new window
      When I select the option to open a new window
      Then the new window should open
      And the text "This is a sample page" should be displayed`, () => {
      
      HomePage.access();
      HomePage.accessCards("Alerts, Frame & Windows");
      ItemsPage.accessItems("Browser Windows");
      WindowsPage.openNewWindow();
      WindowsPage.validateText("This is a sample page");
  });
});