import { useKalimba } from './hooks/useKalimba'
import KalimbaButtons from './components/kalimbaButtons/KalimbaButtons'

function App() {
  const { kalimba } = useKalimba()



  return (
    <>
      <div className="card">
        {
          kalimba && <>
            <KalimbaButtons
              onKalimbaPlay={(note) => kalimba.play(note)}
            />
          </>
        }
      </div>
    </>
  )
}

export default App
