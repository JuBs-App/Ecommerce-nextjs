import * as Yup from 'yup'

const orgReg = /^[a-zA-Z0-9_]*$/

const locReg = /^[a-zA-Z0-9 _]*$/

const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/

const DomainRegExp =
  /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/

export const domainValidation = Yup.object().shape({
  domainList: Yup.string()
    .matches(DomainRegExp, 'Domain is not valid')
    .required('Domain is required'),
})

export const signUp = Yup.object().shape({
  name: Yup.string().required('Please enter your name!'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(6, 'Phone number has to be longer than 6 characters!'),
  email: Yup.string()
    .email('Invalid email!')
    .required('Please enter you email address!'),
  password: Yup.string()
    .min(11, 'Password has to be longer than 11 characters!')
    .required('Please enter your password!'),
})

export const passwordUpdate = Yup.object().shape({
  currentPassword: Yup.string().required('Please enter your current password!'),
  newPassword: Yup.string()
    .min(10, 'Password has to be longer than 10 characters!')
    .required('Please enter new password!'),
})

export const signIn = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email!')
    .required('Please enter email your address!'),
  password: Yup.string()
    .min(6, 'Password has to be longer than 6 characters!')
    .required('Please enter your password!'),
})

export const _forgotPassword = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email!')
    .required('Please enter Email address!'),
})

export const forgotReset = Yup.object().shape({
  code: Yup.string().required('Please enter code!'),
  password: Yup.string()
    .min(6, 'Password has to be longer than 6 characters!')
    .required('Please enter your password!'),
})
