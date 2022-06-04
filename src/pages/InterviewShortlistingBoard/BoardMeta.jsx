import React from "react";

const BoardMeta = () => {
  return (
    <div className="board-meta-details-container">
      <div className="all-candidates-wrapper">
        <h5 className="all-candidates-group">
          <span className="all-candidates">All Candidates - </span>
          <span className="active-count"> Active (60) </span>
          <i className="fa fa-chevron-down"></i>
        </h5>

        <h5 className="sorting-and-updating-container">
          <span className="sort-by">Sort by: </span>
          <span className="last-updated">Last Updated</span>
          <i className="fa fa-chevron-down"></i>
        </h5>
      </div>

      <div className="call-to-sorting-action-container">
        <i className="fa fa-bars" aria-hidden="true"></i>
        <i className="fa fa-filter" aria-hidden="true"></i>
        <i className="fa fa-upload" aria-hidden="true"></i>
      </div> 
    </div>
  )
}

export default BoardMeta;