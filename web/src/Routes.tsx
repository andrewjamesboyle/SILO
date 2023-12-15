// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import MapLayout from './layouts/MapLayout/MapLayout'

import { useAuth } from './auth'
// import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/home" page={HomePage} name="home" />
      <Route path="/sign-in" page={SignInPage} name="sign-in" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgot-password" />
      <Route path="/settings" page={SettingsPage} name="settings" />
      <Set wrap={MapLayout}>
        <Route path="/" page={MapPage} name="map" />
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
