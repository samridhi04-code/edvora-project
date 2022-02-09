import React, {useEffect, useState }  from 'react';
// import { useNavigate } from "react-router-dom";
import Carousel from 'react-elastic-carousel';
import  {Loading} from "../MyComponents/Loading";
import Item from './Items';
import './SideNavbar.css';

export const SideNavbar = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async() => {
    try{
      setLoading(false);
    const response = await fetch('https://assessment-edvora.herokuapp.com/');
    setUsers(await response.json());
    }catch(error){
      console.log("my error" + error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);



{/*EARLIER CODE BELOW */}
  // console.log(fetchedData);

  // const [productname, setProductname] = useState({});
  //   const [brand, setBrand] = useState([]);
  //   const [price, setPrice] = useState([]);
  //   const [date, setDate] = useState([]);
  //   // const [time, setTime] = useState([]);
  //   const [location, setLocation] = useState([]);
  //   const [description, setDescription] = useState([]);
  //   const [image, setImage] = useState([]);
{/*EARLIER CODE END */}

    // const navigate = useNavigate();
    // const Routing = ()=> {
    //   navigate("/item1")
    // }
{/*EARLIER CODE BELOW */}
    // useEffect(() => {
    //   setProductname(fetchedData.product_name ||{});
    //   setBrand(fetchedData.brand_name || {});
    //   setPrice(fetchedData.price || {});
    //   setDate(fetchedData.date || {});
    //   setTime(fetchedData.time || {});
    //   setLocation(fetchedData.address || {});
    //   setDescription(fetchedData.discription || {});
    //   setImage(fetchedData.image || {});
    // }, [fetchedData])
{/*EARLIER CODE END */}

const breakPoints = [
  {width : 1, itemsToShow : 1},
  {width : 550, itemsToShow : 2},
  {width : 800, itemsToShow : 3},
  // {width : 800, itemsToShow : 4},
];

// export const SideNavbar = () => {
  return(
      <>
      
      <div className='container'>
      <div className=' yes row g-0'>
          <div className='col-6 col-md-2 mt-2 pt-2 m-4'>
<nav id="navbar-example3" className="navbar navbar-light bg-dark flex-column align-items-stretch p-4 pt-2 radius pb-5">
 
  <p className="fs-4 mt-1 mb-0 text-secondary">Filters</p>
  <hr className='text-secondary'/>
 
  <div className="btn-group dropend">
    <a className="mt-4 btn btn-secondary yes dropdown-toggle" href="#item-1" role="button" data-bs-toggle="dropdown" aria-expanded="false"><span className='no'>Products</span></a>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
      {
    users.map((curElem) => {
  return(
    <>
    <li key={1}><a className="dropdown-item" href="#">{curElem.product_name}</a></li>
    </>
  )
})
}


    {/* <li><a className="dropdown-item" href="#">Another action</a></li>
       <li><a className="dropdown-item" href="#">Something else here</a></li> */}


  </ul>
  </div>
    
    <div className="btn-group dropend">
    <a className="mt-4 btn yes btn-secondary dropdown-toggle" href="#item-2" role="button" data-bs-toggle="dropdown" aria-expanded="false"><span className='no'>State</span></a>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    {
    users.map((curElem) => {
  return(
    <>
    <li key={2}><a className="dropdown-item" href="#">{curElem.address.state}</a></li>
    </>
  )
})
}


    {/* <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li> */}


  </ul>
  </div>
  <div className="btn-group dropend">
    <a className="mt-4 btn yes btn-secondary dropdown-toggle" href="#item-3" role="button" data-bs-toggle="dropdown" aria-expanded="false"><span className='no'>City</span></a>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    {
    users.map((curElem) => {
  return(
    <>
    <li key={curElem.index}><a className="dropdown-item" href="#">{curElem.address.city}</a></li>
    </>
  )
})
}
    {/* <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li> */}
  </ul>
  </div>
    
  </nav>

</div>
<div className='col-sm-6 col-md-9'>
  

<p className='h1 mt-2 text-light'>Edvora</p>
<p className='h2 try'> Products </p>

{
users.map((curElem) => {
  const {product_name} = curElem;

  return(
    <>
<p className='fs-3 text-light'>{product_name}</p>
<hr className='text-light'/>
<div className='hehe'>
<Carousel breakPoints={breakPoints}> 
<Item className='App'><div className="row g-0">
  <div className="col-6 col-md-4 mt-1 p-4"><img src={curElem.image} className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"22px"}}>{curElem.address.city}</span></div>
  <div className="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"15px"}}>{curElem.product_name}</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>{curElem.brand_name}</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>${curElem.price}</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"19px", left:"10px"}}>Date : {curElem.date}</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-48px"}}> {curElem.discription}</span>
</div></Item>
<Item className='App'><div className="row g-0">
  <div className="col-6 col-md-4 mt-1 p-4"><img src={curElem.image} className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"22px"}}>{curElem.address.city}</span></div>
  <div className="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"15px"}}>{curElem.product_name}</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>{curElem.brand_name}</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>${curElem.price}</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"19px"}}>Date : {curElem.date}</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-48px"}}> {curElem.discription}</span>
