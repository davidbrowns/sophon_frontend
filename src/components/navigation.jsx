export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top section-background-nav'>
      <div className='container'>
        <div className='navbar-header'>
          <span style={{float:"left", fontSize:"30px"}}>Sophon</span>
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                Learn
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                Ecosystem
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Services
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                ESG
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Community
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
