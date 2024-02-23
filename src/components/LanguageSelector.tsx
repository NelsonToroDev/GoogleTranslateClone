import { Form } from 'react-bootstrap'
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../constants'
import { type FunctionComponent } from 'react'
import { SectionType, type FromLanguage, type Language } from '../types.d'

type Props =
  | { type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void }
  | { type: SectionType.To, value: Language, onChange: (language: Language) => void }

export const LanguageSelector: FunctionComponent<Props> = ({ type, value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (type === SectionType.From) {
      onChange(event.target.value as FromLanguage)
    }

    if (type === SectionType.To) {
      onChange(event.target.value as Language)
    }
  }

  return (
    <Form.Select aria-label='Select a language' onChange={handleChange} value={value}>
      {type === SectionType.From && <option key={AUTO_LANGUAGE} value={AUTO_LANGUAGE}>Detect Language</option>}
      {Object.entries(SUPPORTED_LANGUAGES).map(([languageKey, languageLiteral]) => (
        <option key={languageKey} value={languageKey}>{languageLiteral}</option>
      ))}
    </Form.Select>
  )
}
