import { Form } from 'react-bootstrap'
import { SUPPORTED_LANGUAGES } from '../constants'

export const LanguageSelector = ({ onChange }: { onChange: (language: string) => void }) => {
  return (
    <Form.Select aria-label='Select a lanaguage'>
      {Object.entries(SUPPORTED_LANGUAGES).map(([languageKey, languageLiteral]) => (
        <option key={languageKey} value={languageKey}>{languageLiteral}</option>
      ))}

    </Form.Select>
  )
}
