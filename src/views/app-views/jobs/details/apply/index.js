import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Form, Button, Row, message, Col } from 'antd'
import { ROW_GUTTER } from 'constants/ThemeConstant'
import Element from 'components/element'
import { data } from 'components/element/data'
import { applyJob } from 'redux/actions'

const Apply = ({
  user,
  applyJob,
  apply_job,
  apply_job_error,
  apply_job_loading,
  handleHideApplyForm,
  fetch_job_form,
  fetch_job_form_loading,
  fetch_job_form_error,
}) => {
  const key = 'applyable'

  const [elements, setElements] = useState(null)

  useEffect(() => {
    if (apply_job) {
      setTimeout(() => {
        message.success({
          content: `${apply_job?.message}!`,
          key,
          duration: 2,
        })
      }, 1000)
    }

    apply_job_error &&
      setTimeout(() => {
        message.error({ content: apply_job_error, key, duration: 2 })
      }, 1000)
  }, [apply_job_error, apply_job])

  useEffect(() => {
    fetch_job_form && setElements(fetch_job_form)
    data && setElements(data)
  }, [fetch_job_form])

  const onFinish = (values) => {
    const valuesArray = Object.keys(values)
      .filter((v) => values[v] != null)
      .map((key) => ({ name: `${[key]}`, value: values[key] }))

    const payload = {
      form: '61b8b547e00fb48a3e0d7e21',
      applicant: `${user?._id}`,
      values: valuesArray,
    }

    applyJob(payload)
    apply_job_loading && message.loading({ content: 'Applying...', key })
  }

  const { fields, title } = elements ?? {}

  const handleGetSelectDefaultValue = () => {}

  return (
    <div className='container my-4'>
      <div className=' mt-0 mb-4 text-center'>
        <h2>{title ? title : 'Application Form'}</h2>
      </div>
      <Form
        name='Application'
        layout='vertical'
        initialValues={{}}
        onFinish={onFinish}
      >
        <Row>
          <Col xs={24} sm={24} md={24} lg={24}>
            <Row gutter={ROW_GUTTER}>
              {fields &&
                fields.map((field, i) => (
                  <Element
                    key={i}
                    field={field}
                    handleGetSelectDefaultValue={handleGetSelectDefaultValue}
                  />
                ))}
            </Row>
            <Button
              type='primary'
              htmlType='submit'
              loading={apply_job_loading}
            >
              Apply
            </Button>

            <Button
              type='primary'
              className='ml-2'
              onClick={handleHideApplyForm}
            >
              Finish
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

const mapStateToProps = ({ auth, jobs }) => {
  const { user } = auth
  const {
    apply_job,
    apply_job_loading,
    apply_job_error,
    fetch_job_form,
    fetch_job_form_loading,
    fetch_job_form_error,
  } = jobs

  return {
    user,
    apply_job,
    apply_job_loading,
    apply_job_error,
    fetch_job_form,
    fetch_job_form_loading,
    fetch_job_form_error,
  }
}

const mapDispatchToProps = {
  applyJob,
}

export default connect(mapStateToProps, mapDispatchToProps)(Apply)
