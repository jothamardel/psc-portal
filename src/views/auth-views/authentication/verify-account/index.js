import React from 'react'
import { connect } from 'react-redux'
import { Card, Row, Col, Form, Input, Button, Alert } from 'antd'
import { SecurityScanFilled } from '@ant-design/icons'
import { verifyAccount } from 'redux/actions/Auth'
import { Redirect } from 'react-router-dom'
import { motion } from 'framer-motion'
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const backgroundStyle = {
  backgroundColor: `#0a2644`,
}

const VerifyAccount = (props) => {
  const [form] = Form.useForm()

  const { is_authenticated, verifyAccount, verify_account, loading, error } =
    props

  const onVerify = (values) => {
    verifyAccount(values)
  }

  /**
   * Redirect to dashboard
   */

  if (is_authenticated && verify_account) {
    return <Redirect to={`${APP_PREFIX_PATH}/user-profile`} />
  }

  return (
    <>
      <div className='h-100' style={backgroundStyle}>
        <div className='container d-flex flex-column justify-content-center h-100'>
          <Row justify='center'>
            <Col xs={20} sm={20} md={20} lg={9}>
              <Card>
                <div className='my-2'>
                  <div className='text-center'>
                    <h3 className='mt-3 font-weight-bold'>Verify Account.</h3>
                    <p className='mb-4'>Enter token to verify account.</p>
                  </div>
                  <Row justify='center'>
                    <Col xs={24} sm={24} md={20} lg={20}>
                      <motion.div
                        initial={{ opacity: 0, marginBottom: 0 }}
                        animate={{
                          opacity: error ? 1 : 0,
                          marginBottom: error ? 20 : 0,
                        }}
                      >
                        <Alert
                          type='error'
                          showIcon
                          message={error && error}
                        ></Alert>
                      </motion.div>
                      <Form
                        form={form}
                        layout='vertical'
                        name='verify-account'
                        onFinish={onVerify}
                      >
                        <Form.Item
                          name='token'
                          rules={[
                            {
                              required: true,
                              message: 'Please input your token',
                            },
                          ]}
                        >
                          <Input
                            placeholder='Token'
                            prefix={
                              <SecurityScanFilled className='text-primary' />
                            }
                          />
                        </Form.Item>
                        <Form.Item>
                          <Button
                            loading={loading}
                            type='primary'
                            htmlType='submit'
                            block
                          >
                            {loading ? 'Sending' : 'Send'}
                          </Button>
                        </Form.Item>
                      </Form>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = ({ auth }) => {
  const { is_authenticated, verify_account, token, user, loading, error } = auth
  return { is_authenticated, verify_account, token, user, loading, error }
}

const mapDispatchToProps = {
  verifyAccount,
}

export default connect(mapStateToProps, mapDispatchToProps)(VerifyAccount)
