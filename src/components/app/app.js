import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import { CharacterPage, HousesPage, BooksPage, BooksItem }  from '../pages';
import gotService from '../../services/gotService';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './app.css';


export default class App extends Component {
    gotService = new gotService();
    
    state = {
        statusBtn: true,
        error: false,
        selectedHouse: 20
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
            return <ErrorMessage />
        }
        
        return (
            <Router>
                <div className='app'> 
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
                        <Route path='/' component={() => <h1>Welcome to Game of Thrones DB</h1>} exact/>
                            <Route path='/characters' component={CharacterPage} />
                            <Route path='/books' component={BooksPage} exact/>
                            <Route path='/books/:id' render={({match}) => {
                                const {id} = match.params;
                                return <BooksItem bookId={id}/>}}/>
                            <Route path='/houses' component={HousesPage} />
                    </Container>
                </div>
            </Router>
        );
    }  
};