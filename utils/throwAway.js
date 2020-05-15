// ..try to write 'utils' fxn. to take a 'date-ish' string and return the number or years (use
//   Math.floor
//   )
convertDate = (dob, today = new Date(Date.now())) => {
  const birthDate = new Date(dob)
  return Math.floor((today - birthDate) / 3.154e+10)
}

console.log(convertDate('January 19, 1995'))
