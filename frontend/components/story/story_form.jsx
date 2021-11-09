import React from 'react';
import MainNavContainer from '../nav/main_nav_container';
import Textarea from 'react-expanding-textarea';

class StoryForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            author_id: this.props.author_id
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
        this.props.history.push(`/users/${this.props.currentUser.id}`);
    }

    handleInput(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {

        return (
            <div>
                <MainNavContainer />
                <div id="story-form-container">
                    <form className="story-form">
                        <Textarea 
                        className="story-form-input title"
                        placeholder="Title"
                        onChange={this.handleInput('title')}
                        maxLength='80'
                        />

                        <Textarea 
                        className="story-form-input body"
                        placeholder="Tell your story..."
                        onChange={this.handleInput('body')}
                        />

                        <button className="story-form-submit" onClick={this.handleSubmit}>Publish</button>
                    </form>
                </div>
            </div>
        )
    }
};

export default StoryForm;