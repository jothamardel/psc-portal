import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Input, Alert } from 'antd'
import { MailOutlined, LockOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
import { loginUser } from 'redux/actions'
import { useHistory, Redirect } from 'react-router-dom'
import { motion } from 'framer-motion'
import { APP_PREFIX_PATH } from 'configs/AppConfig'

export const LoginForm = (props) => {
  let history = useHistory()

  const {
    showForgetPassword,
    onForgetPasswordClick,
    loginUser,
    allowRedirect,
    is_authenticated,
    loading,
    token,
    error,
  } = props

  const initialCredential = {
    email: '',
    password: '',
  }

  const onLogin = (values) => {
    loginUser(values)
  }

  useEffect(() => {
    if (token !== null && allowRedirect) {
      history.push('/')
    }
  })

  /**
   * Redirect to dashboard
   */
  if (is_authenticated) {
    return <Redirect to={`${APP_PREFIX_PATH}/`} />
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
        layout='vertical'
        name='login-form'
        initialValues={initialCredential}
        onFinish={onLogin}
      >
        <Form.Item
          name='id'
          label='ID'
          rules={[
            {
              required: true,
              message: 'Please input your id',
            },
          ]}
        >
          <Input prefix={<MailOutlined className='text-primary' />} />
        </Form.Item>
        <Form.Item
          name='password'
          label={
            <div
              className={`${
                showForgetPassword
                  ? 'd-flex justify-content-between w-100 align-items-center'
                  : ''
              }`}
            >
              <span>Password</span>
              {showForgetPassword && (
                <span
                  onClick={() => onForgetPasswordClick}
                  className='cursor-pointer font-size-sm font-weight-normal text-muted'
                >
                  Forget Password?
                </span>
              )}
            </div>
          }
          rules={[
            {
              required: true,
              message: 'Please input your password',
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined className='text-primary' />} />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' block loading={loading}>
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

LoginForm.propTypes = {
  otherSignIn: PropTypes.bool,
  showForgetPassword: PropTypes.bool,
}

LoginForm.defaultProps = {
  otherSignIn: true,
  showForgetPassword: false,
}

const mapStateToProps = ({ auth }) => {
  const { is_authenticated, token, user, loading, error } = auth
  return { is_authenticated, token, user, loading, error }
}

const mapDispatchToProps = {
  loginUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
