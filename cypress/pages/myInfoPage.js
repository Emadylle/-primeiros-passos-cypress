class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            genericCombobox: ".oxd-select-text--arrow",
            secondItemCombobox: ".oxd-select-dropdown > :nth-child(6)",
            thirdItemCombox: ":nth-child(3) > span",
            dateCloseButton: ".--close",
            submitButton: ".oxd-button--secondary",
        }

        return selectors
        }

        fillPersonalDetails(firstName, lastName) {
            cy.get(this.selectorsList().firstNameField).clear().type(firstName)
            cy.get(this.selectorsList().lastNameField).clear().type(lastName)
          //cy.get(selectorsList.genericField).eq(3).clear().type(nickName)
        }

        fillEmployeeDetails(employee, otherId, driversLicenseNumber,expiryDate, sinNumber) {
            cy.get(this.selectorsList().genericField).eq(3).clear().type(employee)
            cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
            cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber)
            cy.get(this.selectorsList().genericField).eq(6).clear({ force : true }).type(expiryDate)
            cy.get(this.selectorsList().dateCloseButton).click()
          //cy.get(this.selectorsList().genericField).eq(7).clear().type(ssnNumber)
            cy.get(this.selectorsList().genericField).eq(8).clear().type(sinNumber)
        }

        saveForm() {
            cy.get(this.selectorsList().submitButton).eq(0).click({ force : true })
            cy.get('body').should('contain', 'Successfully Updated')
            cy.get('.oxd-toast-close')
        }

        fillStatus() {
             cy.get(this.selectorsList().genericCombobox).eq(0).click({ force : true })
             cy.get(this.selectorsList().secondItemCombobox).click()
             cy.get(this.selectorsList().genericCombobox).eq(1).click({ force : true })
             cy.get(this.selectorsList().thirdItemCombox).click()
        }
    
}

export default MyInfoPage