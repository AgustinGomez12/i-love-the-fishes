import './App.scss'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import MainsContainer from './components/MainsContainer'
function App() {
  

  return (
    <BrowserRouter>
     <Header/>
      <Routes>
      <Route path='/' element={<MainsContainer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
