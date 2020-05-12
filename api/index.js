export const getAllEmployees = async () => {
  const employeesData = await window.fetch('http://localhost:4000/employees')
  return employeesData
}
