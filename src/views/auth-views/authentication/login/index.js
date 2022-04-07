import React from 'react'
import LoginForm from '../../components/LoginForm'
import { Row, Col } from 'antd'
import { useSelector } from 'react-redux'

const backgroundStyle = {
  backgroundColor: `#0a2644`,
}

const Login = () => {
  const theme = useSelector((state) => state.theme.currentTheme)

  return (
    <div className={`h-100 ${theme === 'light' ? 'bg-white' : ''}`}>
      <Row justify='center' className='align-items-stretch h-100'>
        <Col xs={20} sm={20} md={24} lg={16}>
          <div className='container d-flex flex-column justify-content-center h-100'>
            <Row justify='center'>
              <Col xs={24} sm={24} md={20} lg={12} xl={8}>
                <h1>Sign In</h1>
                <p>
                  Don't have an account yet?{' '}
                  <a href='/auth/register'>Sign Up</a>
                </p>
                <div className='mt-4'>
                  <LoginForm allowRedirect={true} />
                </div>
                <p>
                  Forgot password?{' '}
                  <a href='/auth/forgot-password'>Recover Password</a>
                </p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xs={0} sm={0} md={0} lg={8}>
          <div
            className='d-flex flex-column justify-content-between h-100 px-4'
            style={backgroundStyle}
          >
            <div className='text-center mt-5'>
              <h1 className='text-white'>
                Police Service Commision Recruitment Portal
              </h1>
            </div>
            <Row justify='center'>
              <Col xs={0} sm={0} md={0} lg={20}>
                <div className='d-flex justify-content-center'>
                  <img
                    style={{ width: '11rem' }}
                    className='img-fluid mb-5'
                    src='/img/logo-main.png'
                    alt=''
                  />
                </div>
                <div className='mb-4'>
                  <h3 className='text-white'>Vision</h3>
                  <p className='text-white'>
                    A highly motivated, professional, disciplined and
                    accountable police service that upholds Human Rights.
                  </p>
                </div>
                <div>
                  <h3 className='text-white'>Mission Statement</h3>
                  <p className='text-white'>
                    To improve service delivery in the Nigeria Police Force by
                    promoting transparency and accountability in the Police
                    Force.
                  </p>
                </div>
              </Col>
            </Row>
            <div className='d-flex justify-content-end pb-4'>
              <div>
                <a
                  className='text-white'
                  href='/#'
                  onClick={(e) => e.preventDefault()}
                >
                  Term & Conditions
                </a>
                <span className='mx-2 text-white'> | </span>
                <a
                  className='text-white'
                  href='/#'
                  onClick={(e) => e.preventDefault()}
                >
                  Privacy & Policy
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Login
