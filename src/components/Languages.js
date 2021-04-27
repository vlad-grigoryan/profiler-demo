import React, { memo } from "react";
import PropTypes from "prop-types";

const Languages = ({ languages }) => {
    return (
        <div>
            <h3>Top 6 Languages:</h3>
            {(console.log("I am mounting!"), languages.map((user, index) => <p key={index}> {user} </p>))}
        </div>
    );
};

Languages.propTypes = {
    languages : PropTypes.array.isRequired,
};

export default memo(Languages);
