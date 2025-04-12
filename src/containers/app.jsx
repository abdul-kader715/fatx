import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../containers/HomePage/HomePage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/' exact />
      </Routes>

    </BrowserRouter>
  )
}

export default App
