import React, { Fragment, Component } from 'react';
import Image from 'react-bootstrap/Image';
import './GalleryItem.css';
// import Modal from './ModalItem/ModalItem';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Modal';
class GalleryItem extends Component {
  state = {
    showModal: false
  };
  handleClose() {
    this.setState({ showModal: false });
  }
  handleShow() {
    this.setState({ showModal: true });
  }
  render() {
    return (
      <Fragment>
        <Modal show={this.state.showModal} onHide={() => this.handleClose()}>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant='secondary'>Close</Button>
              <Button variant='primary'>Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
        <div className='GalleryItem'>
          <p className='GalleryItemTitle'>{this.props.title}</p>
          <Image
            style={{ cursor: 'pointer' }}
            onClick={() => this.handleShow()}
            className='GalleryItemImg'
            src={this.props.image}
            rounded
          />
        </div>
      </Fragment>
    );
  }
}

export default GalleryItem;
