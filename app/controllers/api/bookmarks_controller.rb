class Api::BookmarksController < ApplicationController

    def show
        @bookmark = Bookmark.find(params[:id])
        render :show
    end

    def index
        @bookmarks = Bookmark.all
        render :index
    end

    def create
        @bookmark = Bookmark.new(bookmark_params)

        if @bookmark.save
            render json: ["successfully saved"]
        else
            render json: ["Save unsuccessful"]
        end
    end

    def destroy
        @bookmark = Bookmark.find(params[:id])
        if @bookmark
            @bookmark.destroy
            render json: ["Save deleted"]
        end
    end

    private
    def bookmark_params
        params.require(:bookmark).permit(:bookmarker_id, :bookmarked_story_id)
    end
end