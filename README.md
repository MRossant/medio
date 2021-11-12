# Introducing: Medio

Medio is a social media blog where users can write, read, share and connect. 

# Live Link

https://medio1.herokuapp.com/#/

# Medio's Stack
+ Ruby / Rails
+ Postgresql
+ SCSS and HTML
+ React and Redux
+ JS

# Medio's Features
+ Sign up your own personal account or login with the demo user to take a peak around the website. 
+ Write, read, edit and delete stories.
+ Bookmark stories to read later. 

# Code Snippet
`

    componentDidMount() {
        this.props.fetchStory(this.props.match.params.storyId)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.storyId !== this.props.match.params.storyId) {
           this.props.fetchStory(this.props.match.params.storyId) 
        }
    }

    formatDate = dateString => {
        const options = { month: "short", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    formatBody = body => {
        let storyArr = body.split('/n');
        let formattedArr = storyArr.map((para, idx) => (<p className="story-show-para" key={idx}>{para}</p>));
        return formattedArr
    }

    removeStory() {
        this.props.deleteStory(this.props.story.id);
        this.props.history.push(`/users/${this.props.currentUser.id}`);
    }

    render() {

        if (!this.props.story) {
            return null
        }

        let removeStoryBtn;
        if (!this.props.currentUser) {
            removeStoryBtn = (<div></div>);
        } else if (this.props.currentUser.id === this.props.story.author_id) {
            removeStoryBtn = (<button onClick={this.removeStory} id="delete-story-btn">Delete this story</button>);
        } else {
            removeStoryBtn = (<div></div>);
        }

        const leftNav = (
            <div className="story-author-nav">
                <h1>{this.props.story.author.full_name}</h1>
                <button className="follow-user-btn">Follow</button>
            </div>
        )

        return (
            <div>
                <StoryNavContainer story={this.props.story} />
                <div className="story-show-container">
                    {leftNav}
                    <div className="main-story-container">
                        <h1 className="story-show-title">{this.props.story.title}</h1>
                        <div className="story-author-info">
                            <i className="fas fa-user-circle"></i>
                            <h3 className="story-author-name"><Link to={`/users/${this.props.story.author.id}`} className="link-author-name">{this.props.story.author.full_name}</Link></h3>
                            <p className="story-date">{this.formatDate(this.props.story.created_at)}</p>
                        </div>
                        <div className="story-show-body">
                            {this.formatBody(this.props.story.body)}
                        </div>
                        {removeStoryBtn}
                    </div>
                </div>
            </div>
        )
    }

};`

# Coming Soon:
+ Tags/Categories: Filter stories through tags (i.e. Programming, Health, Javascript etc...)
+ Search bar: Easily search for your favorite story!
+ Images: Boost up your stories with photos and update your profile picture for more spice!
+ Follows: Follow other users and see their stories on your feed!
