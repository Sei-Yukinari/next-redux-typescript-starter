import React from 'react'
import SignInContainer from '../client/containers/SignIn'
import { Header } from '../client/components/molecules/Header'

const SignIn = () => (
  <>
    <Header subTitle="Auth" />
    <SignInContainer />
  </>
)

export default SignIn
