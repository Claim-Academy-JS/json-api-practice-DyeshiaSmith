export const convertDOBToAge = (dob) => Math.floor((Date.now() - Date.parse(dob)) / 3.154e+10)

/**
 * Takes in a form, strips out inputs with ids and uses values to build a single object
 * @param {Object} form - the form Element
 * @returns {Object}
 */
export const processFormData = (form) =>
  // Convert to an Array for 'super powers' 🦸🏽‍♂️
  Array.from(form.elements).filter(({ id }) => id).map(({ id, value }) => ({
    [id]: value
  })).reduce((accumulatedData, currentData) =>
    ({ ...accumulatedData, ...currentData })
  )
