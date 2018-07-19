import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';


class App extends Component {

    constructor(props) {
        super(props);

        this.yourName = "Ammy";
        this.state = {};
    }

    sayHello(name) {
        return "does not say hello: " + name
    }

    render() {
        const myName = "Sammy";
        return (
            <div className="App">
                <h2>Just some sample: {this.yourName} {this.sayHello("Tommy")}</h2>
                <Parent></Parent>
                <h3>PROPNUMBER IS {this.props.propObject.obj1}</h3>
                <h3>PROPNUMBER IS {this.props.propNumber}</h3>
                <h3>PROPNUMBER IS {this.props.propString}</h3>
            </div>
        );
    }
}


class Parent extends Component {

    render() {
        console.log(this.defaultProps);
        return (
            <div>
                <h2>I am the parent component</h2>
                <Cars msg="Cars are cool" model={34567} coolCars={this.props.cars}/>
            </div>
        );
    }
}


Parent.defaultProps = {
    cars: ['BMW', 'MerC', "City", 'Audi']
}

App.propTypes = {
    propString: PropTypes.string,
    propNumber: PropTypes.number,
    propObject: PropTypes.object
}

App.defaultProps = {
    propNumber: 3,
    propString: "This is a string",
    propObject: {
        obj1: "o1",
        obj2: "o2",
        obj3: "o3",
    }
}

class Cars extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h3>I am from Cars component</h3>
                <p>{this.props.msg}</p>
                <p>{this.props.model}</p>
                <p>{this.props.coolCars.map((item, i) => {
                    return i + " " + item;
                })}</p>
            </div>
        );
    }
}


export default App;
