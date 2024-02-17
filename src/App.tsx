import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useStore } from './hooks/useStore'

function App () {
  const { fromLanguage, setFromLanguage } = useStore()
  return (
    <div className='App'>
      <h1>Google Translate Clone</h1>
      <button onClick={() => { setFromLanguage('Spanish') }}>
        Change to Spanish
      </button>
      <h2>{fromLanguage}</h2>
    </div>
  )
}

export default App
