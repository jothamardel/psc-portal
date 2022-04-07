import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'

const notification = (type, message, properties) => {
  switch (type) {
    case 'success':
      toast.success(message, properties)
      break
    case 'error':
      toast.error(message, properties)
      break
    case 'info':
      toast.info(message, properties)
      break
    case 'warning':
      toast.warning(message, properties)
      break
    case 'danger':
      toast.error(message, properties)
      break
    default:
      toast.info(message, properties)
  }
}

const Alert = ({ alert }) => {
  const [properties] = useState({
    position: 'top-center',
    autoClose: alert[0].timeOut,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  })
  return (
    <Fragment>
      {alert !== null && alert.length > 0
        ? notification(alert[0].alertType, alert[0].msg.message, properties)
        : ''}
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  alert: state.alert,
})

Alert.propTypes = {
  alert: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(Alert)
