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

    def update
        @story = Story.find(params[:id])
        if @story.update(story_params)
            render json: { message: "Story successfully updated"}
        else
            render json: @story.errors.full_messages, status: 422
        end
    end

    def destroy
        @story = Story.find(params[:id])
        if @story
            @story.destroy
            render json: { message: "Story successfully deleted"}
        end
    end

    private
    def story_params
        params.require(:story).permit(:title, :body, :author_id)
    end
end