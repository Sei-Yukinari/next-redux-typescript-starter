import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import { getAuth } from '../../utils/firebaseHelpers'

const WithAuth = (Page: any) => {
  // @ts-ignore
  const FuncPage = ({ children, ...props }) => {
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

    return <Page {...props}>{children}</Page>
  }

  FuncPage.getInitialProps = async (ctx: any) => {
    return Page.getInitialProps && Page.getInitialProps(ctx)
  }
  return FuncPage
}

export default WithAuth
