import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';

import Table from 'react-bootstrap/Table';


export default function App() {
  const [todo, setTodo] = useState([]);
  const getData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const jsonData = await data.json();
    setTodo(jsonData)
  }
  useEffect(() => {
    getData();


  }, [])
  return (
    <div className='mt-5'>
      <Container className='mt-5'>
        <h1 className='text-center mt-5'>HOME</h1>
        <Table striped bordered hover>
          <thead>
            <tr className='mt-5'>
              <th>ID</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>

            {
              todo.map((item, index) => {
                return(
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                </tr>
                )
                })}
          </tbody>
        </Table>
      </Container>
    </div>
  )
}