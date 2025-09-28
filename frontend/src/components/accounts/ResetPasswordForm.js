import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, Redirect } from 'react-router-dom';
import { Input } from 'reactstrap';
export default function ResetPasswordForm() {
  const [passwordForm, setpasswordForm] = useState({
    password: '',
    password2: '',
    token: '',
    errors: {},
    showError: false,
    messageFromServer: '',
  });
  const [show, setshow] = useState(false);
  let query = useQuery();

  const confirmPass = (e) => {
    e.preventDefault();
    const values = 'test'; // queryString.parse(location.search);
    if (!formIsValid()) {
      setpasswordForm({
        ...setpasswordForm,
        showError: false,
        messageFromServer: '',
        password: '',
        password2: '',
      });
      setshow(true);
    } else {
      axios
        .post(`${process.env.REACT_APP_ARQIVE}/password_reset/confirm/`, {
          token: query.get('token'),
          password: passwordForm.password,
        })
        .then((response) => {
          if (response.data.toString().includes('object')) {
            window.alert('your password has been reset');
            setpasswordForm({
              ...setpasswordForm,

              password: '',
              password2: '',
            });
          }
        })
        .catch((error) => {});
    }
  };
  const formIsValid = () => {
    let errors = {};
    let formIsValid = true;
    if (passwordForm.password === passwordForm.password2) {
      formIsValid = true;
      errors['password'] = '';
      errors['password2'] = '';
    }
    if (passwordForm.password.length < 8) {
      formIsValid = false;
      errors['password'] = '*Password must be at least 8 characters long.';
    }
    if (passwordForm.password !== passwordForm.password2) {
      formIsValid = false;
      errors['password2'] = '*Passwords do not Match';
    }
    if (passwordForm.password.search(/[!@#$%^&*_+()]/) === -1) {
      formIsValid = false;
      errors['password'] =
        '*Password must contain a special character like: !@#$%^&*)(_+';
    }
    if (passwordForm.password.search(/\d/) === -1) {
      formIsValid = false;
      errors['password'] = '*Password must contain at least 1 number';
    }
    if (passwordForm.password.search(/[a-zA-Z]/) === -1) {
      formIsValid = false;
      errors['password'] = '*Password must contain a Letter';
    }

    return formIsValid;
  };
  if (!query.get('token')) return <Redirect to='/' />;

  return (
    <div className={'main-content-div forgot-password-div'}>
      <div className='col-md-6 m-auto forgot-password-col'>
        <div className='card card-body mt-5 forgot-password-card accounts-form-group'>
          <h2 className='text-center forgot-password-title'>Reset Password</h2>

          <form
            className='profile-form accounts-form-group'
            onSubmit={confirmPass}>
            <div className='form-group'>
              <p className='forgot-password-text'>
                *Passwords must contain at least eight characters, including at
                least 1 letter, 1 special character and 1 number
              </p>
            </div>
            <div className='form-group'>
              <p className='forgot-password-text'>
                Please input your new password:
              </p>
              <Input
                id='password'
                label='New Password'
                type='password'
                value={passwordForm.password || ''}
                onChange={(e) =>
                  setpasswordForm({
                    ...setpasswordForm,
                    password: e.target.value,
                  })
                }
              />

              <p className='forgot-password-text'>
                Please Confirm your password:
              </p>
              <Input
                id='password2'
                label='confirm password'
                type='password'
                value={passwordForm.password2 || ''}
                onChange={(e) =>
                  setpasswordForm({
                    ...passwordForm,
                    password2: e.target.value,
                  })
                }
                // this.handleChange("password2")}
              />
              {show && (
                <p className='text-danger'>
                  Password Error. Please enter a valid password
                </p>
              )}
              <button
                type='submit'
                className='btn btn-primary float-right default-btn-purple'>
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
