import './App.css'
import HeaderResponsive from './layout/HeaderResponsive'
import NavigationResponsive from './layout/NavigationResponsive'
import { Route, Routes } from "react-router-dom"
import Header from './layout/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Body from './layout/Body'

function App() {
  return (
    <div className={'layout'}>
      {/* <div className={'layout-header-pc'}>
        <Header/>
        </div> */}
      <div className={'layout-header-responsive'}>
        <HeaderResponsive/>
      </div>
      <div className={'layout-header-navigation'}>
        <NavigationResponsive/>
      </div>
      {/* Routes */}
      <Routes>
        <Route path={'/'}> home </Route>
        <Route path={'/about'} element={ <About/> } /> 
        <Route path={'/projects'} element={ <Contact/> } /> 
        <Route path={'/contact'} element={ <Projects/> } /> 
        {/* <div className={'layout-body'}> </div> */}
      </Routes>
    </div>
  )
}

export default App
