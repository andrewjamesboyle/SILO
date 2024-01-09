// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.

import { Router, Route, Set } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import MapLayoutProvider from './layouts/MapLayout/MapLayoutProvider'
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage'
import SettingsPage from './pages/SettingsPage/SettingsPage'
import SignInPage from './pages/SignInPage/SignInPage'
const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Points" titleTo="points" buttonLabel="New Point" buttonTo="newPoint">
        <Route path="/points/new" page={PointNewPointPage} name="newPoint" />
        <Route path="/points/{id:Int}/edit" page={PointEditPointPage} name="editPoint" />
        <Route path="/points/{id:Int}" page={PointPointPage} name="point" />
        <Route path="/points" page={PointPointsPage} name="points" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Polygons" titleTo="polygons" buttonLabel="New Polygon" buttonTo="newPolygon">
        <Route path="/polygons/new" page={PolygonNewPolygonPage} name="newPolygon" />
        <Route path="/polygons/{id:Int}/edit" page={PolygonEditPolygonPage} name="editPolygon" />
        <Route path="/polygons/{id:Int}" page={PolygonPolygonPage} name="polygon" />
        <Route path="/polygons" page={PolygonPolygonsPage} name="polygons" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Lines" titleTo="lines" buttonLabel="New Line" buttonTo="newLine">
        <Route path="/lines/new" page={LineNewLinePage} name="newLine" />
        <Route path="/lines/{id:Int}/edit" page={LineEditLinePage} name="editLine" />
        <Route path="/lines/{id:Int}" page={LineLinePage} name="line" />
        <Route path="/lines" page={LineLinesPage} name="lines" />
      </Set>
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
