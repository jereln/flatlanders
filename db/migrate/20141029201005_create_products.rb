class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.string :description
      t.integer :shine
      t.decimal :price
      t.integer :rarity
      t.string :color
      t.integer :faces
      t.string :reviews

      t.timestamps
    end
  end
end
