import React, { Component } from 'react'
import { InputNumber } from 'antd'

export class Basic extends Component {
  render() {
    return <InputNumber min={1} max={10} defaultValue={3} />
  }
}

export default Basic
