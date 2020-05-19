const createTHs = (ths) => ths.map((th) => `<th>${th}</th>`).join(' ')
const createTDs = employees => employees.map(({ employee_name: employeeName, employee_salary: employeeSalary, employee_age: employeeAge }) => `
<td>${employeeName}</td>
<td>${employeeSalary}</td>
<td>${employeeAge}</td>
`).join('')

export default ({ employees, headings }) => `
<table>
  <thead>
    <tr class="flex flex--justify-content-space-between">
      ${createTHs(headings)}
    </tr>
  </thead>
  <tbody>
    <tr>
      ${createTDs(employees)}
    </tr>
  </tbody>
</table>
`
