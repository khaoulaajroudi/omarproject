import React , {useEffect}  from 'react'
import {Link} from "react-router-dom"
import {Carousel, Image , Button} from "react-bootstrap"
import Loader from "./Loader"
import Message from "./Message"
import {listTopProducts} from "../actions/productActions"
import {useSelector , useDispatch} from "react-redux"

export default function ProductCarousel() {
    const dispatch= useDispatch()
    const productTopRated = useSelector((state)=>state.productTopRated)
    const {Loading , error , products}=productTopRated

    useEffect(() => {
    dispatch(listTopProducts())
    }, [dispatch])
    


  return Loading? <Loader/> :error ? <Message variant="danger" > {error} </Message>
  : <Carousel pause="hover" className='bg-dark' id='carouselId' fade >

          <Carousel.Item>
              {/* <Link to={`/product/${product._id}`}>
                  <Image src={product.image} alt={product.name} fluid /> 
                  <Carousel.Caption className='carousel-caption' >
                  <h1 style={{width:"800px"}}> {product.name} ({product.price}DT) </h1>
                  <p style={{width:"610px"}}>{product.description}</p>
                  <Button variant='primary' type='submit' style={{marginTop:"10px" ,borderRadius:"5px"}} >Shop Now</Button>
                  </Carousel.Caption>
              </Link> */}

<img src='https://images.pexels.com/photos/264939/pexels-photo-264939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="tessst"></img>


          </Carousel.Item>

  </Carousel>
}
