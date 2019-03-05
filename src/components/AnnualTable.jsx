import React from 'react'

const getNextSaturday = referenceDate => {
  let saturdayDate = referenceDate
  while(saturdayDate.getDay() < 6) {
    saturdayDate.setDate(saturdayDate.getDate() + 1)
  }
  // console.log('saturday date', saturdayDate)
  return saturdayDate
}

const getPreviousSunday = referenceDate => {
  let sundayDate = referenceDate
  while(sundayDate.getDay() > 0) {
    sundayDate.setDate(sundayDate.getDate() - 1)
  }
  // console.log('sunday date', sundayDate)
  return sundayDate
}

const getPreviousYear = () => {
  const initialDate = new Date()
  // console.log('initial date', initialDate)
  const lastDay = getNextSaturday(initialDate)
  const backOneYear = new Date(lastDay)
  backOneYear.setFullYear(backOneYear.getFullYear() - 1)
  const firstDay = getPreviousSunday(new Date(backOneYear))
  const daysArray = []
  let currentDate = firstDay
  while(currentDate < lastDay) {
    console.log('currentDate', currentDate)
    console.log('lastDay', lastDay)
    daysArray.push(formatDate(currentDate))
    currentDate.setDate(currentDate.getDate() + 1)
  }
  return daysArray
}

const formatDate = date => {
  const day = date.getDate().toString()
  const month = (date.getMonth() + 1).toString()
  return `${date.getFullYear()}${validateZeros(month)}${validateZeros(day)}`
}

const validateZeros = entry => entry.length < 2 ? '0' + entry : entry

export default () => <div className='annual-container'>
  { getPreviousYear().map((day, index) => {
    return <div key={`${day}_${index}`} className="annual-cell"></div>
  })}
</div>