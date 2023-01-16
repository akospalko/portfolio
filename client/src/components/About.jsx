import React from 'react'
import './About.css'
import Anchor from './Anchor';
import CodeIcon from '../assets/code.svg'
import GISIcon from '../assets/gis_2.svg'
import LanguageIcon from '../assets/language.svg'
import OtherIcon from '../assets/other.svg'


export default function About({ pageLayout }) {
    //conditional render height of the page based on if it is displayed as a single component vs together with other components
    let componentContainer = 'about-container';
    pageLayout === 'fullContentPage' ?  
    componentContainer = ['about-container', 'about-container--minheight'].join(' ')
    : null;  
  
  return (
    <article className={ componentContainer }>
      {/* anchor tag for full content page */}
      { pageLayout === 'fullContentPage' ? <Anchor componentName='about' /> : null }
      <div className='about-content'>
        {/* Page title */}
        <div className='about-title'>
          <h1> About </h1>
        </div>
        {/* page section 1 */}
        <section className='about-section background'>
          <h2> Background </h2>
          <p> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien maximus ante scelerisque egestas. Nunc sit amet efficitur diam. Sed ut ullamcorper purus. Vivamus dapibus iaculis lectus. Vivamus non nunc in nulla lacinia placerat. Nam at ultrices sapien. Vestibulum rhoncus vitae purus quis mattis. Nulla elementum efficitur massa in rutrum. In ac est vel lorem placerat accumsan eget eu turpis. Nulla laoreet nisi vel dapibus eleifend.
            Fusce congue, enim vitae tincidunt iaculis, arcu mauris gravida purus, id cursus est nibh id urna. Sed vehicula urna odio, sit amet condimentum justo congue non. Curabitur tincidunt est id tristique condimentum. Praesent vel ante at tellus commodo tempus ut id risus. In sagittis, neque eu laoreet dignissim, elit massa suscipit elit, vel consequat tellus nunc non nulla. Proin ut arcu leo. Nam tempus metus vitae neque aliquet, a tempor leo cursus.
          </p>
        </section>
        {/* page section 2 */}
        <section className='about-section skillset'>
          <h2> Skillset </h2>
          <div className='about-section-content'>
            {/* group 1 */}
            <div id='group-1' className='about-section-group'>
              <div className='about-section-group-flex-wrapper'> 
                <div className='about-section-group-header'>
                  <img src={ CodeIcon } alt='programming icon'/>
                  <h3> Web development && programming </h3>
                </div>
                <div className='about-section-group-content'>
                  <span> Web </span>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien maximus ante scelerisque egestas. 
                  </p>
                  <span> Database </span>
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien maximus ante scelerisque egestas.  </p>
                  <span> Others </span>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien maximus ante scelerisque egestas.  
                  </p>
                </div>
              </div>
            </div>
            {/* group 2 */}
            <div id='group-2' className='about-section-group'>
              <div className='about-section-group-flex-wrapper'> 
                <div className='about-section-group-header'>
                  <img src={ GISIcon } alt='programming icon'/>
                  <h3> GIS and CAD systems, 3D visualization </h3>
                </div>
                <div className='about-section-group-content'>
                  <span> GIS </span>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien maximus ante scelerisque egestas. 
                  </p>
                  <span> CAD </span>
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien maximus ante scelerisque egestas.  </p>
                  <span> Others </span>
                  <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien maximus ante scelerisque egestas.  </p>
                </div>
              </div>
            </div>
            {/* group 3 */}
            <div id='group-3' className='about-section-group small'>
              <div className='about-section-group-flex-wrapper'> 
                <div className='about-section-group-header'>
                  <img src={ OtherIcon } alt='programming icon'/>
                  <h3> Other </h3>
                </div>
                <div className='about-section-group-content'>
                  <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien maximus ante scelerisque egestas. 
                  </p>
                </div>
              </div>
            </div>
            {/* group 4 */}
            <div id='group-4' className='about-section-group small'>
              <div className='about-section-group-flex-wrapper'> 
                <div className='about-section-group-header'>
                  <img src={ LanguageIcon }/>
                  <h3> Language </h3>
                </div>
                <div className='about-section-group-content'>
                  <p> Arabic (professional), English(professional), German (intermediate), Korean (elementary) </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* page section 3 */}
        <section className='about-section hobbies'> 
          <h2> Hobbies and interests </h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien maximus ante scelerisque egestas. Nunc sit amet efficitur diam. Sed ut ullamcorper purus. Vivamus dapibus iaculis lectus. Vivamus non nunc in nulla lacinia placerat. Nam at ultrices sapien. Vestibulum rhoncus vitae purus quis mattis. Nulla elementum efficitur massa in rutrum. In ac est vel lorem placerat accumsan eget eu turpis. Nulla laoreet nisi vel dapibus eleifend.
          </p>
        </section>
      </div>
    </article>
  )
}