import React from 'react'
import { tasks } from './services'

export default () => (
  <ul>
    {tasks.map((task, taskIndex) => (
      <li key={`${task.name + taskIndex}`}>{task.name}</li>
    ))}
  </ul>
)
