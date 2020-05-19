const createTableHeaders = (headers) => headers.map(header => `<th>${header}</th>`).join(' ')

const creatTDs = (employees) => employees.map(({ employee_name: name, employee_age: age, employee_salary: salary }) => {
  return `
  <tr class="flex flex--justify-content-space-between>
    <td>${name}</td>
    <td>${age}</td>
    <td>${salary}</td>
  </tr>
`
}).join(' ')

export default ({ employees, headers }) => `
<table>
  <thead>
    <tr class="flex flex--justify-content-space-between">
    ${createTableHeaders(headers)}
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        ${creatTDs(employees)}
      </td>
    </tr>
  </tbody>
</table>
`
