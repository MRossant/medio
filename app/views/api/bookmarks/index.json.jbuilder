@bookmarks.each do |bookmark|
    json.set! bookmark.id do
        json.partial! '/api/bookmarks/bookmark', bookmark: bookmark
    end
end