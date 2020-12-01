import React, { Component } from 'react'

import { Container, Row, Col, Table, Alert } from 'react-bootstrap';
import { Button, Form } from 'react-bootstrap';
import ReactDOM from 'react-dom'


import firebase from '../configuarations/fbconfig';
import { alignPropType } from 'react-bootstrap/esm/DropdownMenu';
import bookDetails from './Home'

import swal  from 'sweetalert';


const db = firebase.firestore();


class AllBooks extends Component {

    state = {
        bookData: [],
        bName: '',
        author: '',
        price: '',
        isbn: '',
        usr:'',
        pw:''     
    }

    
    componentDidMount() {

        db.collection('Books Database').get().then(data => {
            data.docs.forEach(doc => {
                this.setState({
                    bookData: [...this.state.bookData, doc.data()]
                })

                //console.log('Home', doc.data());
            })
        })

    }

    inputBName = (e) => {
        this.setState({
          bName: e.target.value
       })
       
    }
    inputAuthor = (e) => {
        this.setState({
            author: e.target.value
       })
       
    }
    inputPrice = (e) => {
        this.setState({
            price: e.target.value
       })
       
    }
    inputIsbn = (e) => {
            this.setState({
            isbn: e.target.value
       })
       
    }

    inputUsr = (e) => {
            this.setState({
                usr: e.target.value
            })
        }
    
    inputPw = (e) => {
        this.setState({
            pw: e.target.value
        })
    }
        
    
    submitData = (e) => {
        
        if (this.state.usr === 'bookadmin' && this.state.pw === 'pwdadmin'){
   
    db.collection('Books Database').add({
            bName: this.state.bName,
            author: this.state.author,
            price: this.state.price,
            isbn: this.state.isbn
        })
    }
    else {
        swal({
            title: "Error",
            text: "Username or Password is Incorrect",
            icon: "error",
            timer: 1000000,
            button:false
        }) 
    }
    
   }

 
    renderTableData() {
        return this.state.bookData.map((bookData, index) => {
            const { bName, author, price, isbn } = bookData //destructuring 
            return (
                <tr key={index}>
                    <td>{bName}</td>
                    <td>{author}</td>
                    <td>{price}</td>
                    <td>{isbn}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div id="aB">
                <div className="booksdiv">
                    <Table id="books" className="table_allbooks">
                        <thead className="thead_allbooks">
                            <tr>
                                <td>Book Name</td>
                                <td>Author</td>
                                <td>Price</td>
                                <td>ISBN</td>
                            </tr>
                        </thead>
                        <tbody>
                                {this.renderTableData()}

                        </tbody>
                    </Table>
                </div>

              
                <div className="inputbooks_div">
                <Form className="form_add">
                    <h2 className="header_addbooks">Book Details</h2>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Row>
                            <Form.Label column md={3}>
                                Book Name:
                            </Form.Label>
                            <Col>
                                <Form.Control  type="text" placeholder="Enter Name Here..." onChange={this.inputBName}/>
                            </Col>
                        </Form.Row>
                    </Form.Group>


                    <Form.Group controlId="formBasicEmail">
                        <Form.Row>
                            <Form.Label column md={3}>
                                Author:
                            </Form.Label>
                            <Col>
                                <Form.Control  type="text" placeholder="Enter Author Here..." onChange={this.inputAuthor} />
                            </Col>
                        </Form.Row>
                    </Form.Group>


                    <Form.Group controlId="formBasicEmail">
                        <Form.Row>
                            <Form.Label column md={3}>
                                Price:
                            </Form.Label>
                            <Col>
                                <Form.Control  type="text" placeholder="Enter Price of Book Here..." onChange={this.inputPrice} />
                            </Col>
                        </Form.Row>
                    </Form.Group>


                    <Form.Group controlId="formBasicEmail">
                        <Form.Row>
                            <Form.Label column md={3}>
                                ISBN:
                            </Form.Label>
                            <Col>
                                <Form.Control  type="text" placeholder="Enter ISBN Here..." onChange={this.inputIsbn}/>
                            </Col>
                        </Form.Row>
                    </Form.Group>


                    <Form.Group controlId="formBasicEmail">
                        <Form.Row>
                            <Form.Label column md={3}>
                                Username:
                            </Form.Label>
                            <Col>
                                <Form.Control  type="text" placeholder="Enter Username Here...(REQUIRED)" onChange={this.inputUsr} />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicEmail">
                        <Form.Row>
                            <Form.Label column md={3}>
                                Password:
                            </Form.Label>
                            <Col>
                                <Form.Control  type="text" placeholder="Enter Password Here...(REQUIRED)" onChange={this.inputPw}/>
                            </Col>
                        </Form.Row>
                    </Form.Group>


                    <Button className="enterButton" variant="btn-dark" type="submit" onClick={this.submitData}>
                        ENTER
                    </Button>
                </Form>
            </div>


            </div>
        )
    }
}
export default AllBooks;