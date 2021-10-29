class Api::UsersController < ApplicationController

    def index
        @users = User.all
        render :index
    end

    def show
        @user = User.find(params[:id])
        render :show
    end

    def edit
        @user = User.find(params[:id])
    end

    def create
        @user = User.new(user_params)
        if @user.save
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = User.find(params[:id])

        if @user.update_attributes(user_params)
            render :show
        else
            render :edit
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :full_name, :handle, :password)
    end
end