import React from 'react'
import { NextPage } from 'next'
import { Header } from '../client/components/molecules/Header'
import { Layout } from '../client/components/utils/Layout'
import { LogOutButton } from '../client/components/molecules/LogOutButton'
import WithAuth from '../client/containers/hocs/WithAuth'
import { useAuth } from '../client/containers/hooks/UseAuth'

type Props = {
  res: string[]
}

const About: NextPage<Props> = ({ res }) => {
  const { logout } = useAuth()
  return (
    <>
      <Header subTitle="About" extra={<LogOutButton onClick={logout} />} />
      <p>about</p>
      {res
        .filter((_, index: number) => index < 20)
        .map((item: string) => (
          <Layout key={item}>
            ID:
            {item}
          </Layout>
        ))}
    </>
  )
}

About.getInitialProps = async () => {
  const data = await fetch(
    'https://hacker-news.firebaseio.com/v0/topstories.json'
  ).then((r) => r.json())
  return { res: data }
}

export default WithAuth(About)
