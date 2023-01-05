import React ,{ Fragment } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as useNavigate,Route, Routes } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...rest }) => {
    console.log(Component);
    const { loading, user, isAuthenticated } = useSelector((state) => state.user)
    const navigateTo = useNavigate();
    return (
        <Fragment>
            {!loading && (
                <Routes>
                <Route {...rest}
                    render={(props) => {
                            if (!isAuthenticated) {
                                navigateTo("/users/loginUser");
                            }
                        return <Component {...props}/>
                }
                }></Route>
                </Routes>
            )}
      </Fragment>
  )
}

export default ProtectedRoute