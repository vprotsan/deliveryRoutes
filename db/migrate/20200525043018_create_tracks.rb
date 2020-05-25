class CreateTracks < ActiveRecord::Migration[6.0]
  def change
    create_table :tracks do |t|
      t.references :User, null: false, foreign_key: true
      t.references :Driver, null: false, foreign_key: true

      t.timestamps
    end
  end
end
