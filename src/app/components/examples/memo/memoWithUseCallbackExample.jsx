import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });
    return (<button className="btn btn-primary" onClick={onLogOut}>LogOut</button>);
};
LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};

function areEqual(prevProps, NextProps) {
    if (prevProps === NextProps) return true;
    return false;
}
const MemoizedButton = React.memo(LogOutButton, areEqual);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);
    return (
        <>
            <button className="btn btn-primary me-2" onClick={() => setState(!state)}>initiate Render</button>
            <MemoizedButton onLogOut={handleLogOut} />
        </>
    );
};

export default MemoWithUseCallbackExample;
