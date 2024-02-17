export interface State {
  fromText: string
  result: string
  fromLanguage: string
  toLanguage: string
  loading: boolean
}

export type Action =
  | { type: 'SET_FROM_LANGUAGE', payload: string }
  | { type: 'INTERCHANGE_LANGUAGES' }
  | { type: 'SET_TO_LANGUAGES', payload: string }
  | { type: 'SET_FROM_TEXT', payload: string }
  | { type: 'SET_TO_TEXT', payload: string }
  | { type: 'SET_RESULT', payload: string }
