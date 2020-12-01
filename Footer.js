import React, { Component } from 'react'
import { Container, Row, Col} from 'react-bootstrap';

class RFooter extends Component {
    render() {
        return ( 
            <div className="footerDiv">
                <h2 style={{fontSize:"28",textAlign:"center",paddingTop:"1em"}} >READ-ABLE</h2>
               <Container style={{textAlign:"center",marginLeft:"21%"}}> 

                <Row style={{marginTop:"20px"}}>
                    <Col sm={2}>Home</Col>    
                    <Col sm={2}>All Books</Col>
                    <Col sm={2}>Add Books</Col>
                    <Col sm={2}>Contact Us</Col>                    
                </Row> 
                
                </Container>  
                
            </div>
        )
    }
}
export default RFooter;