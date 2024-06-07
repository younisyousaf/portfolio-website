import React from "react";
import {ArrowDown} from "react-bootstrap-icons"
const Accordion = ({ id, heading, para }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={id}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${id}`}
          aria-expanded="false"
          aria-controls={`collapse${id}`}
        >
          <span>{heading}</span>
          <i>
            <ArrowDown/>
          </i>
        </button>
      </h2>
      <div
        id={`collapse${id}`}
        className="accordion-collapse collapse"
        aria-labelledby={id}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <p>{para}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
