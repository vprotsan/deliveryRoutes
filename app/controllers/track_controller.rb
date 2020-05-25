class TrackController < ApplicationController
  # def index
  #   @codes = Code.all.paginate(page: params[:page], per_page: 10)
  # end
  #
  # def show
  #   code = params[:format].present? ? params[:code_id]+'.'+params[:format] : params[:code_id]
  #   @code = Code.find_by(code_id: code )
  #   @children = @code.children
  #
  #
  #   render json: { code: @code, children: @children }
  # end
  # def create
  #   @newRoute = Track.new(user_id: fav_params[:user_id], code: @code)
  #
  #   if @newRoute.save
  #     render json: @newRoute
  #   else
  #     render json: @newRoute.errors, status: :unprocessable_entity
  #   end
  #
  # end

  # def show
  #   @favorites = Favorite.where(user_id: params[:user_id])
  #   p codes_array = []
  #   @favorites.each do |favorite|
  #     code = Code.find(favorite[:code_id])
  #     p codes_array << { "code_id": code[:code_id], "desc": code[:desc]}
  #   end
  #   render json: codes_array
  # end

end

private
  # def codes_params
  #   params.require(:code).permit :desc, :code_id
  # end
