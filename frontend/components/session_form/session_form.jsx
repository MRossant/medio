import React from 'react';
import {Link} from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            full_name: '',
            handle: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field) {
        return e => {
            this.setState({[field]: e.currentTarget.value});
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    render() {
        const formTypeState = this.props.formType;

        let display;

        if (formTypeState === 'signup') {
            display = (
                    <form>
                    <label>Full Name:
                        <input 
                        type="text"
                        value={this.state.full_name} 
                        onChange={this.handleInput('full_name')}
                        />
                    </label>
                    <label>Email:
                        <input 
                        type="text"
                        value={this.state.email} 
                        onChange={this.handleInput('email')}
                        />
                    </label>
                    <label>Handle:
                        <input 
                        type="text"
                        value={this.state.handle} 
                        onChange={this.handleInput('handle')}
                        />
                    </label>
                    <label>Password:
                        <input 
                        type="password"
                        value={this.state.password} 
                        onChange={this.handleInput('password')}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Sign Up!</button>
                </form>)
        } else {
            display = (
            <form>
                <label>Email:
                    <input 
                    type="text"
                    value={this.state.email} 
                    onChange={this.handleInput('email')}
                    />
                </label>
                <label>Password:
                    <input 
                    type="password"
                    value={this.state.password} 
                    onChange={this.handleInput('password')}
                    />
                </label>
                <button onClick={this.handleSubmit}>Login!</button>
            </form>)
        }

        return (
            <div>
                <h2>{this.props.formType === 'signup' ? 'Sign Up' : 'Login'}</h2>
                {/* <form>
                    <label>Full Name:
                        <input 
                        type="text"
                        value={this.state.full_name} 
                        onChange={this.handleInput('full_name')}
                        />
                    </label>
                    <label>Email:
                        <input 
                        type="text"
                        value={this.state.email} 
                        onChange={this.handleInput('email')}
                        />
                    </label>
                    <label>Handle:
                        <input 
                        type="text"
                        value={this.state.handle} 
                        onChange={this.handleInput('handle')}
                        />
                    </label>
                    <label>Password:
                        <input 
                        type="password"
                        value={this.state.password} 
                        onChange={this.handleInput('password')}
                        />
                    </label>

                    <button onClick={this.handleSubmit}>{this.props.formType === 'signup' ? 'Sign Up!' : 'Login!'}</button>
                </form> */}
                {display}
                <Link to={formTypeState}>{this.props.formType === 'signup' ? 'Log In' : 'Signup'}</Link>
            </div>
        )
    }
};

export default SessionForm;