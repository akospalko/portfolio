//social link icons:
import GithubIcon from '../assets/social_link_github_2.svg'
import LinkedInIcon from '../assets/social_link_linkedin.svg'
//about skill card icons:
import CodeIcon from '../assets/code.svg'
import GISIcon from '../assets/gis_2.svg'
import LanguageIcon from '../assets/language.svg'
import OtherIcon from '../assets/other.svg'

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
    name: 'message',
    value: '',
    placeholder: 'your message',
    minLength: 10,
    maxLength: 500,
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

export const aboutSkills = [
  {
    id: 'group-1',
    icon: CodeIcon,
    iconAlt: 'Web develpoment & Programming',
    title: 'Web development && programming',
    content: [
      {
        id: 1,
        title: 'Web',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien maximus ante scelerisque egestas.'
      },
      {
        id: 2,
        title: 'Database',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien maximus ante scelerisque egestas.'
      },
      {
        id: 3,
        title: 'Others',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien maximus ante scelerisque egestas.'
      },
    ]
  },
  {
    id: 'group-2',
    icon: GISIcon,
    iconAlt: 'GIS and CAD systems, 3D visualization',
    title: 'GIS and CAD systems, 3D visualization',
    content: [
      {
        id: 1,
        title: 'GIS',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien maximus ante scelerisque egestas.'
      },
      {
        id: 2,
        title: 'CAD',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien maximus ante scelerisque egestas.'
      },
      {
        id: 3,
        title: 'Others',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien maximus ante scelerisque egestas.'
      },
    ]
  }, {
    id: 'group-3',
    icon: LanguageIcon,
    iconAlt: 'Language',
    title: 'Language',
    content: [
      {
        id: 1,
        text: 'Arabic (professional), English(professional), German (intermediate), Korean (elementary)'
      }
    ]
  }, {
    id: 'group-4',
    icon: OtherIcon,
    iconAlt: 'Other',
    title: 'Other',
    content: [
      {
        id: 1,
        text: 'Arabic (professional), English(professional), German (intermediate), Korean (elementary)'
      }
    ]
  }
]

export const projectCards = [
  {
    id: 1,
    githubRepositoryLink: [ //fronten link, backend link
      { id: 1, title: 'Frontend', link: 'https://github.com/akospalko/task-manager-client' },
      { id: 2, title: 'Backend', link: 'https://github.com/akospalko/task-manager-api'},
    ],
    websiteLink: 'https://task-manager-client.onrender.com/',
    thumbnail: '',
    title: 'Task manager',
    info: [
      { id: 1, title: 'Description', text: 'Manage and store your daily tasks in a database' },
      { id: 2, title: 'Used technologies', text: 'React, NodeJS, CSS, Postman, MongoDB, Mongoose'}
    ]
  },
  {
    id: 2,
    githubRepositoryLink: ['https://github.com/akospalko/nodejs-tutorial/tree/master/03-task-manager/starter'], //fronten link
    websiteLink: 'dummy link',
    thumbnail: '',
    info: [
      { id: 1, title: 'Description', text: 'test' },
      { id: 2, title: 'Used technologies', text: 'test test'},
    ]
  }
] 

//Status messages:
export const SENDING_EMAIL = 'Sending email...';