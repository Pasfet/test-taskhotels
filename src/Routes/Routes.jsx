import PrivateRoute from '../HOC/PrivateRoute';
import WithAuthRoute from '../HOC/WithAuthRoute';
import LoginContainer from '../pages/LoginContainer/LoginContainer';
import MainPageContainer from '../pages/MainPageContainer/MainPageContainer';
import {Switch} from 'react-router-dom';

const Routes = ({authed}) => {
  return (
    <Switch>
      <PrivateRoute authenticated={authed} exact path="/">
        <MainPageContainer />
      </PrivateRoute>
      <WithAuthRoute authenticated={authed} exact path="/login">
        <LoginContainer />
      </WithAuthRoute>
    </Switch>
  );
};


export default Routes;
