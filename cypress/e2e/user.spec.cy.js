import userData from '../fixtures/userData.json'
import DashboardPage from '../pages/dashboardPage'
import LoginPage from '../pages/loginPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {


  it('User Info  Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails('First Name', 'Last Name')
    myInfoPage.fillEmployeeDetails('Employee', 'other ID', 'Drivers Number', '2025-06-15', '564131')
    myInfoPage.fillStatus()
    myInfoPage.saveForm() 
  })



  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAcessInvalid()
    



    //cy.get(selectorsList.wrongCredentialAlert)
    
  })
})