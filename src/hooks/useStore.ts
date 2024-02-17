import { useReducer } from 'react'
import { type Action, type State } from '../types.d'

const initialState: State = {
  fromLanguage: '',
  toLanguage: '',
  fromText: '',
  result: '',
  loading: false
}

function reducer (state: State, action: Action) {
  const { type } = action
  if (type === 'INTERCHANGE_LANGUAGES') {
    return {
      ...state,
      toLanguage: state.fromLanguage,
      fromLanguage: state.toLanguage,
      fromText: state.result,
      result: state.fromText
    }
  }

  if (type === 'SET_FROM_TEXT') {
    return {
      ...state,
      loading: true,
      fromText: action.payload,
      result: ''
    }
  }

  if (type === 'SET_TO_TEXT') {
    return {
      ...state,
      loading: true,
      toText: action.payload,
      result: ''
    }
  }
  if (type === 'SET_FROM_LANGUAGE') {
    return {
      ...state,
      loading: true,
      fromLanguage: action.payload,
      result: ''
    }
  }
  if (type === 'SET_RESULT') {
    return {
      ...state,
      loading: true,
      result: action.payload
    }
  }
  return state
}

export function useStore () {
  const [{
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading
  }, dispatch] = useReducer(reducer, initialState)

  const interchangeLanguage = () => {
    dispatch({ type: 'INTERCHANGE_LANGUAGES' })
  }

  const setFromLanguage = (payload: string) => {
    dispatch({ type: 'SET_FROM_LANGUAGE', payload })
  }

  const setToLanguage = (payload: string) => {
    dispatch({ type: 'SET_TO_LANGUAGE', payload })
  }

  const setFromText = (payload: string) => {
    dispatch({ type: 'SET_FROM_TEXT', payload })
  }

  const setResult = (payload: string) => {
    dispatch({ type: 'SET_RESULT', payload })
  }

  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchangeLanguage,
    setFromLanguage,
    setFromText,
    setResult
  }
}