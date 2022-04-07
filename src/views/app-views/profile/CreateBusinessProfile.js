import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Form, Button, Input, Row, Col, message, Select } from 'antd'
import { ROW_GUTTER } from 'constants/ThemeConstant'
import { createProfile } from 'redux/actions'

const createProfileState = {
  briefDescriptionOfSelf: '',
  industryOfInterest: '',
  highestLevelOfEducation: '',
  skills: '',
}

export const CreateProfile = (props) => {
  const { TextArea } = Input
  const { Option } = Select

  const [state, setState] = useState(createProfileState)

  const {
    user,
    createProfile,
    create_profile,
    create_profile_loading,
    create_profile_error,
  } = props

  const key = 'updatable'

  useEffect(() => {
    create_profile &&
      setTimeout(() => {
        setState((state) => ({
          ...state,
        }))
        message.success({
          content: `${create_profile?.message}!`,
          key,
          duration: 2,
        })
      }, 1000)

    create_profile_error &&
      setTimeout(() => {
        setState((state) => ({
          ...state,
        }))
        message.error({ content: 'Failed!', key, duration: 2 })
      }, 1000)
  }, [create_profile_error, create_profile])

  const onFinish = (values) => {
    const { profilePicture } = state
    const payload = {
      ...values,
      profilePicture,
    }
    createProfile(payload, user?._id)
    create_profile_loading && message.loading({ content: 'Creating...', key })
  }

  return (
    <Form
      name='profile'
      layout='vertical'
      initialValues={{}}
      onFinish={onFinish}
    >
      <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Row gutter={ROW_GUTTER}>
            <Col xs={24} sm={24} md={24}>
              <Form.Item
                label='Brief description about yourself'
                name='briefDescriptionOfSelf'
                rules={[
                  {
                    required: true,
                    message: 'Please input a brief description about yourself!',
                  },
                ]}
              >
                <TextArea
                  placeholder='Describe yourself briefly'
                  autoSize={{ minRows: 3, maxRows: 5 }}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item
                label='Industry of interest'
                name='industryOfInterest'
                rules={[
                  {
                    required: true,
                    message: 'Please select an industry!',
                  },
                ]}
              >
                <Select
                  className='mr-2'
                  style={{ width: '100%' }}
                  placeholder='Industry of Interest'
                >
                  <Option value=''></Option>
                  <Option value='jack'>Jack</Option>
                  <Option value='lucy'>Lucy</Option>
                  <Option value='Yiminghe'>yiminghe</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col xs={24} sm={24} md={12}>
              <Form.Item
                label='Highest Level of Education'
                name='highestLevelOfEducation'
                rules={[
                  {
                    required: true,
                    message: 'Please select a level of education!',
                  },
                ]}
              >
                <Select
                  className='mr-2'
                  placeholder='Highest level of education'
                  style={{ width: '100%' }}
                >
                  <Option value=''></Option>
                  <Option value='degree'>Degree</Option>
                  <Option value='education'>Education</Option>
                  <Option value='follower'>Following</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col xs={24} sm={24} md={12}>
              <Form.Item
                label='Skills'
                name='skills'
                rules={[
                  {
                    required: true,
                    message: 'Please select one or more skills!',
                  },
                ]}
              >
                <Select
                  mode='multiple'
                  placeholder='Skills'
                  style={{ width: '100%' }}
                >
                  <Option></Option>
                  <Option value='fishing'>Fishing</Option>
                  <Option value='fighting'>Fighting</Option>
                  <Option value='sowing'>Sowing</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Button
            type='primary'
            htmlType='submit'
            loading={create_profile_loading}
          >
            Save Change
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

const mapStateToProps = (state) => {
  const { create_profile, create_profile_loading, create_profile_error } =
    state.user
  const { user } = state.auth
  return { user, create_profile, create_profile_loading, create_profile_error }
}

const mapDispatchToProps = {
  createProfile,
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfile)
