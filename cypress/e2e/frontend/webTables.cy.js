import { HomePage, ItemsPage, WebTablesPage } from "../../support/pages";
import webTable from "../../fixtures/webTables.js";

describe('Web Tables', () => {
  it(`Scenario: Add a new employee
      Given I want to add a new employee
      When I fill in the employee's details
      Then the employee should be created successfully`, () => {
      
      HomePage.access();
      HomePage.accessCards("Elements");
      ItemsPage.accessItems("Web Tables");
      WebTablesPage.addPerson();
      WebTablesPage.fillAllFields(webTable);
      WebTablesPage.submitForm();
  });

  it(`Scenario: Edit an existing employee
      Given I want to edit an existing employee
      When I update the employee's details
      Then the employee's information should be updated successfully`, () => {
      
      HomePage.access();
      HomePage.accessCards("Elements");
      ItemsPage.accessItems("Web Tables");
      WebTablesPage.addPerson();
      WebTablesPage.fillAllFields(webTable);
      WebTablesPage.submitForm();
      WebTablesPage.editPerson();
      WebTablesPage.editFileds(webTable);
      WebTablesPage.submitForm();
  });

  it.only(`Scenario: Delete an existing employee
      Given I want to remove an existing employee
      When I delete the employee
      Then the employee's data should no longer appear`, () => {
      
      HomePage.access();
      HomePage.accessCards("Elements");
      ItemsPage.accessItems("Web Tables");
      WebTablesPage.addPerson();
      WebTablesPage.fillAllFields(webTable);
      WebTablesPage.submitForm();
      WebTablesPage.deletePerson();
      WebTablesPage.checkTable();
  });
});
