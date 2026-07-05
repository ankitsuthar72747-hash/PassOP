import './App.css'
import Manager from './components/Manager'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {
 
  return (
    <>
    <Navbar/>
    <div className='min-h-[87vh] pb-28'>
    <Manager/>
    </div>
    <Footer/>
    </>
  )
}

export default App
