import React, { useEffect } from 'react'
import { NextPage } from 'next'
import { AppAction, AppState } from '../../reducers/app'
import { Header } from '../molecules/Header'
import { Layout } from '../utils/Layout'

type Props = {
  app: AppState
  setTitle: (v: string) => AppAction
}

export const App: NextPage<Props> = ({ setTitle, app }) => {
  useEffect(() => {
    setTitle('Client Side Rendering')
  }, [setTitle])
  return (
    <>
      <Layout>
        <Header title={app.title} />
      </Layout>
    </>
  )
}
