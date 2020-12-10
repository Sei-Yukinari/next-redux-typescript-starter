import React from 'react'
import { Store } from 'redux'
import { App } from '../client/containers/App'
import { AllAction, RootState } from '../client/reducers'
import { setTitle } from '../client/reducers/app'

const Index = () => <App />

Index.getInitialProps = async ({
  store,
}: {
  store: Store<RootState, AllAction>
}) => {
  store.dispatch(setTitle('Server Side Rendering'))
}

export default Index
