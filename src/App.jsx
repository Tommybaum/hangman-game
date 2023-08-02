
import Game from './components/Game'
import { Route, Routes, Link } from 'react-router-dom'
import Instructions from './components/instructions'

function App() {


  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/">Game</Link>
          <Link to="/instructions">Instructions</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Game />}></Route>
            <Route path="/instructions" element={<Instructions />}></Route>
          </Routes> 
         </div>
        {/* <Game /> */}
      </div>



    </>
  )
}

export default App
