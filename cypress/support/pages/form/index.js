import { el } from "./elements.js";

class FormPage {
  addFirstName(student) {
    cy.get(el.firstNameField).type(student.firstName);
  };

  addLastName(student){
    cy.get(el.lastNameField).type(student.lastName);
  };

  addEmail(student) {
    cy.get(el.userEmailField).type(student.email);
  };

  addGender(gender) {
    if(gender === "Male") {
      cy.get(el.genderMaleRadio).click({ force: true });
    } else if (gender === "Female") {
      cy.get(el.genderFemaleRadio).click({ force: true });
    } else {
      cy.get(el.gendeOtherRadio).click({ force: true });
    };
  };

  addPhone(student) {
    cy.get(el.mobilePhoneField).type(student.phone);
  };

  addBirthdate(student) {
    cy.get(el.dateOfBirthInput).invoke('val', '15 Feb 2000').trigger('change');
  };

  addSubjects(student) {
    cy.get(el.subjectsField).type(student.subjecs+ '{enter}');
  };

  addHobbies(hobbies) {
    if(hobbies === "Sports") {
      cy.get(el.sportsCheckbox).click({ force: true });
    } else if(hobbies === "Reading") {
      cy.get(el.readCheckbox).click({ force: true });
    } else {
      cy.get(el.musicCheckbox).click({ force: true });      
    };
  };

  addFile() {
    cy.fixture("accentureChallenge.txt").as("fileName");
    cy.get(el.uploadBtn).selectFile("@fileName", { force:true });
  };

  addAddress(student) {
    cy.get(el.addressBox).type(student.address);
  };

  addState() {
    cy.get(el.stateSelector).type('Haryana{enter}');
  };

  AddCity() {
    cy.get(el.citySelector).type('Panipat{enter}');    
  };

  fillAllFields(student) {
    this.addFirstName(student);
    this.addLastName(student);
    this.addEmail(student);
    this.addGender("Male");
    this.addPhone(student);
    this.addBirthdate(student);
    this.addSubjects(student);
    this.addHobbies("Sports");
    this.addFile();
    this.addAddress(student);
    this.addState();
    this.AddCity();
  };

  submitForm() {
    cy.get(el.submitBtn).click()
  }

  checkPopup(text) {
    cy.get(el.popupModal).should("contain", text);
  };

  closePopup() {
    cy.get(el.closePopup).click();
  };
};

export default new FormPage();
