import './App.css'
import Sidebar from './components/sidebar/SideBar';
import Home from './components/home/Home';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import Blog from './components/blog/Blog';
import Pricing from './components/pricing/Pricing';
import Contact from './components/contact/Contact';
function App() {

  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
      <About />
      <Portfolio />
      <Resume />
      <Services />
      <Blog />
      <Testimonials/>
      <Pricing />
        <Contact />
      </main>
    
     
    </>
  )
}

export default App
