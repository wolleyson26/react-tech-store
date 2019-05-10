import React from 'react'
import { ProductConsumer } from '../../context'
import Title from '../Title'
import Product from '../Product'
import ProductFilter from './ProductFilter'

export default function Products() {
    return (
        <ProductConsumer>
            {value => {
                const { filteredProducts } = value
                return (
                    <section className="py-5">
                        <div className="container">
                            {/* title */}
                            <Title center title='our products' />
                            {/* product filter */}
                            <ProductFilter />
                            {/* products */}
                            {/* row */}
                            <div className="row">
                                <div className="col-10 mx-auto">
                                    <div className="text-title">total products: {filteredProducts.length}</div>
                                </div>
                            </div>
                            <div className="row py-5">
                                {filteredProducts.length === 0 ? (
                                    <div className="col text-title tex-center">
                                        sorry, no items match your search
                                    </div>
                                ) :

                                    filteredProducts.map(product => {
                                        return (
                                            <Product key={product.id} product={product} />
                                        )
                                    })}
                            </div>
                        </div>
                    </section>
                )
            }}
        </ProductConsumer>
    )
}
