import React from 'react'

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
        <tr>
          <td>Wake up at 7:00</td>
          {monthLength.map((x, index) => (
            <td key={`${x + index}`}>
              <input type='checkbox' />
            </td>
          ))}
        </tr>
        <tr>
          <td>Read 30min</td>
          {monthLength.map((x, index) => (
            <td key={`${x + index}`}>
              <input type='checkbox' />
            </td>
          ))}
        </tr>
        <tr>
          <td>Programming 30min</td>
          {monthLength.map((x, index) => (
            <td key={`${x + index}`}>
              <input type='checkbox' />
            </td>
          ))}
        </tr>
        <tr>
          <td>Physical 40min</td>
          {monthLength.map((x, index) => (
            <td key={`${x + index}`}>
              <input type='checkbox' />
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}
