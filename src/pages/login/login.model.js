import { browserHistory } from 'react-router';

const Model = function () {

    const onUsername = ( username ) =>{
        let result = { ... this.state };
        result.query.username = username;
        return this.setState( result );
    }

    const onPassword = ( password ) =>{
        let result = { ... this.state };
        result.query.password = password;
        return this.setState( result );
    }

    const loginToMain = async( username, password) =>{
        let result = { ... this.state };
        const { cookies } =this.props;
        try{
            await this.props.login(username, password);
            cookies.set('login', true,{path:'/'});
            cookies.set('user', username,{path:'/'});
            cookies.set('password', password,{path:'/'});
            return browserHistory.push('/main');
        }catch( error ){
            result.query.loginVaild = false;
            return this.setState( result );
        }
    }

    return { onUsername, onPassword, loginToMain };
};

export default Model;
