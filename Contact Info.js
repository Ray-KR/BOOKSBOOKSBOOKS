import React, { Component } from 'react'
import { Container, Row, Col} from 'react-bootstrap';

class ContactUs extends Component {
    render() {
        return (
            <div className="contactusDiv">
                <h2 className="contactusHeader">Contact Info.</h2>
                <div>
                    <br />
                    <br />
                    <Container >
                        <Row style={{position:"relative", justifyContent:"center"}}>

                            <Col style={{textAlign:"center",color:"rgba(2, 132, 199, 1)",fontSize:"large"}} md={3}>
                                New Kandy Road,<br />
                                Sri Jayawardena Pura Kotte,<br />
                            </Col>
                            <Col style={{textAlign:"center",color:"rgba(2, 132, 199, 1)",fontSize:"large",paddingTop:"10px"}} md={3}>
                                0112 877 041<br />
                            </Col>

                            <Col style={{textAlign:"center",color:"rgba(2, 132, 199, 1)",fontSize:"large",paddingTop:"6px"}} md={3}>
                                booksbooksbooks@gmail.com<br />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
export default ContactUs;