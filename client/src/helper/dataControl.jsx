//social link icons:
import GithubIcon from '../assets/social_link_github_2.svg'
import LinkedInIcon from '../assets/social_link_linkedin.svg'

//nav elements
export const navElements = [
  {
    id: 0,
    name: 'home',
    path: '/',
    anchorLink: '#home'
  }, {
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
    placeholder: 'your name',
    touched: false,
    valid: false,
  },
  email: {
    fieldType: 'input',
    type: 'email',
    name: 'email',
    value: '',
    placeholder: 'your@email.com',
    touched: false,
    valid: false,
  },
  subject: {
    fieldType: 'input',
    type: 'text',
    name: 'subject',
    value: '',
    placeholder: 'mail subject',
    touched: false,
    valid: false,
  },
   message: {
    fieldType: 'textarea',
    type: 'text',
    name: 'your message',
    value: '',
    placeholder: 'csiga biga gyere ki, ég a házad oda kint.',
    minLength: 10,
    maxLength: 1500,
    wordCount: 0,
    touched: false,
    valid: false,
  }
}

export const socialLinks = [
  {
    id: 1,
    icon: GithubIcon,
    link: '',
    altText: 'github icon'
  }, {
    id: 2,
    icon: LinkedInIcon,
    link: '',
    altText: 'linkedIn icon'
  }
]

//Status messages:
export const SENDING_EMAIL = 'Sending email...';