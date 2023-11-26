const checkByRegExp = (valueForTest, regexp, flags = undefined) => {
  return new RegExp(regexp, flags).test(valueForTest)
}
export const isEmpty = (val) => (typeof val === 'string' ? !!val.trim() : !!val) || 'Field is required'

export const isEmail = (val) => {
  return checkByRegExp(val, '^(("[\\w-+\\s]+")|([\\w-+]+(?:\\.[\\w-+]+)*)|("[\\w-+\\s]+")([\\w-+]+(?:\\.[\\w-+]+)*))' +
    '(@((?:[\\w-+]+\\.)*\\w[\\w-+]{0,66})\\.([a-z]{2,6}(?:\\.[a-z]{2})?)$)|(@\\[?((25[0-5]\\.|2' +
    '[0-4][\\d]\\.|1[\\d]{2}\\.|[\\d]{1,2}\\.))((25[0-5]|2[0-4][\\d]|1[\\d]{2}|[\\d]{1,2})\\.){2}' +
    '(25[0-5]|2[0-4][\\d]|1[\\d]{2}|[\\d]{1,2})\\]?$)', 'i') || 'Provide a valid Email mail@gmail.com'
}


export const checkPassword = (val) => {
  let regex = new RegExp(/^(?=.*[A-Z])[!@#$%^&*\w]{6,}/) ;
  return regex.test(val) || 'Provide a valid Password A-Z!@#$%^&* min 6 characters'
}

export const isChecked = (val) => {
  let regex = new RegExp(/^true/);
  return regex.test(val) || 'Confirm that is over 18 years'
}