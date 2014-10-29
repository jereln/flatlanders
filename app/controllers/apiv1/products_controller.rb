module Apiv1
  class ProductsController < ApplicationController

    def index
      products = Product.all
      render json: products
    end

    def create
      product = Product.new(product_params)
      if product.save
        render json: product
      else
        render json: product.errors, status: 422
      end
    end

    def update
      if @product.update_attributes(product_params)
        render json: @product
      else
        render json: @product.errors, status: 422
      end
    end

    def destroy
      @product.destroy
      render json: {msg: 'success'}
    end

    private

    def product_params
      params.require(:product).permit(:name, :description, :shine,
                                      :price, :rarity, :color, :faces, :reviews)
    end

    def find_product
      @product = Product.find(params[:id])
    end
  end
end