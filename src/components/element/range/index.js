import React from 'react'
import { Form, Slider } from 'antd'

export const Range = ({ name, label, required, range, selectable, _id }) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          required: required,
          message: `Slide up or down to select a range`,
        },
      ]}
    >
      <Slider
        // defaultValue={range?.step}
        min={range?.min}
        max={range?.max}
        step={range?.step}
      />
    </Form.Item>
  )
}

export default Range
