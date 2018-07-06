import { browserHistory } from 'react-router';

const Model = function () {

    const onUsername = ( username ) =>{
        let result = { ... this.state };
        result.query.username = username;
        console.log(result);
        return this.setState( result );
    }

    return { onUsername };
};

export default Model;
