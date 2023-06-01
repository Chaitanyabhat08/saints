import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Route, Routes } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
    const { loading, isAuthenticated, user } = useSelector((state) => state.user);
    const navigateTo = useNavigate();
    return (

        <Fragment>
            {loading === false && (
                <Routes>
                <Route
                    {...rest}
                    render={(props) => {
                        if (isAuthenticated === false) {
                            return navigateTo("/users/loginUser" )
                        }

                        if (isAdmin === true && user.role !== "admin") {
                            return navigateTo("/users/loginUser");
                        }

                        return <Component {...props} />;
                    }}
                    />
                </Routes>
            )}
        </Fragment>
    );
};

export default ProtectedRoute;