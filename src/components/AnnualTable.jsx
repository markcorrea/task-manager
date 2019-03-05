import React from 'react'

import formatDate from './utilities'

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
    {getPreviousYear().map((day, index) => {
      return <div key={`${day}_${index}`} className='annual-cell' />
    })}
  </div>
)
