import React from 'react';
import {Modal} from 'react-bootstrap';

export default( props ) => {
    return (
        <Modal
                show={props.show}
                onHide={() => props.closeModal()}
                style={{marginTop:'300px'}}
            >
                <Modal.Body>
                test 1 Model
                </Modal.Body>
        </Modal>
    )
};