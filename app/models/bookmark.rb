class Bookmark < ApplicationRecord
    validates :bookmarker_id, :bookmarked_story_id, presence: true

    belongs_to :bookmarker,
        primary_key: :id,
        foreign_key: :bookmarker_id,
        class_name: :User

    belongs_to :bookmarked_story,
        primary_key: :id,
        foreign_key: :bookmarked_story_id,
        class_name: :Story
end