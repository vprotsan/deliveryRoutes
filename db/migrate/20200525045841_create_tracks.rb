class CreateTracks < ActiveRecord::Migration[6.0]
  def change
    create_table :tracks do |t|
      t.text :Path

      t.timestamps
    end
  end
end
