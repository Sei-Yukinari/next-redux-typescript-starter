import React, { ReactNode } from 'react'
import styled from '@emotion/styled'
import { PageHeader } from 'antd'

const StyledPageHeader = styled(PageHeader)`
  border: 1px solid rgb(235, 237, 240);
`

type Props = {
  title?: string
  subTitle?: string
  extra?: ReactNode
}

export const Header: React.FC<Props> = ({ title, subTitle, extra }) => (
  <StyledPageHeader title={title} subTitle={subTitle} extra={extra} />
)

Header.defaultProps = {
  title: 'title',
  subTitle: 'subTitle',
  extra: null,
}
