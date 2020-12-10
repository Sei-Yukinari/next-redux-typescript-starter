import 'firebase/auth'
import firebase from 'firebase/app'
import firebaseConfig from '../../config/firebaseConfig.json'

let app: firebase.app.App | null = null

export function getApp() {
  if (app) return app
  if (firebase.apps.length > 0) {
    app = firebase.app()
    return app
  }
  app = firebase.initializeApp(firebaseConfig)
  return app
}

export function getAuth(): firebase.auth.Auth {
  return getApp().auth()
}

export async function loginWithEmailAndPassword(
  email: string,
  password: string
): Promise<firebase.auth.UserCredential | null> {
  try {
    const user = await getAuth().signInWithEmailAndPassword(email, password)
    console.log('login success', user)
    return user
  } catch (error) {
    console.error('login failed', error)
    return null
  }
}

// eslint-disable-next-line no-underscore-dangle
// @ts-ignore
// eslint-disable-next-line no-underscore-dangle
globalThis._app = firebase
export async function logout() {
  try {
    const user = await firebase.auth().signOut()
    console.log(user)
  } catch (error) {
    console.error('login failed', error)
  }
}
