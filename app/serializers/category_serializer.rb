class CategorySerializer < ActiveModel::ProductSerializer
  attributes :id
  
  embed :ids
  has_many :products 
end