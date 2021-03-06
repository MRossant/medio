import React from 'react';
import {Link} from 'react-router-dom';
import { login } from '../../actions/session';

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

    componentDidMount() {
        this.props.hideErrors(); // makes sure errors are cleaned before render
    }

    showErrors() {
        return (
            <ul>
                {this.props.errors.map((error, idx) => (
                    <li className="session-error" key={idx}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    handleInput(field) {
        return e => {
            this.setState({[field]: e.currentTarget.value});
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.hideErrors();
        const user = Object.assign({}, this.state);
        this.props.action(user).then(() => this.props.hideModal());
    }

    demoUser() {
        const demo = {
            email: 'john.appleseed@demo.com',
            password: '123456',
            handle: '',
            full_name: ''
        };
        this.props.login(demo);
        this.props.hideModal();
    }

    switchToLogin() {
        this.props.hideErrors();
        this.props.hideModal();
        this.props.showModal('login');
    }

    switchToSignUp() {
        this.props.hideErrors();
        this.props.hideModal();
        this.props.showModal('signup');       
    }

    render() {
        const formTypeState = this.props.formType;

        const demo = this.props.formType === 'login' ? (
            <button className="demo-user-btn" onClick={() => this.demoUser()}>Demo User</button>
        ) : "";

        const swapper = this.props.formType === 'signup' ? (
            <div>
                <p className="session-swapper">Already have an account? <span 
                className="session-swapper-btn"
                onClick={() => this.switchToLogin()}
                >Sign in</span></p>
            </div>
        ) : (
            <div>
                <p className="session-swapper">No account? <span
                className="session-swapper-btn"
                onClick={() => this.switchToSignUp()}
                >Create one</span></p>
            </div>
        );

        let display;

        if (formTypeState === 'signup') {
            display = (
                <form className="session-form">
                    <div className="session-form-labels">
                        <label>Full Name
                            <input 
                            type="text"
                            value={this.state.full_name} 
                            onChange={this.handleInput('full_name')}
                            />
                        </label>
                        <label>Email
                            <input 
                            type="text"
                            value={this.state.email} 
                            onChange={this.handleInput('email')}
                            />
                        </label>
                        <label>Handle
                            <input 
                            type="text"
                            value={this.state.handle} 
                            onChange={this.handleInput('handle')}
                            />
                        </label>
                        <label>Password
                            <input 
                            type="password"
                            value={this.state.password} 
                            onChange={this.handleInput('password')}
                            />
                        </label>
                    </div>
                    <button className="session-form-btn" onClick={this.handleSubmit}>Sign Up</button>
                </form>)
        } else {
            display = (
            <form className="session-form">
                <div className="session-form-labels">
                    <label>Email
                        <input 
                        type="text"
                        value={this.state.email} 
                        onChange={this.handleInput('email')}
                        />
                    </label>
                    <label>Password
                        <input 
                        type="password"
                        value={this.state.password} 
                        onChange={this.handleInput('password')}
                        />
                    </label>
                </div>
                <button className="session-form-btn" onClick={this.handleSubmit}>Sign In</button>
            </form>)
        }

        return (
            <div className="main-session-form">
                <i className="fas fa-times" onClick={this.props.hideModal}></i>
                <h2 className="form-title">{this.props.formType === 'signup' ? 'Join Medio.' : 'Welcome back.'}</h2>
                <div className="session-errors">{this.showErrors()}</div>
                {display}
                {demo}
                {swapper}
            </div>
        )
    }
};

export default SessionForm;