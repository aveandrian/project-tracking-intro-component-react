import Navbar from './components/Navbar'
import './App.css'

function App() {
  
  return (
    <>
    <div className='bg-figure'></div>
    <img className='bg-image' src='/images/illustration-devices.svg' alt='Illustration'></img>
    <Navbar />
    <main className='main-section'>
      <div className='main-header'>
        <div className='main-header-tag'>New</div>
        <p className='main-header-text'>Monograph Dashboard</p>
      </div>
      <h1 className='main-title'>Powerful insights into your team</h1>
      <p className='main-text'>Project planning and time tracking for agile teams</p>
      <div className='main-footer'>
        <button className='main-footer-btn'>Schedule a demo</button>
        <p className='main-footer-text'>to see a preview</p>
      </div>
    </main>
    <footer>
      <p className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/aveandrian">aveandrian</a>.
      </p>
    </footer>
    </>
  )
}

export default App
