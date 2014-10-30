class CategorySerializer < ActiveModel::Serializer
  attributes :id

  embed :ids
  has_many :products
end
