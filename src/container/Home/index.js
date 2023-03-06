import React from 'react'

// components
import Table from '../../components/Table'
import makeData from './data/makeData'

export default function index({jsonData}) {
  const {columns, data} = makeData(jsonData)
  return <Table columns={columns} data={data} />
}
