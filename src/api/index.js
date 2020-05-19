export const postEmployee = async (newEmployee) => {
  try {
    await window.fetch('http://localhost:4000/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newEmployee)
    })
  } catch (error) { (local var) error
    throw new Error(error)
  }
}

export const getAllEmployees = async () => {
  try {
    const employeesData = await window.fetch('http://localhost:4000/employees')
    return employeesData.json()
  } catch (error) {
    throw new Error('Could not fetch a file due to issues with database')
  }
}
