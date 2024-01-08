// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.

import { Router, Route, Set } from '@redwoodjs/router'
import MapLayoutProvider from './layouts/MapLayout/MapLayoutProvider'
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage'
import SignInPage from './pages/SignInPage/SignInPage'
import SettingsPage from './pages/SettingsPage/SettingsPage'
const Routes = () => {
  return (
    <Router>
      <Route path="/home" page={HomePage} name="home" />
      <Route path="/sign-in" page={SignInPage} name="sign-in" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgot-password" />
      <Route path="/settings" page={SettingsPage} name="settings" />
      <Set wrap={MapLayoutProvider}>
        <Route path="/" page={MapPage} name="map" />
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
