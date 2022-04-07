import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Card } from 'antd'

import AvatarStatus from 'components/shared-components/AvatarStatus'
import { getJobsList } from 'redux/actions'
import { useHistory } from 'react-router-dom'
import Inside from 'views/app-views/components/feedback/spin/Inside'
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const JobLists = ({ handleRedirect, get_jobs_list }) => (
  <>
    {get_jobs_list?.map((elm, i) => {
      return (
        <Card key={`eduction-${i}`}>
          <Row>
            <Col sm={24} md={24}>
              <div
                className={`${i === get_jobs_list.length - 1 ? '' : 'mb-2'}`}
              >
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleRedirect(elm._id)}
                >
                  <AvatarStatus
                    src='/img/logo-main.png'
                    name={elm.title}
                    subTitle={`Starting: ${elm?.startDate} ~  Closing: ${elm?.closingDate}`}
                  />
                </span>
                <div className='pl-5'>
                  <p className='mt-2 mb-2'>{elm.jobDescription}</p>
                  <Row className='d-flex justify-content-between'>
                    <Col xs={24} sm={24} md={6}>
                      <strong>
                        <span>Salary : </span>
                      </strong>
                      <span>{elm?.salary}</span>
                    </Col>
                    <Col xs={24} sm={24} md={6}>
                      <strong>
                        <span>Salary type : </span>
                      </strong>
                      <span>{elm?.salaryType}</span>
                    </Col>
                    <Col xs={24} sm={24} md={6}>
                      <strong>
                        <span>Industry : </span>
                      </strong>
                      <span>{elm?.industry}</span>
                    </Col>
                    <Col xs={24} sm={24} md={6}>
                      <strong>
                        <span>Employment type : </span>
                      </strong>
                      <span>{elm?.employmentType}</span>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      )
    })}
  </>
)

const JobsList = ({ getJobsList, get_jobs_list, get_jobs_list_loading }) => {
  let history = useHistory()

  useEffect(() => {
    getJobsList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleRedirect = (jobId) =>
    history.push(`${APP_PREFIX_PATH}/jobs/${jobId}`)

  return (
    <>
      <div className='container my-4'>
        <h1>All Jobs</h1>
        <Row gutter='16'>
          <Col xs={24} sm={24} md={24}>
            {get_jobs_list_loading ? (
              <Inside />
            ) : (
              <JobLists
                get_jobs_list={get_jobs_list}
                handleRedirect={handleRedirect}
              />
            )}
          </Col>
        </Row>
      </div>
    </>
  )
}

const mapStateToProps = ({ jobs }) => {
  const { get_jobs_list, get_jobs_list_loading, get_jobs_list_error } = jobs
  return {
    get_jobs_list,
    get_jobs_list_loading,
    get_jobs_list_error,
  }
}

export default connect(mapStateToProps, {
  getJobsList,
})(JobsList)

// _id(pin):"61b7b637a26a391b340cdde7"
// author(pin):"61b272cfe26857c2f8a6e802"
// title(pin):"Frontend Developer"
// salary(pin):"400000"
// salaryType(pin):"monthly"
// employmentType(pin):"contract"
// jobDescription(pin):"some description about the job posting."
// workExperience(pin):"2-4"
// location(pin):"algeria"
// 0(pin):"Cert 1"
// 1(pin):"Cert 2"
// 2(pin):"Cert 3"
// 0(pin):"JS"
// 1(pin):"Python"
// industry(pin):"tech"
// startDate(pin):"2021-06-16"
// closingDate(pin):"2021-11-18"
// createdAt(pin):"2021-12-13T21:08:07.313Z"
// updatedAt(pin):"2021-12-13T21:08:07.313Z"
