import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import {
  SignIn as Component,
  InputSignIn,
} from '../components/organisms/SignIn'
import { singIn } from '../reducers/auth'
import { loginWithEmailAndPassword } from '../utils/firebaseHelpers'

const useDispatchProps = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const handleSignIn = useCallback(async (values: InputSignIn) => {
    const auth = await loginWithEmailAndPassword(values.email, values.password)
    await dispatch(singIn(auth?.user?.email))
    await router.push('/about')
  }, [])
  return { handleSignIn }
}
export default function SignInContainer() {
  const props = { ...useDispatchProps() }
  return <Component {...props} />
}
