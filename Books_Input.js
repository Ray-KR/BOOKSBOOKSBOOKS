import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import FormCheck from 'react-bootstrap/FormCheck'
import Container from 'react-bootstrap'
import { Button, Row,Col } from 'react-bootstrap';

import firebase from '../configuarations/fbconfig';


const db = firebase.firestore();


class InputBooks extends Component {
    render() {
        return (
            <div className="inputbooks_div">
                <Form className="form_add">
                    <h2 className="header_addbooks">Enter Book Details</h2>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Row>
                            <Form.Label column md={3}>
                                Book Name:
                            </Form.Label>
                            <Col>
                                <Form.Control  type="text" placeholder="Enter Name Here..." />
                            </Col>
                        </Form.Row>
                    </Form.Group>


                    <Form.Group controlId="formBasicEmail">
                        <Form.Row>
                            <Form.Label column md={3}>
                                Author:
                            </Form.Label>
                            <Col>
                                <Form.Control  type="text" placeholder="Enter Author Here..." />
                            </Col>
                        </Form.Row>
                    </Form.Group>


                    <Form.Group controlId="formBasicEmail">
                        <Form.Row>
                            <Form.Label column md={3}>
                                Price:
                            </Form.Label>
                            <Col>
                                <Form.Control  type="text" placeholder="Enter Price Here..." />
                            </Col>
                        </Form.Row>
                    </Form.Group>


                    <Form.Group controlId="formBasicEmail">
                        <Form.Row>
                            <Form.Label column md={3}>
                                ISBN:
                            </Form.Label>
                            <Col>
                                <Form.Control  type="text" placeholder="Enter ISBN Here..." />
                            </Col>
                        </Form.Row>
                    </Form.Group>


                    <Form.Group controlId="formBasicEmail">
                        <Form.Row>
                            <Form.Label column md={3}>
                                Username:
                            </Form.Label>
                            <Col>
                                <Form.Control  type="text" placeholder="Enter Username Here...(REQUIRED)" />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicEmail">
                        <Form.Row>
                            <Form.Label column md={3}>
                                Password:
                            </Form.Label>
                            <Col>
                                <Form.Control  type="text" placeholder="Enter Password Here...(REQUIRED)" />
                            </Col>
                        </Form.Row>
                    </Form.Group>


                    <Button className="enterButton" variant="outline-primary" type="submit">
                        ENTER
                    </Button>
                </Form>
            </div>
        )
    }
}
export default InputBooks;