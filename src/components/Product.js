import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaSearch, FaCartPlus } from 'react-icons/fa'
import { ProductConsumer } from '../context'

export default function product({ product }) {
  return (
    <ProductConsumer>
      {value => {
        const { addToCart, setSingleProduct, } = value
        return (
          <ProductWrapper className='col-10 mx-auto col-sm-8 col-md-6 col-lg-4 my-3'>
            <div className="card">
              <div className="img-container">
                <img src={product.image} className='card-img-top p-5' alt="product" style={{ height: '300px' }} />
                <div className="product-icons">
                  <Link to={`/products/${product.id}`} onClick={() => setSingleProduct(product.id)}><FaSearch className="icon"></FaSearch></Link>
                  <FaCartPlus className="icon" onClick={() => addToCart(product.id)}></FaCartPlus>
                </div>
              </div>
              <div className="card-body d-flex justify-content-between">
                <p className="mb-0">{product.title}</p>
                <p className="mb-0 text-main">${product.price}</p>
              </div>
            </div>
          </ProductWrapper>
        )
      }}
    </ProductConsumer>
  )
}

const ProductWrapper = styled.div`
  .card {
    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.3);
    transition: var(--mainTransition);
    height: 100%;
  }
  .card:hover {
    box-shadow: 7px 10px 5px 0px rgba(0,0,0,0.5);
    cursor: pointer;
  }
  .card-img-top {
    transition: var(--mainTransition);
  }
  .card:hover .card-img-top {
    transform: scale(1.15);
    opacity: .2;
  }
  .img-container {
    position: relative;
  }
  .product-icons {
    transition: var(--mainTransition);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (min-width:567px){
    .product-icons {
      opacity: 0;
    }
    .card:hover .product-icons {
    opacity: 1;
    }
  }
  @media (max-width:567px) {
    .product-icons {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  .icon  {
    font-size: 2.5rem;
    margin:1rem;
    padding: .5rem;
    color: var(--primaryColor);
    background: var(--mainBlack);
    border-radius: .5rem;
  } 
  .card-body {
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`
