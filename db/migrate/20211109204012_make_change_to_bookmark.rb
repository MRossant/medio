class MakeChangeToBookmark < ActiveRecord::Migration[5.2]
  def change
    remove_index :bookmarks, :bookmarker_id
    remove_index :bookmarks, :bookmarked_story_id
    add_index :bookmarks, [:bookmarker_id, :bookmarked_story_id], unique: true
  end
end
