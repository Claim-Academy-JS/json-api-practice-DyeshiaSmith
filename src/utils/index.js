export const convertDOBToAge = (dob) =>
  Math.abs(
    Math.floor(
      (Date.now() - Date.parse(dob)) / // milliseconds in a year
        3.154e10
    )
  )

/**
 * 'target' 'form' must have ids that match desired data object property names
 * @param {HTMLFormControlsCollection} formControls
 * @returns {Object} - A 'data object' with 'inputs' as the property names and 'value's as the...values
 */
export const processFormData = (formControls) =>
  // Convert to ARRAY and 'filter' only inputs with 'ids' (not 'button', etc.)
  Array.from(formControls)
    .filter(({ id }) => id)
    // 'map' and transform each 'input' into an OBJECT
    .map(({ id, value }) => ({ [id]: value }))
    .reduce((accumulatedData, currentData) => ({
      ...accumulatedData,
      ...currentData
    }))

export const formatMoney = (amount) =>
  `$${Number.parseInt(amount).toLocaleString()}`

export const trimB4Character = (str, character) =>
  str.slice(str.indexOf(character) + 1)
