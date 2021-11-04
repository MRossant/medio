export const fetchStories = () => (
    $.ajax({
        url: '/api/stories',
        method: 'GET'
    })
);

export const fetchStory = storyId => (
    $.ajax({
        url: `/api/stories/${storyId}`,
        method: 'GET'
    })
);

export const updateStory = story => (
    $.ajax({
        url: `/api/stories/${story.id}`,
        method: 'PATCH',
        data: {story}
    })
);

export const postStory = story => (
    $.ajax({
        url: '/api/stories',
        method: 'POST',
        data: {story}
    })
);

export const removeStory = storyId => (
    $.ajax({
        url: `/api/stories/${storyId}`,
        method: 'DELETE'
    })
);



