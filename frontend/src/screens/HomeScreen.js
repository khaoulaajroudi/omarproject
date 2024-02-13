import React from 'react';
import {useDispatch ,useSelector} from "react-redux"
import {Link} from "react-router-dom"
import { useEffect } from 'react';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import Product from '../components/Product';
import {listProducts} from "../actions/productActions"
import ProductCarousel from '../components/ProductCarousel';
import {Col , Row} from "react-bootstrap"
import NewsletterSearchbox from "../components/NewsletterSearchbox"


function HomeScreen({match}) {
  const keyword = match.params.keyword
  
  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  //grab it from state and pull out err, loading, products
  const productList=useSelector(state=>state.productList)
  const {Loading,error,products ,pages,page}=productList
  
  // useeffect fetching data after loading
  //fetching product cards from back end
  //dispatching the action to get products send it through reducer
  useEffect(()=>{
    dispatch(listProducts(keyword,pageNumber))
  },[dispatch,keyword,pageNumber])



  return (
    <>
      {!keyword ? <ProductCarousel/> : <Link to="/" className='btn btn-light'>Go Back</Link> }
      <h1 className='text-center' style={{marginTop:"20px"}}><span id="latest">Latest</span><span id='products'> Products</span></h1>
    {Loading? <Loader /> :error? <Message variant="danger"> {error}  </Message> :
    <>
    <div className='cardscontainer'>
    {/* mapping products cards */}
   {products.map((product)=>(
     <div key={product._id}>
       
       <Product product={product} />
       </div>
     
   ))}
   </div>
   <Paginate pages={pages} page={page} keyword={keyword ? keyword : ""} />
   </>
    }
    
    
    
    
    
    </>
  )
}

export default HomeScreen