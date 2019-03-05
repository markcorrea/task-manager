'use strict'

import React from 'react'
import { render } from 'react-dom'
import '@babel/polyfill'

import './media/styles/main.scss'
import MainForm from './components/MainForm'

render(<MainForm />, document.getElementById('root'))
