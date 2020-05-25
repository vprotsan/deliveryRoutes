class CreateDrivers < ActiveRecord::Migration[6.0]
  def change
    create_table :drivers do |t|
      t.string :firstName
      t.text :lastName
      t.text :Addr1
      t.text :Addr2
      t.text :City
      t.text :State
      t.text :Zip

      t.timestamps
    end
  end
end
