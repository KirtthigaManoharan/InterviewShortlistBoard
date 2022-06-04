import React from 'react';

const Header = ({handleInput}) => {
  return (
    <div className='sticky-header'>

      <div className='header-product-info'>
        <div className='product-title'>
          <i className='fas fa-user-circle' ></i>
          <h5>iamneo.ai Talent Center</h5>
        </div>

        <div className='call-to-action-container'>
          <div className="search">
            <button className="searchButton">
              <i className="fa fa-search"></i>
            </button>
            <input type="text" className="searchTerm" placeholder="Search" onChange={(e) => handleInput(e)} />

          </div>

          <button className='add-new-btn'>+ Add New</button>
          <i className="fa fa-gift" aria-hidden="true"></i>
          <div className='initial'><span>S</span></div>
        </div>
      </div>

      <div className='header-job-info'>
        <div className='job-details-container'>
          <div className='jobs-wrapper'>
            <i className="fa fa-briefcase" aria-hidden="true"></i>
            <span className='jobs'>Jobs</span>
          </div>

          <i className="fa fa-chevron-right"></i>

          <span className='job-title'>Full-stack Engineer</span>

          <button className='view-job-details'>View Job Details</button>
        </div>

        <div className='candidate-details-container'>
          <button className='candidate-btn add-candidate-btn'>
            <span>Add Candidate</span>
            <i className="fa fa-angle-down"></i>
          </button>

          <button className='candidate-btn published-btn'>
            <i className="fas fa-palette"></i>
            <span>Published</span>
            <i className="fa fa-angle-down"></i>
          </button>

        </div>

      </div>

    </div>
  )
}

export default Header;