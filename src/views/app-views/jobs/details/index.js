import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Job from './job'
import Apply from './apply'
import { getJobDetails, fetchJobForm } from 'redux/actions'

const Details = ({
  match: {
    params: { id },
  },
  getJobDetails,
  fetchJobForm,
}) => {
  const [editFormVisibility, setEditFormVisibility] = useState(false)

  useEffect(() => {
    getJobDetails(id)
    fetchJobForm()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleShowApplyForm = () => setEditFormVisibility(true)
  const handleHideApplyForm = () => setEditFormVisibility(false)

  return (
    <>
      {editFormVisibility ? (
        <Apply handleHideApplyForm={handleHideApplyForm} />
      ) : (
        <Job handleShowApplyForm={handleShowApplyForm} />
      )}
    </>
  )
}

export default connect(null, { getJobDetails, fetchJobForm })(Details)
