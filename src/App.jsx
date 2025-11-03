
import './App.css'
import HomePage from './pages/HomePage'
import Layout from './layouts/Layout'
import FilmPage from './pages/FilmPage'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/films/:id' element={<FilmPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
