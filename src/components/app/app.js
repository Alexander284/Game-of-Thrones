import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import './app.css';




export default class App extends Component {
    
    state = {
        statusBtn: true
    }

    onShowOrHide = () => {
        const { statusBtn } = this.state;
        this.setState({
            statusBtn: !statusBtn
        })
    }

    render() {

        const { statusBtn } = this.state;

        const randomChar = statusBtn ? <RandomChar /> : null;
        
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {randomChar}
                            <button 
                                type='button'
                                className='toggleBtn'
                                onClick={this.onShowOrHide}>
                            Toggle randome character</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
    
};