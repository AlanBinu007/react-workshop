import React, { useContext, useReducer } from 'react'

const AuthStateContext = React.createContext()

const initialState = {
  authenticated: false,
  user: null
}

export function AuthStateProvider({ children }) {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'LOGIN':
        return { ...state, authenticated: true, user: action.user }
      case 'LOGOUT':
        return initialState
      default:
        return state
    }
  }, initialState)

  // api.auth.getAuthenticatedUser().then(user => {})

  const value = {
    ...state,
    dispatch
  }

  return <AuthStateContext.Provider value={value} children={children} />
}

export function useAuthState() {
  return useContext(AuthStateContext)
}
