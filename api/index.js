export const addEmployee = async (newEmployee) => {
  try {
    await window.fetch('http://localhost:4000/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newEmployee)
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getAllEmployees = async () => {
  try {
    // fetch RETURNS a PROMISE
    const employeesData = await window.fetch(
      'http://localhost:4000/employees'
    )
    // Change our raw response into 'readable' JSON wrapped in a PROMISE
    return employeesData.json()
  } catch (error) {
    throw new Error(error)
  }
}
