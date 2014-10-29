require 'test_helper'

class ListingProductsTest < ActionDispatch::IntegrationTest
  describe 'Product API' do
    it 'should list all the products' do
      Product.create!(name: 'Zircon', description: 'Awesome', price: '110.50')
      get '/apiv1/products'
      answer = JSON.parse(response.body, symbolize_names: true)

      response.status.must_equal 200
      response.content_type.must_equal Mime::JSON
      answer.size.must_equal Product.count
    end
  end
end
