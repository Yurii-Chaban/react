import React from 'react';

import './UserInput.css';

const userInput = (props) => {
    return(
        <div className="UserInput">
            <div className="form__group field">
                <input
                    id="username"
                    type="text"
                    onChange={ props.changedValue }
                    value={ props.currentValue }
                    className="form__field"
                    autoComplete="off"
                    placeholder="User Name"
                    name="name"
                />
                <label
                    htmlFor="username"
                    className="form__label"
                >
                    Name
                </label>
            </div>
        </div>
    );
}

export default userInput;
