import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';

import Plus from './components/plus';
import Minus from './components/minus';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: 4
        }

    }
   increase() {
        if(this.state.term !=100){
            this.setState({term:this.state.term+1});
        }

    }

    decrease(){
        if(this.state.term!=0){
            this.setState({term:this.state.term-1});
        }

    }


    render() {
        return (
            <div>
                 <Grid>
                       <Row >
                            <Col xs={12} md={12} lg={12}>
                                 <h3>{this.state.term}</h3>
                            </Col>
                       </Row>
                        <Row >
                             <Col xs={6} md={6} lg={6}>
                                  <Minus dess={this.decrease.bind(this)}/>
                             </Col>
                             <Col xs={6} md={6} lg={6}>
                                    <Plus incc={this.increase.bind(this)}/>
                             </Col>

                        </Row>
                 </Grid>

            </div>

        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));