
import './App.css'
import HomePage from './pages/HomePage'
import Layout from './layouts/Layout'
import FilmPage from './pages/FilmPage'
import NotFoundPage from './pages/NotFoundPage'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/movies/:id' element={<FilmPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
