export const required = value => (value ? undefined : 'Please, fill the field');
export const lengthLesserThan20 = value => (value && value.length < 20 ? undefined : 'Length must be less than 20 symbols');
