// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'
import MapLayout from './layouts/MapLayout/MapLayout'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={ScaffoldLayout} title="Layers" titleTo="layers" buttonLabel="New Layer" buttonTo="newLayer">
        <Route path="/layers/new" page={LayerNewLayerPage} name="newLayer" />
        <Route path="/layers/{id:Int}/edit" page={LayerEditLayerPage} name="editLayer" />
        <Route path="/layers/{id:Int}" page={LayerLayerPage} name="layer" />
        <Route path="/layers" page={LayerLayersPage} name="layers" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Projects" titleTo="projects" buttonLabel="New Project" buttonTo="newProject">
        <Route path="/projects/new" page={ProjectNewProjectPage} name="newProject" />
        <Route path="/projects/{id:Int}/edit" page={ProjectEditProjectPage} name="editProject" />
        <Route path="/projects/{id:Int}" page={ProjectProjectPage} name="project" />
        <Route path="/projects" page={ProjectProjectsPage} name="projects" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Polygons" titleTo="polygons" buttonLabel="New Polygon" buttonTo="newPolygon">
        <Route path="/polygons/new" page={PolygonNewPolygonPage} name="newPolygon" />
        <Route path="/polygons/{id:Int}/edit" page={PolygonEditPolygonPage} name="editPolygon" />
        <Route path="/polygons/{id:Int}" page={PolygonPolygonPage} name="polygon" />
        <Route path="/polygons" page={PolygonPolygonsPage} name="polygons" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Points" titleTo="points" buttonLabel="New Point" buttonTo="newPoint">
        <Route path="/points/new" page={PointNewPointPage} name="newPoint" />
        <Route path="/points/{id:Int}/edit" page={PointEditPointPage} name="editPoint" />
        <Route path="/points/{id:Int}" page={PointPointPage} name="point" />
        <Route path="/points" page={PointPointsPage} name="points" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Lines" titleTo="lines" buttonLabel="New Line" buttonTo="newLine">
        <Route path="/lines/new" page={LineNewLinePage} name="newLine" />
        <Route path="/lines/{id:Int}/edit" page={LineEditLinePage} name="editLine" />
        <Route path="/lines/{id:Int}" page={LineLinePage} name="line" />
        <Route path="/lines" page={LineLinesPage} name="lines" />
      </Set>
      <Route path="/home" page={HomePage} name="home" />
      <Set wrap={MapLayout}>
        <Route path="/" page={MapPage} name="map" />
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
