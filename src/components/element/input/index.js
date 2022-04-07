import React from 'react'
import { Input, Form } from 'antd'

const InputField = ({ name, label, required, selectable, _id }) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          required: required,
          message: `Please input ${name}`,
        },
      ]}
    >
      <Input placeholder={label} />
    </Form.Item>
  )
}

export default InputField
