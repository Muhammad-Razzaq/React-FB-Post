import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Form, Container, Row } from "react-bootstrap";

function Room() {
  const [data, setData] = useState([]);

  function post(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let profileurl = document.getElementById("profileUrl").value;
    let imageurl = document.getElementById("imageUrl").value;
    let postText = document.getElementById("postText").value;
    let newData = {
      name: name,
      profileurl: profileurl,
      imageurl: imageurl,
      postText: postText
    }
    console.log("Post Text : ", postText);

    setData((previousValue) => {
      return previousValue.concat([newData]);
    })
  }

  return (

    <div>
      <Container fluid="md">
        <Row className="justify-content-md-center">
          <Form onSubmit={post}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter Name" id="name" required/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Profile URL</Form.Label>
                <Form.Control type="url" placeholder="Profile URL" id="profileUrl" required/>
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Image URL</Form.Label>
              <Form.Control type="url" placeholder="Image URL" id="imageUrl" required/>
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Post</Form.Label>
              <Form.Control type="text" placeholder="What is in yout mind" id="postText" required/>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Row>
      </Container>

      {console.log("Data from useState : ", data)}

      {data.map((eachItem, i) => {
        return (
          <div id="main-card">
            <Container fluid="md">
              <div className="row justify-content-md-center">
                <div className="col-md-6 card">
                  <div className="row">
                    <div className="col-md-2">
                      <img src={eachItem.profileurl} alt="profile pic" style={{ width: 40, height: 40, borderRadius: "100%" }} />
                    </div>
                    <div className="col-md-10">
                      <p className="name">{eachItem.name}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <p className="mt-2 mb-2">{eachItem.postText}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <img src={eachItem.imageurl}
                        alt="{Post Image}" style={{ width: "100%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        )
      })}


    </div>
  );
}

ReactDOM.render(<Room />, document.getElementById('root'));