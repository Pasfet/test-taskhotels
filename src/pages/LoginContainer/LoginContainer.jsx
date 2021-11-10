import { LoginWrapper } from './LoginContainerStyled';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInAC } from '../../store/authReducer/authReducer';
import Form from '../../components/Form/Form';

const LoginContainer = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: { name: 'email', value: '', error: null },
    password: { name: 'password', value: '', error: null },
  });
  const [validFormData, setValidFormData] = useState(null);

  const setUserValue = (valid, name, value, error) => {
    if (valid) {
      setUser(prev => ({ ...prev, [name]: { ...prev[name], value, error: null } }));
    } else {
      setUser(prev => ({ ...prev, [name]: { ...prev[name], value, error } }));
    }
  };

  const changeUserData = (name, value) => {
    let valid;
    switch (name) {
      case 'email':
        // eslint-disable-next-line no-useless-escape
        valid = /(^\w+(|(\.|\-)\w+))(?=@[a-z]{2,}\.[a-z]{2,4}\b)/i.test(value);
        setUserValue(valid, name, value, 'Некорректный email');
        break;
      case 'password':
        // eslint-disable-next-line no-useless-escape
        valid = /[A-Za-z\d-\_]{8,}$/i.test(value);
        setUserValue(
          valid,
          name,
          value,
          'Пароль минимум 8 символов, латинские символы или цифры, а также - или _',
        );
        break;
      default:
        break;
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(logInAC(user));
  };

  const inputList = [
    {
      id: 1,
      label: 'Логин',
      placeholder: 'Введите логин',
      type: 'email',
      data: user.email,
      changeHandler: changeUserData,
    },
    {
      id: 2,
      label: 'Пароль',
      placeholder: 'Введите пароль',
      type: 'password',
      data: user.password,
      changeHandler: changeUserData,
    },
  ];

  useEffect(() => {
    const data = Object.entries(user);
    const err = data.every(item => item[1].error === null && item[1].value !== '');
    if (err) {
      return setValidFormData(true);
    }
    setValidFormData(false);
  }, [user]);

  return (
    <LoginWrapper>
      <Form
        onSubmit={onSubmit}
        validFormData={validFormData}
        inputList={inputList}
        buttonText="Войти"
        formTitle="Simple Hotel Check"
      />
    </LoginWrapper>
  );
};

export default LoginContainer;
