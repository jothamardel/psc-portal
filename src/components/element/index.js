import React from 'react'
import { Col } from 'antd'
import Input from './input'
import Select from './select'
import Range from './range'
// import Switch from './switch'
// import TextArea from './text-area'
// import TimePicker from './time-picker'
// import DatePicker from './date-picker'
// import Radio from './radio'
// import Upload from './upload'
// import CheckBox from './checkbox'
// import InputNumber from './input-number'

const Element = ({
  field: {
    inputType,
    name,
    label,
    required,
    placeholder,
    _id,
    selectable,
    range,
  },
}) => {
  switch (inputType) {
    case 'text':
      return (
        <Col xs={24} sm={24} md={12}>
          <Input
            name={name}
            label={label}
            required={required}
            placeholder={placeholder}
            _id={_id}
            selectable={selectable}
          />
        </Col>
      )

    case 'email':
      return (
        <Col xs={24} sm={24} md={12}>
          <Input
            name={name}
            label={label}
            required={required}
            placeholder={placeholder}
            _id={_id}
            selectable={selectable}
          />
        </Col>
      )

    case 'select':
      return (
        <Col xs={24} sm={24} md={12}>
          <Select
            name={name}
            label={label}
            required={required}
            placeholder={placeholder}
            _id={_id}
            selectable={selectable}
          />
        </Col>
      )

    case 'range':
      return (
        <Col xs={24} sm={24} md={12}>
          <Range
            name={name}
            label={label}
            required={required}
            placeholder={placeholder}
            _id={_id}
            selectable={selectable}
            range={range}
          />
        </Col>
      )

    // case 'switch':
    //   return (
    //     <Col xs={24} sm={24} md={12}>
    //       <Switch
    //         name={name}
    //         label={label}
    //         required={required}
    //         placeholder={placeholder}
    //         _id={_id}
    //         selectable={selectable}
    //       />
    //     </Col>
    //   )

    // case 'text-area':
    //   return (
    //     <Col xs={24} sm={24} md={12}>
    //       <TextArea
    //         name={name}
    //         label={label}
    //         required={required}
    //         placeholder={placeholder}
    //         _id={_id}
    //         selectable={selectable}
    //       />
    //     </Col>
    //   )

    // case 'time':
    //   return (
    //     <Col xs={24} sm={24} md={12}>
    //       <TimePicker
    //         name={name}
    //         label={label}
    //         required={required}
    //         placeholder={placeholder}
    //         _id={_id}
    //         selectable={selectable}
    //       />
    //     </Col>
    //   )

    // case 'number':
    //   return (
    //     <Col xs={24} sm={24} md={12}>
    //       <InputNumber
    //         name={name}
    //         label={label}
    //         required={required}
    //         placeholder={placeholder}
    //         _id={_id}
    //         selectable={selectable}
    //       />
    //     </Col>
    //   )

    // case 'radio':
    //   return (
    //     <Col xs={24} sm={24} md={12}>
    //       <Radio
    //         name={name}
    //         label={label}
    //         required={required}
    //         placeholder={placeholder}
    //         _id={_id}
    //         selectable={selectable}
    //       />
    //     </Col>
    //   )

    // case 'upload':
    //   return (
    //     <Col xs={24} sm={24} md={12}>
    //       <Upload
    //         name={name}
    //         label={label}
    //         required={required}
    //         placeholder={placeholder}
    //         _id={_id}
    //         selectable={selectable}
    //       />
    //     </Col>
    //   )

    // case 'checkbox':
    //   return (
    //     <Col xs={24} sm={24} md={12}>
    //       <CheckBox
    //         name={name}
    //         label={label}
    //         required={required}
    //         placeholder={placeholder}
    //         _id={_id}
    //         selectable={selectable}
    //       />
    //     </Col>
    //   )

    // case 'date':
    //   return (
    //     <Col xs={24} sm={24} md={12}>
    //       <DatePicker
    //         name={name}
    //         label={label}
    //         required={required}
    //         placeholder={placeholder}
    //         _id={_id}
    //         selectable={selectable}
    //       />
    //     </Col>
    //   )

    default:
      return null
  }
}

export default Element

// {
//   "range": {
//     "min": 0,
//     "max": 1000000000,
//     "step": 100000
//   },
//   "name": "salaryExpectation",
//   "label": "what is your salary expectation",
//   "inputType": "range",
//   "required": false,
//   "_id": "61b8f353205ee290aea7a5c0",
//   "selectable": []
// }
