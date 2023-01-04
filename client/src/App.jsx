import './App.css'
import Header from './layout/Header'
import { Route, Routes } from "react-router-dom"
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
// import Body from './layout/Body'

function App() {
  return (
    <div className={'layout'}>
      {/* Header/Navigation layout */}
        <Header/>
      {/* Routes */}
      <Routes>
        <Route path={'/'}> home </Route>
        <Route path={'/about'} element={ <About/> } /> 
        <Route path={'/projects'} element={ <Projects/> } /> 
        <Route path={'/contact'} element={ <Contact/> } /> 
        {/* <div className={'layout-body'}> </div> */}
      </Routes>
    </div>
  )
}

export default App