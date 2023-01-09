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
    placeholder: 'csiga biga',
    touched: false,
    valid: false,
  },
  email: {
    fieldType: 'input',
    type: 'email',
    name: 'email',
    value: '',
    placeholder: 'csiga@biga.com',
    touched: false,
    valid: false,
  },
  subject: {
    fieldType: 'input',
    type: 'text',
    name: 'subject',
    value: '',
    placeholder: 'ég a házad',
    touched: false,
    valid: false,
  },
   message: {
    fieldType: 'textarea',
    type: 'text',
    name: 'message',
    value: '',
    placeholder: 'csiga biga gyere ki, ég a házad oda kint.',
    minLength: 10,
    maxLength: 500,
    wordCount: 0,
    touched: false,
    valid: false,
  }
}

//Status messages:
export const SENDING_EMAIL = 'Sending email...' 