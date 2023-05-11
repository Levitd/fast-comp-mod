import React from "react";
import CardWrapper from "../common/Card";
import PropTypes from "prop-types";

const WithFunctions = (Component) => (props) => {
    const isAuth = JSON.parse(localStorage.getItem("token"));
    function onLogin() {
        JSON.stringify(localStorage.setItem("token", true));
    }
    function onLogOut() {
        localStorage.removeItem("token");
    }

    return (
        <CardWrapper>
            <Component onLogin={onLogin} onLogOut={onLogOut} isAuth={isAuth} {...props} />
        </CardWrapper>
    );
};
WithFunctions.propTypes = {
    Component: PropTypes.func
};

export default WithFunctions;