</div></Item>
<Item className='App'><div className="row g-0">
  <div className="col-6 col-md-4 mt-1 p-4"><img src={curElem.image} className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"22px"}}>{curElem.address.city}</span></div>
  <div className="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"15px"}}>{curElem.product_name}</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>{curElem.brand_name}</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>${curElem.price}</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"19px"}}>Date : {curElem.date}</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-48px"}}>{curElem.discription}</span>
</div></Item>
<Item className='App'><div className="row g-0">
  <div className="col-6 col-md-4 mt-1 p-4"><img src={curElem.image} className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"22px"}}>{curElem.address.city}</span></div>
  <div className="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"15px"}}>{curElem.product_name}</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>{curElem.brand_name}</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>${curElem.price}</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"19px"}}>Date : {curElem.date}</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-48px"}}>{curElem.discription}</span>
</div></Item>
<Item className='App'><div className="row g-0">
  <div className="col-6 col-md-4 mt-1 p-4"><img src={curElem.image} className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"22px"}}>{curElem.address.city}</span></div>
  <div className="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"15px"}}>{curElem.product_name}</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>{curElem.brand_name}</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>${curElem.price}</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"19px"}}>Date : {curElem.date}</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-48px"}}>{curElem.discription}</span>
</div></Item>
<Item className='App'><div className="row g-0">
  <div className="col-6 col-md-4 mt-1 p-4"><img src={curElem.image} className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"22px"}}>{curElem.address.city}</span></div>
  <div className="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"15px"}}>{curElem.product_name}</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>{curElem.brand_name}</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>${curElem.price}</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"19px"}}>Date : {curElem.date}</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-48px"}}>{curElem.discription}</span>
</div></Item>
<Item className='App'><div className="row g-0">
  <div className="col-6 col-md-4 mt-1 p-4"><img src={curElem.image} className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"22px"}}>{curElem.address.city}</span></div>
  <div className="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"15px"}}>{curElem.product_name}</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>{curElem.brand_name}</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>${curElem.price}</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"19px"}}>Date : {curElem.date}</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-48px"}}>{curElem.discription}</span>
</div></Item>
<Item className='App'><div className="row g-0">
  <div className="col-6 col-md-4 mt-1 p-4"><img src={curElem.image} className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"22px"}}>{curElem.address.city}</span></div>
  <div className="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"15px"}}>{curElem.product_name}</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>{curElem.brand_name}</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>${curElem.price}</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"19px"}}>Date : {curElem.date}</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-48px"}}>{curElem.discription}</span>
