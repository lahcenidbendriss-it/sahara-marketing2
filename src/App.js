import React from 'react'
import About from './pages/about'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Services from './pages/Services'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Home />  }/>
        <Route path='/Services'  element={<Services />  }/>
        <Route path='/Contact'  element={<Contact />  }/>
        <Route path='/About'  element={<About />  }/>

      </Routes>

      </BrowserRouter>

      
    </div>
  )
}

export default App
