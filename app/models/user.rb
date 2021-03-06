class User < ApplicationRecord

    validates :full_name, :session_token, presence: true
    validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP } 
    validates :handle, presence: true, uniqueness: true, length: { maximum: 15 }
    validates :password, length: { minimum: 6, allow_nil: true}

    after_initialize :ensure_session_token!
    attr_reader :password

    has_many :stories,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Story

    has_many :bookmarks,
        primary_key: :id,
        foreign_key: :bookmarker_id,
        class_name: :Bookmark

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        if user && user.is_password?(password)
            user
        else
            nil
        end
    end

    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end


    def ensure_session_token!
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save
        self.session_token
    end
end