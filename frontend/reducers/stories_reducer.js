import {
    RECEIVE_STORIES,
    RECEIVE_STORY,
    REMOVE_STORY
} from '../actions/story_actions';

const storiesReducer = (state={}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_STORIES:
            return action.stories;
        case RECEIVE_STORY:
            nextState[action.story.id] = action.story;
            return nextState;
        case REMOVE_STORY:
            delete nextState[action.storyId];
            return nextState;
        default:
            return state;
    }
};

export default storiesReducer;