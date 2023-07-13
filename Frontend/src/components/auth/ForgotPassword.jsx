import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { resetPasswordRequestAsync, selectMailSent } from '../../store/slices/auth-slice';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import SEO from '../../components/seo';
import HeaderSix from '../../wrappers/header/HeaderSix';


const LoginRegister = () => {

  const mailSent = useSelector(selectMailSent);
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  return (
    <Fragment>
      <SEO
        titleTemplate='Login'
        description='Login page of flone react minimalist eCommerce template.'
      />
      <HeaderSix layout="container-fluid" />

      <div className='login-register-area pt-100 pb-100 mt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-7 col-md-12 ms-auto me-auto'>
              <div className='login-register-wrapper'>
                <Tab.Container defaultActiveKey='login'>
                  <Nav variant='pills' className='login-register-tab-list'>
                    <Nav.Item>
                      <Nav.Link eventKey='login'>
                        <h4>Enter email to reset password</h4>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey='login'>
                      <div className='login-form-container'>
                        <div className='login-register-form'>
                          <form
                            noValidate
                            onSubmit={handleSubmit((data) => {
                              console.log(data);
                              dispatch(resetPasswordRequestAsync(data.email))
                            })}
                          >
                            <div>
                              <input
                                type='text'
                                {...register('email', {
                                  required: 'email is required',
                                  pattern: {
                                    value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                                    message: 'Email not valid',
                                  },
                                })}
                                placeholder='Email'
                              />
                              {errors.email && (
                                <p className='text-danger'>
                                  {errors.email.message}
                                </p>
                              )}
                              {mailSent && (
                                <p className="text-green-500">Mail Sent</p>
                              )}
                            </div>
                            <div className='button-box d-flex justify-content-center'>
                              <button type='submit'>
                                <span>Login</span>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginRegister;
