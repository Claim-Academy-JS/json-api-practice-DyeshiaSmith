import * as components from './components'

import { convertDOBToAge, processFormData } from './utils/index.js'

import * as api from './api/index.js'

const root = document.querySelector('#root')

const state = {
  Table: {
    employees: [],
    headings: ['Name', 'Age', 'Salary']
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
      // Update state.Table.employees as long there were no errors
      .then(() => {
        state.Table.employees.concat([emp])
        render()
      }).catch(error => {
        console.error(error)
      })
  }
}

document.querySelectorAll('form').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault()

    // Process the form data and pass this object into the correct formHandler
    formHandlers[form.id](processFormData(form))
  })
})

render();

(async () => {
  try {
    state.Table.employees = await api.getAllEmployees()
    render(state)
  } catch (error) {
    console.error(error)
  }
})()
