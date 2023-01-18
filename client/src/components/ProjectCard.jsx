import React from 'react'
import './ProjectCard.css'
import InfoIcon from '../assets/info.svg' 
import GithubIcon from '../assets/social_link_github_2.svg'
import CloseIcon from '../assets/close.svg'

export default function ProjectCard({ data, toggle, setToggle }) {
  const {id, githubRepositoryLink, websiteLink, thumbnail, title, info } = data;
  
  //toggle card info and toggle card github repo link handler 
  const toggleCardHandler = (id, mode) => {
    if(!id) return;
    setToggle(prev => {
      const copied = {...prev};
      let updated = {};
      //find if toggle obj contains the passed id
      const findCurrentCardID = Object.keys(copied)
      .find(elem => elem === id.toString());
      let currentCard = {};
      //set toggleInfo
      if(mode === 'info') {
        currentCard = { ...prev[id] };
        if(findCurrentCardID) {  // if id found: - toggle value
          //OK - update with new data
          currentCard.toggledInfo = !currentCard.toggledInfo;
          updated = { ...copied, [id]: { toggledInfo: !prev[id].toggledInfo, toggledRepoLinks: false } };
        } else if(!findCurrentCardID) {  // if no id: - add toggledInfo: true
          updated = { ...copied, [id]: { toggledInfo: true, toggledRepoLinks: false } }
        }
      } 
      //set toggleRepoLinks
      else if(mode === 'github') {
        currentCard = { ...prev[id] };
        if(findCurrentCardID) { 
          currentCard.toggledRepoLinks = !currentCard.toggledRepoLinks;
          updated = { ...copied, [id]: { toggledInfo: false, toggledRepoLinks: !prev[id].toggledRepoLinks } };
        } else if(!findCurrentCardID) {  // if no id: - add toggledInfo: true
          updated = { ...copied, [id]: { toggledInfo: true } }
        }
      }
      return updated;
    })
  } 
  
  return (
    <div className='project_card-container'>
      <div className='project_card-header'> 
        { githubRepositoryLink.length > 1 ?
          <div 
            className='project_card-header-icon' 
            onClick={() => {toggleCardHandler(id, 'github')}}
          > 
            <img src={ GithubIcon } alt='view code on github'/> 
          </div>
            :
        <a 
          className='project_card-header-icon' 
          href={ githubRepositoryLink } 
          target="_blank"
          rel="noopener noreferrer"
        > 
          <img src={ GithubIcon } alt='view code on github '/>  
        </a> }
        {/* header title */}
        <h3 id='project_card-title'> { title } </h3>
        {/* header icon: info */}
        <div 
          className='project_card-header-icon' 
          onClick={() => toggleCardHandler(id, 'info')}
        > 
        {/* if github repo link.length > 1 display icon + toggle, else display anchor tag, navigate to page */}
          { toggle[id]?.toggledInfo ? 
            <img src={ CloseIcon } alt='close info'/> 
            :
            <img src={ InfoIcon } alt='open info about the project'/> 
          }
        </div>
      </div>
      <div className='project_card-content'>
        {/* toggle github repo links */}
        {/* double links (separate repos for both client and serverside) */}
        { toggle[id]?.toggledRepoLinks ?  
          <div className='project_card-github-repo-links'>
            { githubRepositoryLink.map(link => (
              <a 
                key={ link.id }
                href={ link.link } 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {toggleCardHandler(id, 'github')}}
            > {link.title} 
            </a>
            )) }
          </div> 
          : null }
        {/* toggle info / thumbnail */}
        { toggle[id]?.toggledInfo ?   
        //info
        <div className='project_card-info'>
          { info.map(info => (
            <div className='project_card-info' key={ info.id }>
              <span> { info.title } </span>
              <p> { info.text } </p>
            </div>
          )) }
        </div> 
        :
        //tubmnail image
        <div className='project_card-thumbnail'>
         { !thumbnail ? 
           <p> No Preview</p>
           :
           <img src={ thumbnail } alt={ 'project thumbnail' }/>
         }
        </div> 
        } 
      </div> 
      <div className='project_card-button'>
      { websiteLink ? 
        <a
          href={ websiteLink }
          target="_blank"
          rel="noopener noreferrer"
          disabled={true}
        > 
          Visit Webpage
        </a> 
        : 
        <div className='project_card-buton--disabled'>
          Not Hosted
        </div> }
      </div>
    </div>
  )
}