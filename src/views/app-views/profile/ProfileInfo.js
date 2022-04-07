import React from 'react'
import { Row, Col, Card, Avatar, Button } from 'antd'
import { Icon } from 'components/util-components/Icon'

import {
  GlobalOutlined,
  MailOutlined,
  HomeOutlined,
  PhoneOutlined,
  ProfileOutlined,
  UserOutlined,
} from '@ant-design/icons'
import Flex from 'components/shared-components/Flex'

const ProfileInfo = ({ user, handleShowEditForm }) => (
  <Card>
    <Row justify='center'>
      <Col sm={24} md={23}>
        <div className='d-md-flex'>
          <Avatar shape='square' size={90} src={user?.profilePicture} />

          <div className='ml-md-4 w-100'>
            <Flex
              alignItems='center'
              mobileFlex={false}
              className='mb-3 text-md-left text-center'
            >
              <h2 className='mb-0 mt-md-0 mt-2'>{user?.fullName}</h2>
              <div className='ml-md-3 mt-3 mt-md-0'>
                <Button
                  size='small'
                  type='primary'
                  onClick={() => handleShowEditForm()}
                >
                  Edit Profile
                </Button>
              </div>
            </Flex>
            <Row gutter='16'>
              <Col sm={24} md={24}>
                <p className='mt-0 mr-3 text-muted text-md-left text-center'>
                  It is a long established fact that a reader will be
                  distracted.
                </p>
              </Col>
              <Col xs={24} sm={24} md={12} className=''>
                <Row className='mb-2 mt-2 mt-md-0 '>
                  <Col xs={24} sm={24} md={24}>
                    <Icon
                      type={HomeOutlined}
                      className='text-primary font-size-md'
                    />
                    <span className='text-muted ml-2'>Role: </span>
                    <span className='font-weight-semibold'>{user?.role}</span>
                  </Col>
                </Row>
                <Row className='mb-2'>
                  <Col xs={24} sm={24} md={24}>
                    <Icon
                      type={MailOutlined}
                      className='text-primary font-size-md'
                    />
                    <span className='text-muted ml-2'>Email: </span>
                    <span className='font-weight-semibold'>{user?.email}</span>
                  </Col>
                </Row>
                <Row>
                  <Col xs={24} sm={24} md={24}>
                    <Icon
                      type={PhoneOutlined}
                      className='text-primary font-size-md'
                    />
                    <span className='text-muted ml-2'>Phone: </span>
                    <span className='font-weight-semibold'>{user?.phone}</span>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={24} md={12} className=''>
                <Row className='mb-2'>
                  <Col xs={24} sm={24} md={24}>
                    <Icon
                      type={GlobalOutlined}
                      className='text-primary font-size-md'
                    />
                    <span className='text-muted ml-2'>User Name: </span>
                    <span className='font-weight-semibold'>
                      {user?.username}
                    </span>
                  </Col>
                </Row>
                <Row className='mb-2'>
                  <Col xs={24} sm={24} md={24}>
                    <Icon
                      type={UserOutlined}
                      className='text-primary font-size-md'
                    />
                    <span className='text-muted ml-2'>Middle Name: </span>
                    <span className='font-weight-semibold'>
                      {user?.middleName}
                    </span>
                  </Col>
                </Row>
                <Row className='mb-2'>
                  <Col xs={24} sm={24} md={24}>
                    <Icon
                      type={ProfileOutlined}
                      className='text-primary font-size-md'
                    />
                    <span className='text-muted ml-2'>Gender: </span>
                    <span className='font-weight-semibold'>{user?.gender}</span>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </Col>
    </Row>
  </Card>
)

export default ProfileInfo
