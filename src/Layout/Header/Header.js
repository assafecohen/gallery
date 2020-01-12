import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <Navbar expand='lg' variant='dark' bg='dark'>
        <Nav className='mr-auto'>
          <Navbar.Brand as={Link} to='/'>
            <i className='fa fa-home'>Home</i>
          </Navbar.Brand>
          <Nav.Link as={Link} to='/Gallery'>
            Gallery
          </Nav.Link>
          <Nav.Link as={Link} to='/Movies'>
            Movies
          </Nav.Link>
          <Nav.Link as={Link} to='#pricing'>
            Pricing
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='light'>Search</Button>
        </Form>
      </Navbar>
    );
  }
}

export default Header;
