import './App.css'
import Menu from './components/Menu';
import Router from './components/Routes';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuAside from './components/MenuAside';


export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <div className='container-fluid'>
          <div className='flex-xl-nowrap row'>
            <div className='col-xl-2 col-md-3 col-12 SideNav-SidePanel-module--cls2--1PH6H SideNav-SidePanel-module--cls1--34IFY d-flex flex-column'>
              <MenuAside />
            </div>
            <div className='Main-styles-module--main--2QNBf col-xl-8 col-md-9 col-12'>
              <Router />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}
