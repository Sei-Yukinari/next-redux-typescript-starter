import React from 'react'
import { Button, Input, Form, Card } from 'antd'
import styled from '@emotion/styled'
import { Layout } from '../utils/Layout'

export interface InputSignIn {
  email: string
  password: string
}

type Props = {
  handleSignIn: (input: InputSignIn) => void
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
}

const CardLayout = styled(Card)`
  width: 500px;
`

export const SignIn: React.FC<Props> = ({ handleSignIn }) => {
  return (
    <>
      <Layout>
        <CardLayout>
          <Form {...layout} onFinish={handleSignIn}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'メールアドレスを入力してください' },
                {
                  type: 'email',
                  message: '有効なメールアドレスを入力してください',
                },
              ]}
            >
              <Input placeholder="メールアドレス" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: 'パスワードを入力してください' },
              ]}
            >
              <Input.Password placeholder="パスワード" />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </CardLayout>
      </Layout>
    </>
  )
}
