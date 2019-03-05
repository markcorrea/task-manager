import React from 'react'
import TaskList from './TaskList'
import MonthlyTable from './MonthlyTable'
import AnnualTable from './AnnualTable'

export default () => (
  <div>
    <div className='container'>
      <div className='page-label'></div>
      <h1>Task Management</h1>
      <section className='mt-50'>
        <h2>Current tasks:</h2>
        <TaskList />
      </section>
      <section className='mt-50'>
        <h2>Monthly measurement:</h2>
        <MonthlyTable />
      </section>
      <section className='mt-50'>
        <h2>Annual measurement:</h2>
        <AnnualTable />
      </section>
    </div>
  </div>
)
