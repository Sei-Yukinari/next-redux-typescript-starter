export const actionTypes = {
  SIGN_IN: 'AUTH/SIGN_IN',
} as const

export const singIn = (email: string | null | undefined) => ({
  type: actionTypes.SIGN_IN,
  payload: email,
})

export interface AuthState {
  auth: {
    email: string
  }
}

export type AuthAction = ReturnType<typeof singIn>

export const initialState: AuthState = {
  auth: {
    email: '',
  },
}

export const reducer = (state = initialState, action: AuthAction) => {
  if (action.type === actionTypes.SIGN_IN) {
    return {
      ...state,
      auth: {
        ...state.auth,
        email: action.payload,
      },
    }
  }
  return state
}
