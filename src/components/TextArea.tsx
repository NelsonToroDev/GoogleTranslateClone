import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'
import React from 'react'

interface Props {
  type: SectionType
  loading?: boolean
  onChange: (value: string) => void
  value: string
}

const commonStyles = { border: 0, height: '200px', resize: 'none' }

const getPlaceholder = ({ type, loading }: { type: SectionType, loading?: boolean }) => {
  if (type === SectionType.From) return 'Insert a text'
  if (loading === true) return 'Loading...'
  return 'Translation'
}

export const TextArea = ({ type, loading, onChange, value }: Props) => {
  const styles = type === SectionType.From
    ? commonStyles
    : { ...commonStyles, backgroundColor: '#f5f5f5' }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return (
    <Form.Control
      as='textarea'
      disabled={type === SectionType.To}
      placeholder={getPlaceholder({ type, loading })}
      autoFocus={type === SectionType.From}
      value={value}
      onChange={handleChange}
      style={styles}
    />
  )
}
