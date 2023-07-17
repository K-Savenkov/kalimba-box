
import KalimbaButtons from './components/kalimbaButtons/KalimbaButtons'
import { useState } from 'react'

function App() {
  const [isKalimbaOn, setIsKalimbaOn] = useState(false)


  return isKalimbaOn ?
    <KalimbaButtons />
    : <div className='intro'>
      <p>
        This site will play kalimba sounds on hover cursor <br />and/or by pressing "q-p" 'a-l' keyboard layout<br />
      </p>
      <button type="button" onClick={() => { setIsKalimbaOn(true) }}>Click HERE turn on kalimba keyboard</button>
    </div>
}

export default App
