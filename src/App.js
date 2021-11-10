import { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getIsAuth } from './store/authReducer/authSelectors';
import Routes from './Routes/Routes';

const GlobalStyled = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    background-color: #e5e5e5;
  }
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const App = () => {
  const auth = useSelector(getIsAuth);
  const [authed, setAuthed] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (auth) {
      setAuthed(auth);
    } else {
      setAuthed(auth);
      history.push('/login');
    }
  }, [history, auth]);

  return (
    <div>
      <GlobalStyled />
      <main>
        <Routes authed={authed} />
      </main>
    </div>
  );
};

export default App;
