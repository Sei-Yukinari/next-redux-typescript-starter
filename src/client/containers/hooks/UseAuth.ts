import { useContext } from 'react'
import { UserContext } from '../../../pages/_app'

type UseAuthContext = {
  logout: Function
}

export const UseAuthDefaultValue: UseAuthContext = {
  logout: () => {},
}

export const useAuth = (): UseAuthContext => {
  const { logout } = useContext(UserContext)
  return { logout }
}
