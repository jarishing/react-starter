import React, {Component} from 'react';

import Modal from './modal/model.entry';

class App extends Component {

    constructor( props ){
        super(props);
    }

    render() {
        return (
            <div>
                { this.props.children }
                <Modal/>
            </div>
        );
    }
}

export default App;
