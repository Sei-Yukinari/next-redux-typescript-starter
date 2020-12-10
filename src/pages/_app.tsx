import React, { createContext, useCallback } from 'react'
import withRedux from 'next-redux-wrapper'
import { AppContext, AppInitialProps, AppProps } from 'next/app'
import Head from 'next/head'
import { Global, css } from '@emotion/core'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import { useRouter } from 'next/router'
import { configureStore } from '../client/store/configureStore'
import { normalize } from '../client/constants/normalize'
import 'antd/dist/antd.css'
import { logout } from '../client/utils/firebaseHelpers'
import { UseAuthDefaultValue } from '../client/containers/hooks/UseAuth'

type Props = { store: Store } & AppInitialProps & AppProps

type AppPage<P = {}> = {
  (props: P): JSX.Element | null
  getInitialProps: ({ Component, ctx }: AppContext) => Promise<AppInitialProps>
}

export const UserContext = createContext(UseAuthDefaultValue)

const App: AppPage<Props> = ({ store, pageProps, Component }) => {
  const router = useRouter()

  const handleSignOut = useCallback(async () => {
    await logout()
    await router.push('/signIn')
  }, [])

  return (
    <>
      <Head>
        <title>title</title>
      </Head>
      <Provider store={store}>
        <Global
          styles={css`
            ${normalize}
          `}
        />
        <UserContext.Provider
          value={{
            logout: handleSignOut,
          }}
        >
          <Component {...pageProps} />
        </UserContext.Provider>
      </Provider>
    </>
  )
}

App.getInitialProps = async ({ Component, ctx }: AppContext) => {
  return {
    pageProps: {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    },
  }
}

export default withRedux(configureStore)(App)
