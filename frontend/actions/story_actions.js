import * as StoryApiUtil from '../util/story_api_util';

export const RECEIVE_STORIES = 'RECEIVE_ALL_STORIES';
export const RECEIVE_STORY = 'RECEIVE_STORY';
export const REMOVE_STORY = 'REMOVE_STORY';

const receiveStories = stories => ({
    type: RECEIVE_STORIES,
    stories
});

const receiveStory = story => ({
    type: RECEIVE_STORY,
    story
});

const removeStory = storyId => ({
    type: REMOVE_STORY,
    storyId
});

export const fetchStories = () => dispatch => StoryApiUtil.fetchStories()
    .then(stories => dispatch(receiveStories(stories)))

export const fetchStory = story => dispatch => StoryApiUtil.fetchStory(story)
    .then(story => dispatch(receiveStory(story)))

export const updateStory = story => dispatch => StoryApiUtil.updateStory(story)
    .then(story => dispatch(receiveStory(story)))

export const createStory = story => dispatch => StoryApiUtil.postStory(story)
    .then(story => dispatch(receiveStory(story)))

export const deleteStory = storyId => dispatch => StoryApiUtil.removeStory(storyId)
    .then(() => dispatch(removeStory(storyId)))
