import React, { ReactNode } from 'react'
import { Button as AntButton } from 'antd'
import styled from '@emotion/styled'

type Props = {
  type?: string
  size?: string
  onClick?: Function
  children: ReactNode
  disabled?: boolean
}

const StyledButton = styled(AntButton)``

export const Button: React.FC<Props> = (props: Props) => {
  const { type, size, onClick, children, disabled } = props
  return (
    <StyledButton type={type} size={size} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  )
}

Button.defaultProps = {
  type: 'default',
  size: 'middle',
  onClick: () => {},
  disabled: false,
}
