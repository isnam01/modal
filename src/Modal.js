import React, { Component } from 'react';  
import { Button, Modal,Row,Col } from 'reactstrap';  

export default class Modal1 extends Component{

    constructor(props){
        super(props);
    }

    render(){

        return(
            <div>
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    buttons
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
            </Modal>
            </div>

        );
    }
}
  
