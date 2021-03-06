class CreateBookmarks < ActiveRecord::Migration[5.2]
  def change
    create_table :bookmarks do |t|
      t.integer :bookmarker_id, null: false
      t.integer :bookmarked_story_id, null: false

      t.timestamps
    end

    add_index :bookmarks, :bookmarker_id
    add_index :bookmarks, :bookmarked_story_id
  end
end
