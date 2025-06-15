class MenuPage {

    selectorsList() {
        const selectors = {
            adminButton: '[href="/web/index.php/admin/viewAdminModule"]', 
            pimButton: '[href="/web/index.php/pim/viewPimModule"]',
            leaveButton: '[href="/web/index.php/leave/viewLeaveModule"]',
            timeButton: '[href="/web/index.php/time/viewTimeModule"]',
            recruitmentButton: '[href="/web/index.php/recruitment/viewRecruitmentModule"]',
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            performanceButton: '[href="/web/index.php/performance/viewPerformanceModule"]',
            dashboardButton: '[href="/web/index.php/dashboard/index"]',
            directoryButton: '[href="/web/index.php/directory/viewDirectory"]',
            maintenanceButton: '[href="/web/index.php/maintenance/viewMaintenanceModule"]',
            claimButton: '[href="/web/index.php/claim/viewClaimModule"]',
            buzzButton: '[href="/web/index.php/buzz/viewBuzz"]',
        }

        return selectors
    }

    accessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
    }

    accessadminButton() {
        cy.get(this.selectorsList().adminButton).click()
    }

    accesspimButton() {
        cy.get(this.selectorsList().pimButton).click()
    }

    accessleaveButton() {
        cy.get(this.selectorsList().leaveButton).click()
    }

    accesstimeButton() {
        cy.get(this.selectorsList().timeButton).click()
    }

    accessrecruitmentButton() {
        cy.get(this.selectorsList().recruitmentButton).click()
    }

    accessperformanceButton() {
        cy.get(this.selectorsList().recruitmentButton).click()
    }

    accessdashboardbutton() {
        cy.get(this.selectorsList().dashboardButton).click()
    }

    accessdirecttoryButton() {
        cy.get(this.selectorsList().directoryButton).click()
    }

    accessmaintenanceButton() {
        cy.get(this.selectorsList().maintenanceButton).click()
    }

    accessclaimButton() {
        cy.get(this.selectorsList().claimButton).click()
    }

    accessbuzzButton() {
        cy.get(this.selectorsList().buzzButton).click()
    }
}

export default MenuPage