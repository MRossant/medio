export const fetchBookmarks = () => (
    $.ajax({
        url: '/api/bookmarks',
        method: 'GET'
    })
);

export const postBookmark = bookmark => (
    $.ajax({
        url: '/api/bookmarks',
        method: 'POST',
        data: { bookmark }
    })
);

export const deleteBookmark = bookmarkId => (
    $.ajax({
        url: `/api/bookmarks/${bookmarkId}`,
        method: 'DELETE'
    })
);