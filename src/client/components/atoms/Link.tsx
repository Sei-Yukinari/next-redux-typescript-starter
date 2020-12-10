import React from 'react'
import * as nextLink from 'next/link'
import styled from '@emotion/styled'

type Props = {
  type: string
  buttonText: string
  href: string
}

const StyledButton = styled.button({
  margin: '5px',
  padding: '10px',
  borderRadius: '4px',
  backgroundColor: '#fff',
})

export const Link: React.FC<Props> = ({ href, buttonText }) => (
  <nextLink href={href}>
    <StyledButton type="button">{buttonText}</StyledButton>
  </nextLink>
)
