export const required = value => (value ? undefined : 'Required');
export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const maxLength16 = maxLength(16);
export const requiredOption = value => {
  if (value) {
    return undefined;
  } else return 'Required';
};

export const maxLength3 = maxLength(3);
export const maxLength6 = maxLength(6);

// export const optionValidation = value =>
//   value !== "0" ? undefined : "Invalid Selection";

export const minLength = min => value =>
  value && value.length < min
    ? min === 16
      ? 'Invalid card details'
      : `Must be ${min} characters or more`
    : undefined;

export const minLength8 = minLength(8);

export const minLength2 = minLength(2);

export const minLength3 = minLength(3);

export const minLength16 = minLength(16);

export const length10 = value =>
  value && (value.length !== 10 ? 'Must be 10 characters' : undefined);

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

export const password = value =>
  !value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/i)
    ? 'The password must contain atleast one uppercase, one lowercase and one special character'
    : undefined;

export const alphaNumeric = value =>
  value && !/(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]|[@]*$/i.test(value)
    ? 'Atleast one character and one number'
    : undefined;
export const alpha = value =>
  value && /[^a-zA-Z ]/i.test(value) ? 'Only alphabet characters' : undefined;

export const length6 = value =>
  value && (value.length !== 6 ? 'Must be 6 characters' : undefined);

export const numeric = value =>
  value && /[^0-9]/i.test(value) ? 'Only numbers' : undefined;
