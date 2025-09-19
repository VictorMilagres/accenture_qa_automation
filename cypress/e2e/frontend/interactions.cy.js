import { HomePage, ItemsPage, InteractionsPage } from "../../support/pages";

describe('Interactions', () => {
  it(`Scenario: Sort a list of numbers
      Given I access a list containing unordered numbers
      When I sort the numbers
      Then the list should be sorted from the smallest to the largest number`, () => {
      
      HomePage.access();
      HomePage.accessCards("Interactions");
      ItemsPage.accessItems("Sortable");
      InteractionsPage.dragItem(0, 5);
      InteractionsPage.dragItem(1, 1);
      InteractionsPage.dragItem(2, 0);
      InteractionsPage.dragItem(3, 3);
      InteractionsPage.dragItem(4, 4);
      InteractionsPage.dragItem(5, 2);
      InteractionsPage.validateOrder([0,1,2,3,4,5]);
  });
});
