import React,{useState} from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import axios from 'axios';
import { useRouter } from 'next/router';
function Addtodo() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const router = useRouter();
    const addHandler = async() => {
        let data = {title, description};
        const result = await axios.post('/api/todo',data);
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
              <Form.Control onChange={(e)=>setTitle(e.target.value)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="4">
              Description
            </Form.Label>
            <Col sm="5">
              <Form.Control onChange={(e)=>setDescription(e.target.value)} />
            </Col>
          </Form.Group>

          <Button className='mx-5' onClick={addHandler}>Submit</Button>
        </Form>
    </Container>
  )
}

export default Addtodo