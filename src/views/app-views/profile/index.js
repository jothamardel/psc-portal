import React, { Component } from 'react'
import { UserOutlined, CreditCardOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import { Link, Redirect, Route, Switch } from 'react-router-dom'
import InnerAppLayout from 'layouts/inner-app-layout'
import EditProfile from './EditProfile'
import CreateBusinessProfile from './CreateBusinessProfile'

const SettingOption = ({ match, location }) => {
  return (
    <Menu
      defaultSelectedKeys={`${match.url}/edit-personal-profile`}
      mode='inline'
      selectedKeys={[location.pathname]}
    >
      <Menu.Item key={`${match.url}/edit-personal-profile`}>
        <UserOutlined />
        <span>Edit Personal Profile</span>
        <Link to={'edit-personal-profile'} />
      </Menu.Item>

      <Menu.Item key={`${match.url}/create-basic-professional-profile`}>
        <CreditCardOutlined />
        <span>Create Basic Professional Profile</span>
        <Link to={`create-basic-professional-profile`} />
      </Menu.Item>
    </Menu>
  )
}

const SettingContent = ({ match }) => {
  return (
    <Switch>
      <Redirect
        exact
        from={`${match.url}`}
        to={`${match.url}/edit-personal-profile`}
      />
      <Route
        path={`${match.url}/edit-personal-profile`}
        component={EditProfile}
      />
      <Route
        path={`${match.url}/create-basic-professional-profile`}
        component={CreateBusinessProfile}
      />
    </Switch>
  )
}

export class Setting extends Component {
  render() {
    return (
      <InnerAppLayout
        sideContentWidth={320}
        sideContent={<SettingOption {...this.props} />}
        mainContent={<SettingContent {...this.props} />}
      />
    )
  }
}

export default Setting
