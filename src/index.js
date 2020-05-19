import * as components from './components'

import * as api from './api'

import { processFormData, convertDOBToAge } from './utils'

const root = document.querySelector('#root')

const state = {
  Table: {
    employees: [],
    headers: ['Name', 'Age', 'Salary'],
    isLoading: false
  }
}

const render = (st = state) => {
  root.innerHTML = `${components.Table(st.Table)}`
}

const formHandlers = {
  addEmployee (emp) {
    emp.id = state.Table.employees.length + 1
    emp.employee_age = convertDOBToAge(emp.employee_age)

    api.addEmployee(emp)

    // UPDATE state. table.employees as long there were no errors
      .then(() => {
        state.Table.employees.push(emp)
        render(state)
      }).catch(error => {
        console.error(error)
      })
  }
}

document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault()

    formHandlers[form.id](processFormData(form))
  })
})

render(state)

// semicolon in front of IIFE does not get moved by linter and keeps the compiler happy
;(async () => {
  try {
    state.Table.employees = await api.getAllEmployees()
    render(state)
  } catch (error) {
    console.error(error)
  }
})()
