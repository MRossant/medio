class Story < ApplicationRecord

    validates :title, :body, presence: true
    validates :author_id, presence: true, uniqueness: true

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

end