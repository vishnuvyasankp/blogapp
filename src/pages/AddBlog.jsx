import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function AddBlog() {
  
  const handleClick =(e)=> {
  };
  return (
    <div>
      <h1 className='text-center mt-5'>ADD BLOG</h1>
      <Container>
      <Form onSubmit={handleClick}>
        <Form.Group className="mb-3" controlId=" ">
          <Form.Label>Blog Name</Form.Label>
          <Form.Control type="text" placeholder=" " />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder=" " />
        </Form.Group>
        <Form.Group className="mb-3" controlId=" ">
          <Form.Label>Author Name</Form.Label>
          <Form.Control type="text" placeholder=" " />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleClick} >Submit</Button>{' '}
      </Form>
      
      </Container>
    </div>
  )
}
