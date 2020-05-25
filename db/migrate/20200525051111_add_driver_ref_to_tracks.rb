class AddDriverRefToTracks < ActiveRecord::Migration[6.0]
  def change
    add_reference :tracks, :driver, null: false, foreign_key: true
  end
end