</div></Item>
<Item className='App'><div className="row g-0">
  <div className="col-6 col-md-4 mt-1 p-4"><img src={curElem.image} className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"22px"}}>{curElem.address.city}</span></div>
  <div className="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"15px"}}>{curElem.product_name}</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>{curElem.brand_name}</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>${curElem.price}</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"19px"}}>Date : {curElem.date}</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-48px"}}>{curElem.discription}</span>
</div></Item>
<Item className='App'><div className="row g-0">
  <div className="col-6 col-md-4 mt-1 p-4"><img src={curElem.image} className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"22px"}}>{curElem.address.city}</span></div>
  <div className="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"15px"}}>{curElem.product_name}</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>{curElem.brand_name}</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>${curElem.price}</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"19px"}}>Date : {curElem.date}</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-48px"}}>{curElem.discription}</span>
</div></Item>
<Item className='App'><div className="row g-0">
  <div className="col-6 col-md-4 mt-1 p-4"><img src={curElem.image} className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"22px"}}>{curElem.address.city}</span></div>
  <div className="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"15px"}}>{curElem.product_name}</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>{curElem.brand_name}</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>${curElem.price}</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"19px"}}>Date : {curElem.date}</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-48px"}}>{curElem.discription}</span>
</div></Item>
<Item className='App'><div className="row g-0">
  <div className="col-6 col-md-4 mt-1 p-4"><img src={curElem.image} className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"22px"}}>{curElem.address.city}</span></div>
  <div className="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"15px"}}>{curElem.product_name}</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>{curElem.brand_name}</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>${curElem.price}</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"19px"}}>Date : {curElem.date}7s</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-48px"}}>{curElem.discription}</span>
</div></Item>
</Carousel>
</div>
 </>
   )
})
 } 





{/* <p className='fs-3 text-light'>{(productname[0] || {}).product_name}</p>
<hr className='text-light'/>
<div className='hehe'>
<Carousel breakPoints={breakPoints}> 
<Item className='App'><div className="row g-0">
  <div className="col-6 col-md-4 mt-1 p-4"><img src={(image[0] || {}).image} className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>{(location[0] || {}).address}</span></div>
  <div className="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>{(brand[0] || {}).brand_name}</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>{(price[0] || {}).price}</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : {(date[0] || {}).date}</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> {(description[0] || {}).discription}</span>
</div></Item>
<Item className='App'><div className="row g-0">
  <div className="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div className="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div className="row g-0">
  <div className="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div className="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div className="row g-0">
  <div className="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div className="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div className="row g-0">
  <div className="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div className="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div className="row g-0">
  <div className="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div className="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div className="row g-0">
  <div className="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div className="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div className="row g-0">
  <div className="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div className="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div className="row g-0">
  <div className="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div className="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div className="row g-0">
  <div className="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div className="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div className="row g-0">
  <div className="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div className="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div className="row g-0">
  <div className="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div className="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
</Carousel>
</div> */}
{/*SECOND PRODUCT PART */}
{/* <p className='fs-3 text-light mt-4'> Product Name </p>
<hr className='text-light'/>
<div className='hehe fix2'>
<Carousel breakPoints={breakPoints}> 
<Item className='App'><div className="row g-0">
  <div className="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div className="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div className="row g-0">
  <div className="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div className="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div className="row g-0">
  <div className="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div className="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div className="row g-0">
  <div className="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div className="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div className="row g-0">
  <div className="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div className="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div className="row g-0">
  <div className="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div className="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div className="row g-0">
  <div className="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div className="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div className="row g-0">
  <div className="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div className="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div className="row g-0">
  <div className="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div className="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div className="row g-0">
  <div className="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div className="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div className="row g-0">
  <div className="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div className="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div className="row g-0">
  <div className="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div className="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
</Carousel>
</div> */}
{/*STOPP */}
</div>
</div>
</div>

{/* CARAOUSEL*/}


      </>
  );
};
 {/* const rootElement = document.getElementById("root");
 ReactDOM.render(<App/>, rootElement); */}