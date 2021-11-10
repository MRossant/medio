json.extract! user, :id, :email, :handle, :full_name, :bio

json.stories user.stories
json.bookmarks user.bookmarks