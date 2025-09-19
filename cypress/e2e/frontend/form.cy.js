import { HomePage, ItemsPage } from "../../support/pages"

describe('template spec', () => {
  it(`Given I need to fill out the student form
      When I enter all valid information in the form
      Then the form should be submitted successfully`, () => {
      
      HomePage.access()
      HomePage.accessCards("Forms")
      ItemsPage.accessItems("Practice Form")
  })
})