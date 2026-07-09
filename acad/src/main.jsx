import { StrictMode , useRef } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
// import Navbar from './components/Navbar.jsx'
// import ShowPage from './components/ShowPage.jsx'
// import Features from './components/Features.jsx'
// import Typewriter from './components/Typewriter.jsx'
// import Pricing from './components/Pricing.jsx'
// import TopPush from './components/TopPush.jsx'
// import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  <App/>
    {/* <Navbar/>
    <ShowPage />
    <Typewriter/>
    <Features />
    <Pricing />
    <TopPush/>
    <Footer/> */}
  </BrowserRouter>,
)
