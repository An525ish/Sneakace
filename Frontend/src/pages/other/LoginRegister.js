import React, { Fragment, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import SEO from '../../components/seo';
import LayoutOne from '../../layouts/LayoutOne';
import Breadcrumb from '../../wrappers/breadcrumb/Breadcrumb';
import Login from '../../components/auth/Login';
import Signup from '../../components/auth/Signup';

const LoginRegister = () => {
  
  return (
    <Fragment>
      <SEO
        titleTemplate='Login'
        description='Login page of flone react minimalist eCommerce template.'
      />
      <LayoutOne headerTop='visible'>
        <div className='login-register-area pt-100 pb-100 mt-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-7 col-md-12 ms-auto me-auto'>
                <div className='login-register-wrapper'>
                  <Tab.Container defaultActiveKey='login'>
                    <Nav variant='pills' className='login-register-tab-list'>
                      <Nav.Item>
                        <Nav.Link eventKey='login'>
                          <h4>Login</h4>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='register'>
                          <h4>Register</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey='login'>
                        <Login/>
                      </Tab.Pane>
                      <Tab.Pane eventKey='register'>
                        <Signup/>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default LoginRegister;
