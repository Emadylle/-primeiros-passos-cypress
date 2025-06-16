import DashboardPage from "../pages/dashboardPage"
import MyInfoPage from '../pages/myInfoPage'

const myInfoPage = new MyInfoPage()
const dashboardPage = new DashboardPage()

describe('Login Orange HRM Tests', () => {


  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAcessInvalid()
  })

    it('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
  })

})