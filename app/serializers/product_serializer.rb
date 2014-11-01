class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :shine, :price,
             :rarity, :color, :faces, :reviews, :category_id
end
