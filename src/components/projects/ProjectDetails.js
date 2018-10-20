import React from 'react';

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            in adipisci non nihil ut fuga consequatur voluptatibus illo, culpa
            voluptates? Modi ullam suscipit laborum non natus, officiis
            cupiditate cumque dolorum!
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted By Net Ninja</div>
          <div>2nd September, 3am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
