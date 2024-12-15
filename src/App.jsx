import './App.scss'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import MainsContainer from './components/MainsContainer'
import Footer from './components/Footer'
import DocNemo from './components/DocNemo'

function App() {
  

  return (
    <BrowserRouter>
     <Header/>
      <Routes>
      <Route path='/' element={<MainsContainer/>}/>
      </Routes>
      <DocNemo/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
