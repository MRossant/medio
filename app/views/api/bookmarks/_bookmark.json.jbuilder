json.extract! bookmark, :id, :bookmarker_id, :bookmarked_story_id, :created_at

json.bookmarker bookmark.bookmarker
json.bookmarked_story bookmark.bookmarked_story