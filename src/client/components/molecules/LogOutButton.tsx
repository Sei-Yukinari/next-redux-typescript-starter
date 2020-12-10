import React from 'react'
import { Button } from 'antd'

type Props = {
  onClick: Function
}

export const LogOutButton: React.FC<Props> = ({ onClick }) => {
  // @ts-ignore
  return <Button onClick={onClick}>ログアウト</Button>
}

LogOutButton.defaultProps = {
  onClick: () => {},
}
