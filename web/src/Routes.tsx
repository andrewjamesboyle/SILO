// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import MapLayoutProvider from './layouts/MapLayout/MapLayoutProvider'

const Routes = () => {
  return (
    <Router>
      <Route path="/home" page={HomePage} name="home" />
      <Set wrap={MapLayoutProvider}>
        <Route path="/" page={MapPage} name="map" />
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
