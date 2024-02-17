import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useStore } from './hooks/useStore'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { AUTO_LANGUAGE } from './constants'
import { SwapIcon } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelector'

function App () {
  const { fromLanguage, toLanguage, setFromLanguage, setToLanguage, interchangeLanguage } = useStore()
  return (
    <Container fluid>
      <h1>Google Translate Clone</h1>
      <Row>
        <Col>
          <LanguageSelector onChange={setFromLanguage} />
          {fromLanguage}
        </Col>
        <Col>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={() => { interchangeLanguage() }}>
            <SwapIcon />
          </Button>
        </Col>
        <Col>
          <LanguageSelector onChange={setToLanguage} />
          {toLanguage}
        </Col>
      </Row>
    </Container>
  )
}

export default App
