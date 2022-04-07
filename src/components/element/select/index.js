import React from 'react'
import { Select, Form } from 'antd'

const { Option } = Select

const SelectField = ({ name, label, required, selectable, _id }) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          required: required,
          message: `Please select a ${name}`,
        },
      ]}
    >
      <Select className='mr-2' placeholder={label} style={{ width: '100%' }}>
        <Option value=''></Option>
        {selectable.map((item, i) => (
          <Option key={i} value={item.value}>
            {item.label}
          </Option>
        ))}
      </Select>
    </Form.Item>
  )
}

export default SelectField
