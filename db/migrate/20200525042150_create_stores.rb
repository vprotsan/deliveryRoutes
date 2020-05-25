class CreateStores < ActiveRecord::Migration[6.0]
  def change
    create_table :stores do |t|
      t.string :Name
      t.text :Addr1
      t.text :Addr2
      t.text :City
      t.text :State
      t.text :Zip

      t.timestamps
    end
  end
end
