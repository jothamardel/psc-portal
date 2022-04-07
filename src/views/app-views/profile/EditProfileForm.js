import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {
  Form,
  Avatar,
  Button,
  Input,
  Select,
  Row,
  Col,
  message,
  Upload,
} from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { ROW_GUTTER } from 'constants/ThemeConstant'
import Flex from 'components/shared-components/Flex'
import { updateProfile } from 'redux/actions'

const EditProfile = (props) => {
  const { Option } = Select
  const avatarEndpoint = 'https://www.mocky.io/v2/5cc8019d300000980a055e76'
  const [state, setState] = useState({
    fullName: '',
    profilePicture: '/img/avatars/thumb-6.jpg',
    middleName: '',
    phone: '',
    gender: 'male',
  })

  const {
    user,
    updateProfile,
    update_profile,
    update_profile_loading,
    update_profile_error,
    handleHideEditForm,
  } = props

  const key = 'updatable'

  useEffect(() => {
    update_profile &&
      setTimeout(() => {
        setState((state) => ({
          ...state,
        }))
        message.success({
          content: `${update_profile?.message}!`,
          key,
          duration: 2,
        })
      }, 1000)

    update_profile_error &&
      setTimeout(() => {
        setState((state) => ({
          ...state,
        }))
        message.error({ content: 'Failed!', key, duration: 2 })
      }, 1000)
  }, [update_profile_error, update_profile])

  function getBase64(img, callback) {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
  }

  const onFinish = (values) => {
    const { profilePicture } = state
    const payload = {
      ...values,
      profilePicture,
    }
    updateProfile(payload, user?._id)
    update_profile_loading && message.loading({ content: 'Updating...', key })
  }

  const onUploadAavater = (info) => {
    console.log(info.file)
    if (info.file.status === 'upupdate_profile') {
      message.loading({
        content: 'Update_profile...',
        key,
        duration: 1000,
      })
      return
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (imageUrl) =>
        setState((state) => ({
          ...state,
          profilePicture: imageUrl,
        }))
      )
      message.success({ content: 'Uploaded!', key, duration: 1.5 })
    }
  }

  const onRemoveAvater = () => {
    setState((state) => ({
      ...state,
      profilePicture: '',
    }))
  }

  const { middleName, phone, gender, profilePicture, fullName } = state

  return (
    <>
      <Flex
        alignItems='center'
        mobileFlex={false}
        className='text-center text-md-left'
      >
        <Avatar size={90} src={profilePicture} icon={<UserOutlined />} />
        <div className='ml-3 mt-md-0 mt-3'>
          <Upload
            onChange={onUploadAavater}
            showUploadList={false}
            action={avatarEndpoint}
          >
            <Button type='primary'>Change Avatar</Button>
          </Upload>
          <Button className='ml-2' onClick={onRemoveAvater}>
            Remove
          </Button>
        </div>
      </Flex>
      <div className='mt-4'>
        <Form
          name='basicInformation'
          layout='vertical'
          initialValues={{
            middleName: middleName,
            gender: gender,
            phone: phone,
            fullName: fullName,
            profilePicture: profilePicture,
          }}
          onFinish={onFinish}
        >
          <Row>
            <Col xs={24} sm={24} md={24} lg={24}>
              <Row gutter={ROW_GUTTER}>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label='Full Name'
                    name='fullName'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your full name!',
                      },
                    ]}
                  >
                    <Input placeholder='Full Name' />
                  </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label='Middle Name'
                    name='middleName'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your middle name!',
                      },
                    ]}
                  >
                    <Input placeholder='Middle Name' />
                  </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label='Gender'
                    name='gender'
                    rules={[
                      {
                        required: true,
                        message: 'Please input a gender!',
                      },
                    ]}
                  >
                    <Select
                      style={{ width: '100%' }}
                      placeholder='Industry of Interest'
                    >
                      <Option value='male'>Male</Option>
                      <Option value='female'>Female</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label='Phone Number'
                    name='phone'
                    rules={[
                      {
                        required: true,
                        message: 'Please input a phone number!',
                      },
                    ]}
                  >
                    <Input placeholder='Phone Number' />
                  </Form.Item>
                </Col>
              </Row>

              <Button
                type='primary'
                htmlType='submit'
                loading={update_profile_loading}
              >
                Save Change
              </Button>
              <Button
                className='ml-4'
                onClick={() => handleHideEditForm()}
                type='primary'
                loading={update_profile_loading}
              >
                Finish
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  )
}

const mapDispatchToProps = {
  updateProfile,
}

export default connect(null, mapDispatchToProps)(EditProfile)
