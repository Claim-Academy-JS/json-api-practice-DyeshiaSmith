export const getAllEmployees = async () => {
  // fetch RETURNS a PROMISE
  const employeesData = await window.fetch('http://localhost:4000/employees')

  // change our raw response into 'readable' JSON wrapped into a promise
  return employeesData.json()
}
