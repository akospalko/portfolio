import './App.css'
import Header from './layout/Header'
import { Route, Routes } from "react-router-dom"
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import FullContent from './components/FullContent'
import PageNotFound from './components/PageNotFound'

function App() {
  return (
    <div className='layout-container' >
      {/* Header/Navigation layout */}
      <Header/>
      {/* Routes */}
      <Routes>
        <Route path={'/'} element={ <FullContent/> } />
        <Route path={'/about'} element={ <About/> } /> 
        <Route path={'/projects'} element={ <Projects/> } /> 
        <Route path={'/contact'} element={ <Contact/> } /> 
        <Route path={'*'} element={ <PageNotFound/> } /> 
      </Routes>
    </div>
  )
}

export default App