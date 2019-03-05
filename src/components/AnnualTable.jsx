import React from 'react'

import formatDate from './utilities'
import { tasks } from './services'

const getNextSaturday = referenceDate => {
  let saturdayDate = referenceDate
  while (saturdayDate.getDay() < 6) {
    saturdayDate.setDate(saturdayDate.getDate() + 1)
  }
  return saturdayDate
}

const getPreviousSunday = referenceDate => {
  let sundayDate = referenceDate
  while (sundayDate.getDay() > 0) {
    sundayDate.setDate(sundayDate.getDate() - 1)
  }
  return sundayDate
}

const getPreviousYear = () => {
  const initialDate = new Date()
  const lastDay = getNextSaturday(initialDate)
  const backOneYear = new Date(lastDay)
  backOneYear.setFullYear(backOneYear.getFullYear() - 1)
  const firstDay = getPreviousSunday(new Date(backOneYear))
  const daysArray = []
  let currentDate = firstDay
  while (currentDate < lastDay) {
    daysArray.push(formatDate(currentDate))
    currentDate.setDate(currentDate.getDate() + 1)
  }
  return daysArray
}

export default () => (
  <div className='annual-container'>
    {getPreviousYear().map(day => {
      return (
        <div key={`${day}`} className='annual-cell'>
          <div className='annual-color' style={{ opacity: boxIntensity(day) }} />
        </div>
      )
    })}
  </div>
)

const boxIntensity = day => {
  let doneTasks = tasks.filter(task =>
    task.completed.some(completed => completed === day)
  )
  let donePercentage = Math.ceil((doneTasks.length * 100)/tasks.length)/100
  console.log(donePercentage.toString())
  return donePercentage.toString()
}
