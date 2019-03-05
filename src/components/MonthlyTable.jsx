import React from 'react'
import { tasks } from './services'
import formatDate from './utilities';

const getMonthLength = () => {
  let currentDate = new Date()
  let firstDay = new Date(currentDate.setDate(1))
  let lastDay = new Date(currentDate.setMonth(currentDate.getMonth() + 1))
  lastDay.setDate(lastDay.getDate() - 1)
  let monthLength = []

  while (firstDay <= lastDay) {
    let dateToAdd = new Date(firstDay)
    monthLength.push(dateToAdd)
    firstDay.setDate(firstDay.getDate() + 1)
  }

  return monthLength
}

const checkTaskDate = (date, task) => {
  let formattedDate = formatDate(date)
  return task.completed.some(item => item === formattedDate)
}

export default () => {
  const monthLength = getMonthLength()

  return (
    <table>
      <thead>
        <tr>
          <th />
          {monthLength.map((x, index) => (
            <th key={`${x + index}`}>{x.getDate()}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, taskIndex) => (
          <tr key={`${task.name + taskIndex}`}>
            <td>{task.name}</td>
            {monthLength.map((x, index) => (
              <td key={`${x + index}`}>
                <input checked={checkTaskDate(x, task)} type='checkbox' />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}