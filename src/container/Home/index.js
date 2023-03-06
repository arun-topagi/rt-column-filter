import React from 'react'

// mui
import { Container } from '@mui/material'

// components
import Table from '../../components/Table'
import makeData from './data/makeData'

export default function index({jsonData}) {
  const {columns, data} = makeData(jsonData)
  return (
    <Container>
      <Table columns={columns} data={data} />
    </Container>
  )
}
