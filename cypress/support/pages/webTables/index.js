import { el } from "./elements.js";

class WebTablesPage {
  addPerson() {
    cy.get(el.addBtn).click();
  }

  addFirstName(webTable) {
    cy.get(el.firstNameField)
    .clear()
    .type(webTable.firstName);
  };

  addLastName(webTable){
    cy.get(el.lastNameField).type(webTable.lastName);
  };

  addEmail(webTable) {
    cy.get(el.emailField)
    .clear()
    .type(webTable.email);
  };

  addAge(webTable) {
    cy.get(el.ageField).type(webTable.age);
  };

  addSalary(webTable) {
    cy.get(el.salaryField).type(webTable.salary);
  };

  addDepartment(webTable) {
    cy.get(el.departmentSelector)
    .clear()
    .type(webTable.department);
  };

  fillAllFields(webTable) {
    this.addFirstName(webTable);
    this.addLastName(webTable);
    this.addEmail(webTable);
    this.addAge(webTable);
    this.addSalary(webTable);
    this.addDepartment(webTable);
  };

  submitForm() {
    cy.get(el.submitBtn).click()
  }

  editPerson() {
    cy.get(el.editBtn).click()
  }

  editFileds(webTable){
    this.addFirstName(webTable);
    this.addEmail(webTable);
  }

  deletePerson() {
    cy.get(el.deleteBtn).click()
  }

  checkTable() {
    cy.get(el.tableBody)
    .filter((index, row) => Cypress.$(row).text().trim().length > 0)
    .should("have.length", 3);
  }
};

export default new WebTablesPage();
