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
end

private
  # def codes_params
  #   params.require(:code).permit :desc, :code_id
  # end
