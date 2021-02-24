import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {
    return(
        <div className="UserOutput">
            <p>Dynamic data: <span>{ props.userName }</span></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda, corporis cum delectus dolorem ea eaque laborum maxime</p>
        </div>
    );
}

export default userOutput;
