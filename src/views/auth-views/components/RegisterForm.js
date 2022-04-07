import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  LockOutlined,
  MailOutlined,
  UserAddOutlined,
  UserSwitchOutlined,
} from '@ant-design/icons'
import { Button, Form, Input, Alert } from 'antd'
import { registerUser } from 'redux/actions/Auth'
import { useHistory, Redirect } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AUTH_PREFIX_PATH } from 'configs/AppConfig'

const rules = {
  email: [
    {
      required: true,
      message: 'Please input your email address',
    },
    {
      type: 'email',
      message: 'Please enter a validate email!',
    },
  ],
  fullName: [
    {
      required: true,
      message: 'Please input your full name',
    },
  ],
  username: [
    {
      required: true,
      message: 'Please input your user name',
    },
  ],
  password: [
    {
      required: true,
      message: 'Please input your password',
    },
  ],
  confirm: [
    {
      required: true,
      message: 'Please confirm your password!',
    },
    ({ getFieldValue }) => ({
      validator(rule, value) {
        if (!value || getFieldValue('password') === value) {
          return Promise.resolve()
        }
        return Promise.reject('Passwords do not match!')
      },
    }),
  ],
}

export const RegisterForm = (props) => {
  const { registerUser, is_registered, token, loading, error, allowRedirect } =
    props
  const [form] = Form.useForm()
  let history = useHistory()

  const onSignUp = () => {
    form
      .validateFields()
      .then((values) => {
        const { confirm, ...rest } = values
        const payload = {
          ...rest,
        }
        registerUser(payload)
      })
      .catch((info) => {
        console.log('Validate Failed:', info)
      })
  }

  useEffect(() => {
    if (token !== null && allowRedirect) {
      history.push('/')
    }
  })

  /**
   * Redirect to verify account
   */

  if (is_registered) {
    return <Redirect to={`${AUTH_PREFIX_PATH}/verify-account`} />
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, marginBottom: 0 }}
        animate={{
          opacity: error ? 1 : 0,
          marginBottom: error ? 20 : 0,
        }}
      >
        <Alert type='error' showIcon message={error && error}></Alert>
      </motion.div>
      <Form
        form={form}
        layout='vertical'
        name='register-form'
        onFinish={onSignUp}
      >
        <Form.Item
          name='username'
          label='User Name'
          rules={rules.username}
          hasFeedback
        >
          <Input prefix={<UserAddOutlined className='text-primary' />} />
        </Form.Item>
        <Form.Item
          name='fullName'
          label='Full Name'
          rules={rules.fullName}
          hasFeedback
        >
          <Input prefix={<UserSwitchOutlined className='text-primary' />} />
        </Form.Item>
        <Form.Item name='email' label='Email' rules={rules.email} hasFeedback>
          <Input prefix={<MailOutlined className='text-primary' />} />
        </Form.Item>
        <Form.Item
          name='password'
          label='Password'
          rules={rules.password}
          hasFeedback
        >
          <Input.Password prefix={<LockOutlined className='text-primary' />} />
        </Form.Item>
        <Form.Item
          name='confirm'
          label='Confirm Password'
          rules={rules.confirm}
          hasFeedback
        >
          <Input.Password prefix={<LockOutlined className='text-primary' />} />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' block loading={loading}>
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

const mapStateToProps = ({ auth }) => {
  const { loading, is_registered, error, token } = auth
  return { loading, is_registered, error, token }
}

const mapDispatchToProps = {
  registerUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
