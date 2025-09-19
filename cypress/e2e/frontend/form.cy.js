import { HomePage, ItemsPage, FormPage } from "../../support/pages";
import student from "../../fixtures/student.js";

describe('template spec', () => {
  it(`Given I need to fill out the student form
      When I enter all valid informations in the form
      Then the form should be submitted successfully`, () => {
      
      HomePage.access();
      HomePage.accessCards("Forms");
      ItemsPage.accessItems("Practice Form");
      FormPage.fillAllFields(student);
      FormPage.submitForm();
      FormPage.checkPopup("Thanks for submitting the form");
      FormPage.closePopup();
  });
});