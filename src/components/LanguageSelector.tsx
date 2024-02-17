import { Form } from 'react-bootstrap'
import { SUPPORTED_LANGUAGES } from '../constants'

interface Props {
  onChange: (language: string) => void
}

export const LanguageSelector = ({ onChange }: Props) => {
  return (
    <Form.Select aria-label='Select a lanaguage'>
      {Object.entries(SUPPORTED_LANGUAGES).map(([languageKey, languageLiteral]) => (
        <option key={languageKey} value={languageKey}>{languageLiteral}</option>
      ))}

    </Form.Select>
  )
}
