import React, { useState } from 'react'
import { connect } from 'react-redux'
import ProfileInfo from './ProfileInfo'
import EditProfileForm from './EditProfileForm'

const EditProfile = (props) => {
  const {
    user,
    updateProfile,
    update_profile,
    update_profile_loading,
    update_profile_error,
  } = props

  const [editFormVisibility, setEditFormVisibility] = useState(false)

  const handleShowEditForm = () => setEditFormVisibility(true)
  const handleHideEditForm = () => setEditFormVisibility(false)

  return (
    <>
      {editFormVisibility ? (
        <EditProfileForm
          handleHideEditForm={handleHideEditForm}
          user={user}
          updateProfile={updateProfile}
          update_profile={update_profile}
          update_profile_loading={update_profile_loading}
          update_profile_error={update_profile_error}
        />
      ) : (
        <ProfileInfo user={user} handleShowEditForm={handleShowEditForm} />
      )}
    </>
  )
}

const mapStateToProps = (state) => {
  const { update_profile, update_profile_loading, update_profile_error } =
    state.user
  const { user } = state.auth
  return { user, update_profile, update_profile_loading, update_profile_error }
}

export default connect(mapStateToProps)(EditProfile)
