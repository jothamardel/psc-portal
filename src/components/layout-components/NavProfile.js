import React from 'react'
import { Menu, Dropdown, Avatar } from 'antd'
import { connect } from 'react-redux'
import { EditOutlined, LogoutOutlined } from '@ant-design/icons'
import Icon from 'components/util-components/Icon'
import { useHistory } from 'react-router-dom'

import { logoutUser } from 'redux/actions/Auth'
import { APP_PREFIX_PATH } from 'configs/AppConfig'

function unCamelCase(str) {
  return str.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
    return str.toUpperCase()
  })
}

const menuItem = [
  {
    title: 'Edit Profile',
    icon: EditOutlined,
    path: `${APP_PREFIX_PATH}/user/profile/edit-personal-profile`,
  },
]

export const NavProfile = ({ logoutUser, user }) => {
  let history = useHistory()
  const profileMenu = (
    <div className='nav-profile nav-dropdown'>
      <div className='nav-profile-header'>
        <div className='d-flex'>
          <Avatar size={45} src={user?.profilePicture} />
          <div className='pl-3'>
            <h4 className='mb-0'>{user?.fullName}</h4>
            <span className='text-muted'>
              {user && unCamelCase(user?.role)}
            </span>
          </div>
        </div>
      </div>
      <div className='nav-profile-body'>
        <Menu>
          {menuItem.map((el, i) => {
            return (
              <Menu.Item key={i}>
                <a href={el.path}>
                  <Icon className='mr-3' type={el.icon} />
                  <span className='font-weight-normal'>{el.title}</span>
                </a>
              </Menu.Item>
            )
          })}
          <Menu.Item
            key={menuItem.length + 1}
            onClick={(e) => logoutUser(history)}
          >
            <span>
              <LogoutOutlined className='mr-3' />
              <span className='font-weight-normal'>Sign Out</span>
            </span>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  )
  return (
    <Dropdown placement='bottomRight' overlay={profileMenu} trigger={['click']}>
      <Menu className='d-flex align-item-center' mode='horizontal'>
        <Menu.Item key='profile'>
          <Avatar src={user?.profilePicture} />
        </Menu.Item>
      </Menu>
    </Dropdown>
  )
}

const mapStateToProps = ({ auth }) => {
  const { user } = auth
  return {
    user,
  }
}

export default connect(mapStateToProps, { logoutUser })(NavProfile)
