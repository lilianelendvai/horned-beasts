import React from 'react';
import HornedBeast from './HornedBeast.js';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import data from '../data.json';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title:''
    }
  }

  handleModalClose = () => {
    this.setState( { showModal: false })
  }

  handleModalOpen = (hornedBeastTitle) => {
    this.setState( { showModal: true })
  }

  render() {
    return (
      <>
        <div>
          {
            data.map( (value, index) => (
              <HornedBeast handlerToOpenModal={this.handleModalOpen}
                           description={value.description}
                           imageUrl={value.image_url} 
                           title={value.title} /> 
            ))
          }
        </div>
        <Modal show={this.state.showModal} onHide={this.handleModalClose}>
            <Modal.Header closeButton>
              <Modal.Title>Nice Job</Modal.Title>
            </Modal.Header>
            <Modal.Body>Congrats!!!!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleModalClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
      </>
    );
  }

}

export default Main;
