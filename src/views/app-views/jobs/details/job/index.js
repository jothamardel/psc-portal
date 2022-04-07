import React from 'react'
import { connect } from 'react-redux'
import { Button, Row, Col } from 'antd'
import AvatarStatus from 'components/shared-components/AvatarStatus'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { LeftCircleOutlined } from '@ant-design/icons'
import Inside from 'views/app-views/components/feedback/spin/Inside'
import { APP_PREFIX_PATH } from 'configs/AppConfig'
import { applyJob } from 'redux/actions'

const JobDetail = ({
  handleShowApplyForm,
  get_job_details,
  get_job_details_loading,
  // get_job_details_error,
}) => {
  const history = useHistory()

  const back = () => {
    history.push(`${APP_PREFIX_PATH}/jobs/list`)
  }

  return (
    <div className='container my-4'>
      {get_job_details_loading ? (
        <Inside />
      ) : (
        get_job_details && (
          <div className='mail-detail'>
            <div className='d-md-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center mb-3'>
                <div
                  style={{ cursor: 'pointer' }}
                  className='font-size-md mr-3'
                  onClick={() => {
                    back()
                  }}
                >
                  <LeftCircleOutlined className='mail-detail-action-icon font-size-md ml-0' />
                </div>
                <AvatarStatus
                  src={get_job_details?.avatar}
                  name={get_job_details?.title}
                  subTitle={`Location: ${get_job_details?.location}`}
                />
              </div>
              <Button onClick={handleShowApplyForm} type='primary'>
                Apply
              </Button>
            </div>
            <div className='mail-detail-content'>
              <h3 className='mb-3'>{get_job_details.title}</h3>
              <div className='mb-3'>
                <p
                  dangerouslySetInnerHTML={{
                    __html: get_job_details?.jobDescription,
                  }}
                />
              </div>
              <Row gutter={10}>
                <Col sm={24} md={12}>
                  {/* <Card title='Job Description'> */}

                  <h4 className='font-weight-semibold'>Skills</h4>
                  {get_job_details?.skills.map((elm, i) => {
                    return (
                      <ul key={i}>
                        <li>{elm}</li>
                      </ul>
                    )
                  })}

                  <h4 className='font-weight-semibold'>Certifications</h4>
                  {get_job_details?.certifications.map((elm, i) => {
                    return (
                      <ul key={i}>
                        <li>{elm}</li>
                      </ul>
                    )
                  })}
                  {/* </Card> */}
                </Col>

                <Col sm={24} md={12}>
                  {/* <Card title='Job Details'> */}
                  <Row>
                    <Col md={12}>
                      <h4 className='font-weight-semibold'>Salary</h4>
                      <p>{get_job_details?.salary}</p>
                    </Col>
                    <Col md={12}>
                      <h4 className='font-weight-semibold'>Salary Type</h4>
                      <p>{get_job_details?.salaryType}</p>
                    </Col>
                    <Col md={12}>
                      <h4 className='font-weight-semibold'>Employment Type</h4>
                      <p>{get_job_details?.employmentType}</p>
                    </Col>
                    <Col md={12}>
                      <h4 className='font-weight-semibold'>Work Experience</h4>
                      <p>{get_job_details?.workExperience} years</p>
                    </Col>
                    <Col md={12}>
                      <h4 className='font-weight-semibold'>Industry</h4>
                      <p> {get_job_details.location}</p>
                    </Col>
                    <Col md={12}>
                      <h4 className='font-weight-semibold'>Location</h4>
                      <p>{get_job_details?.salary}</p>
                    </Col>
                    <Col md={12}>
                      <h4 className='font-weight-semibold'>Start Date</h4>
                      <p> {get_job_details.startDate}</p>
                    </Col>
                    <Col md={12}>
                      <h4 className='font-weight-semibold'>Start Date</h4>
                      <p> {get_job_details.closingDate}</p>
                    </Col>
                  </Row>
                  {/* </Card> */}
                </Col>
              </Row>
              <h3 className='mb-3'>Instructions</h3>
              <div className='mb-3'>
                <p
                  dangerouslySetInnerHTML={{
                    __html: get_job_details?.instruction,
                  }}
                />
              </div>
            </div>
          </div>
        )
      )}
    </div>
  )
}

const mapStateToProps = ({ jobs }) => {
  const { get_job_details, get_job_details_loading, get_job_details_error } =
    jobs

  return {
    get_job_details,
    get_job_details_loading,
    get_job_details_error,
  }
}

export default connect(mapStateToProps, { applyJob })(JobDetail)
