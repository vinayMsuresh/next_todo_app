import React,{useState, useEffect} from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import axios from 'axios';
import { useRouter } from 'next/router';

function UpdateTodo() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const router = useRouter();
    const state = router.query;
    useEffect(() => {
        setTitle(state.title);
        setDescription(state.description);
    },[state]);
    const updateHandler = async() => {
        let data = {title, description};
        const result = await axios.put(`/api/todo/${state._id}`,data);
        alert(result.data);
        router.push('/');
    }
  return (
    <Container className='m-5 bg-dark text-white p-5'>
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="4">
              Title 
            </Form.Label>
            <Col sm="5">
              <Form.Control value={title} onChange={(e)=>setTitle(e.target.value)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="4">
              Description
            </Form.Label>
            <Col sm="5">
              <Form.Control value={description} onChange={(e)=>setDescription(e.target.value)} />
            </Col>
          </Form.Group>
          <Button className='mx-5' variant='success' onClick={updateHandler}>Update</Button>
        </Form>
    </Container>
  )
}

export default UpdateTodo