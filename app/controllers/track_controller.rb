class TrackController < ApplicationController

  # def index
  #   track = Track.all
  #   render json: track, only: [:id, :name], include: :pokemons
  # end

  # def show
  #   track = params[:format].present? ? params[:track_id]+'.'+params[:format] : params[:track_id]
  #   @track = Track.find_by(track_id: track )
  #
  #   render json: { track: @track }
  # end

  def index
    @track = Track.where(user_id: params[:user_id])
    p tracks_array = []
    @track.each do |track|
      track = Track.find(track[:user_id])
      p tracks_array << { "track_id": track}
    end
    # render json: tracks_array
    # index.js #this will load index.js.erb
  end

end
