class ProductSerializer < ActiveModel::ProductSerializer
  attributes :id, :name, :description, :shine, :price, :rarity, :color, :faces, :reviews, :category_id
end