import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import { getAuth } from '../../utils/firebaseHelpers'

interface Props {
  AuthenticatedComponent: React.ReactNode
}

export const Auth: React.FC<Props> = ({ AuthenticatedComponent }) => {
  const router = useRouter()
  const [user] = useAuthState(getAuth())

  useEffect(() => {
    if (router.pathname === '/signIn') {
      return
    }
    if (!user) {
      router.push('/signIn')
    }
  }, [])

  return <>{AuthenticatedComponent}</>
}
