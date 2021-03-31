import React, {useContext} from 'react';
const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvier(props) {
  return (
    <AuthContext.Provider>
      {props.children}
    </AuthContext.Provider>
  )
}
