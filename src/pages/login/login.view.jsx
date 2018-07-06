import React            from 'react';
import styled, { consolidateStreamedStyles }           from 'styled-components';

import background       from './background.jpg';
import logoSm           from '../../assets/logo-sm.png';

export default( props ) => {
    return (
        <LoginPage>
            <div className="loginCard">
                <img src={logoSm} className="loginLogo"/>
                <h4 className="loginTopic"> Login to your account </h4>
                <form
                    onSubmit={ event =>{ 
                        event.preventDefault();
                        // return props.loginToMain()
                    }}>
                    <div className="form-group">
                        <label> Username </label>
                        <input 
                            className="form-control input-sm"
                            // onChange={ event => }
                        />
                    </div>
                    <div className="form-group">
                        <label> Password </label>
                        <input 
                            className="form-control input-sm" 
                            type="password"
                        />
                    </div>
                    <button className="btn btn-success btn-sm width100"> login </button>
                </form>
                <div className="loginCardFooter">
                    <p> By continuing, you're confirming that you've read our <a>Terms & Conditions</a> and <a> Cookie Policy </a> </p>
                </div>
            </div>
        </LoginPage>
    )
};

const LoginPage = styled.div`
    background     : url(${background}) no-repeat center center fixed;
    background-size:     cover;
    position: fixed; 
    top: 0; 
    left: 0; 
    min-width: 100%;
    min-height: 100%;

    &> .loginCard{
        position: absolute;
        width: 410px;
        height: 370px;
        background-color: #fff;
        margin: 0 auto;
        top: calc(50% - 240px);
        left: 0;
        right: 0;
        padding: 30px 36px;
        box-shadow: 0 2px 3px rgba(0,0,0,.55);

        &> .loginLogo{
            width: 150px;
        }

        &> .loginTopic{
            margin: 16px 0px;
        }

        &> from{
            padding: 8px 0px 16px;
        }

        &> .loginCardFooter{
            padding-top: 16px;

            &> p{
                font-size: 13px;

                &> a{
                    color: #1392f3;
                    cursor: pointer;
                    text-decoration: none;
                }
            }
        }
    }
`