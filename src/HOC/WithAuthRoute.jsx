import { Route, Redirect } from 'react-router-dom';

const WithAuthRoute = ({ authenticated, ...props }) => {
  return authenticated ? <Redirect to="/" /> : <Route {...props} />;
};

export default WithAuthRoute;
