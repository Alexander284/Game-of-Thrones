import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage  from '../characterPage';
import ErrorMassage from '../errorMessage';
import './app.css';




export default class App extends Component {
    
    state = {
        statusBtn: true,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
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

        if (this.state.error) {
            return <ErrorMassage />
        }
        
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
                    <CharacterPage />
                </Container>
            </>
        );
    }
    
};