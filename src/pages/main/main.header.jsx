import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import logo from '../../assets/logo-black_word.png';

class MainHeader extends React.Component {

    render(){
        return (
            <Nav>
                <div className="container">
                    <div className="logoContainer">
                        <img src={logo} className="logo"/>
                    </div>
                </div>
            </Nav>
        )
    }
}

const mapStateToProps = ( state, ownProps ) => ({
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);

const Nav = styled.div`
    height: 56px;
    background-color: white;
    display: flex;

    &> .container{
        width: 1210px;
        margin: 0 auto;

        &> .logoContainer {
            width: 130px;
            height: 100%;
            display: flex;
            align-items:center;

            &> .logo {
                width: 130px;
                height: 30px;
            }
        }
    }
`