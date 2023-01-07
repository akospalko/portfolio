export const navElements = [
  {
    id: 1,
    name: 'about',
    path: '/about',
    anchorLink: '#about'
  }, {
    id: 2,
    name: 'projects',
    path: '/projects',
    anchorLink: '#projects'
  }, {
    id: 3,
    name: 'contact',
    path: '/contact',
    anchorLink: '#contact'
  }
]

//contact form data initializer
export const contactFormData = {
  name: {
    fieldType: 'input',
    type: 'text',
    name: 'name',
    value: '',
    touched: false,
    valid: false,
  },email: {
    fieldType: 'input',
    type: 'email',
    name: 'email',
    value: '',
    touched: false,
    valid: false,
  }, message: {
    fieldType: 'textarea',
    type: 'text',
    name: 'message',
    value: '',
    touched: false,
    valid: false,
  }
}