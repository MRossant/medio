class Api::StoriesController < ApplicationController

    def index
        @stories = Story.all
    end

    def new
        @story = Story.new
        render :new
    end

    def show
        @story = Story.find(params[:id])
        render :show
    end

    def create
        @story = Story.new(story_params)
        if @story.save
            render :show
        else
            render json: @story.errors.full_messages, status: 422
        end
    end

    private
    def story_params
        params.require(:story).permit(:title, :body, :author_id)
    end
end