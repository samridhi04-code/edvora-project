import React, {useEffect, useState }  from 'react';
// import { useNavigate } from "react-router-dom";
import Carousel from 'react-elastic-carousel';
import Item from './Items';
import './SideNavbar.css';

export const SideNavbar = ({fetchedData}) => {
  console.log(fetchedData);

  const [productname, setProductname] = useState({});
    const [brand, setBrand] = useState([]);
    const [price, setPrice] = useState([]);
    const [date, setDate] = useState([]);
    // const [time, setTime] = useState([]);
    const [location, setLocation] = useState([]);
    const [description, setDescription] = useState([]);
    const [image, setImage] = useState([]);

    // const navigate = useNavigate();
    // const Routing = ()=> {
    //   navigate("/item1")
    // }

    useEffect(() => {
      setProductname(fetchedData.product_name ||{});
      setBrand(fetchedData.brand_name || {});
      setPrice(fetchedData.price || {});
      setDate(fetchedData.date || {});
      // setTime(fetchedData.time || {});
      setLocation(fetchedData.address || {});
      setDescription(fetchedData.discription || {});
      setImage(fetchedData.image || {});
    }, [fetchedData])

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
  {/* <a className="navbar-brand" href="#">Navbar</a> */}
  <p className="fs-4 mt-1 mb-0 text-secondary">Filters</p>
  <hr className='text-secondary'/>
  {/* <nav className="nav nav-pills flex-column"> */}
  <div className="btn-group dropend">
    <a className="mt-4 btn btn-secondary yes dropdown-toggle" href="#item-1" role="button" data-bs-toggle="dropdown" aria-expanded="false"><span className='no'>Products</span></a>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
  </div>
    {/* <nav className="nav nav-pills flex-column">
      <a className="nav-link ms-3 my-1" href="#item-1-1">Item 1-1</a>
      <a className="nav-link ms-3 my-1" href="#item-1-2">Item 1-2</a>
    </nav> */}
    <div className="btn-group dropend">
    <a className="mt-4 btn yes btn-secondary dropdown-toggle" href="#item-2" role="button" data-bs-toggle="dropdown" aria-expanded="false"><span className='no'>State</span></a>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
  </div>
  <div className="btn-group dropend">
    <a className="mt-4 btn yes btn-secondary dropdown-toggle" href="#item-3" role="button" data-bs-toggle="dropdown" aria-expanded="false"><span className='no'>City</span></a>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
  </div>
    {/* <nav className="nav nav-pills flex-column">
      <a className="nav-link ms-3 my-1" href="#item-3-1">Item 3-1</a>
      <a className="nav-link ms-3 my-1" href="#item-3-2">Item 3-2</a>
    </nav> */}
  </nav>
{/* </nav> */}
</div>
<div className='col-sm-6 col-md-9'>
  
{/* <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabindex="0"> */}
<p className='h1 mt-2 text-light'>Edvora</p>
<p className='h2 try'> Products </p>
<p className='fs-3 text-light'>{(productname[0] || {}).product_name}</p>
<hr className='text-light'/>
  {/* <h4 id="item-1">Item 1</h4>
  <p>...This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
  <h5 id="item-1-1">Item 1-1</h5>
  <p>...This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
  <h5 id="item-1-2">Item 1-2</h5>
  <p>...This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
  <h4 id="item-2">Item 2</h4>
  <p>...This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
  <h4 id="item-3">Item 3</h4>
  <p>...This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
  <h5 id="item-3-1">Item 3-1</h5>
  <p>...This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
  <h5 id="item-3-2">Item 3-2</h5>
  <p>...This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p> */}
{/* </div> */}
{/* <div className='help'>
<div id="carouselExampleSlidesOnly" className="carousel slide " data-bs-ride="carousel">
  <div className="carousel-inner trying">
    <div className="carousel-item active">
      <img src="https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_960_720.jpg" className="d-block w-100" alt="https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_960_720.jpg"/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_960_720.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_960_720.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
</div> */}
<div className='hehe'>
<Carousel breakPoints={breakPoints}> 
<Item className='App'><div class="row g-0">
  <div class="col-6 col-md-4 mt-1 p-4"><img src={(image[0] || {}).image} className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>{(location[0] || {}).address}</span></div>
  <div class="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>{(brand[0] || {}).brand_name}</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>{(price[0] || {}).price}</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : {(date[0] || {}).date}</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> {(description[0] || {}).discription}</span>
</div></Item>
<Item className='App'><div class="row g-0">
  <div class="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div class="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div class="row g-0">
  <div class="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div class="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div class="row g-0">
  <div class="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div class="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div class="row g-0">
  <div class="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div class="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div class="row g-0">
  <div class="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div class="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div class="row g-0">
  <div class="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div class="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div class="row g-0">
  <div class="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div class="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div class="row g-0">
  <div class="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div class="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div class="row g-0">
  <div class="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div class="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div class="row g-0">
  <div class="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div class="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div class="row g-0">
  <div class="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div class="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
</Carousel>
</div>
{/*SECOND PRODUCT PART */}
<p className='fs-3 text-light mt-4'> Product Name </p>
<hr className='text-light'/>
<div className='hehe fix2'>
<Carousel breakPoints={breakPoints}> 
<Item className='App'><div class="row g-0">
  <div class="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div class="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div class="row g-0">
  <div class="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div class="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div class="row g-0">
  <div class="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div class="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div class="row g-0">
  <div class="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div class="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div class="row g-0">
  <div class="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div class="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div class="row g-0">
  <div class="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div class="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div class="row g-0">
  <div class="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div class="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div class="row g-0">
  <div class="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div class="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div class="row g-0">
  <div class="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div class="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div class="row g-0">
  <div class="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div class="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div class="row g-0">
  <div class="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div class="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
<Item className='App'><div class="row g-0">
  <div class="col-6 col-md-4 mt-1 p-4"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png" className='one'/> <br/> <span style={{fontSize:"18px", position:"relative", top:"27px"}}>Location</span></div>
  <div class="col-sm-6 col-md-8 p-2 pt-2"><span style={{fontSize:"18px", position:"relative", top:"20px"}}>Product Name</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Brand name</span><br/> <span style={{fontSize:"18px", position:"relative", top:"20px"}}>$26.99</span> <br/> <span style={{fontSize:"12px", position:"relative", top:"20px"}}>Date : 26/10/21</span></div>
  <span style={{fontSize:"12px" , position:"relative", left:"-28px"}}> Description of the product</span>
</div></Item>
</Carousel>
</div>
{/*STOPP */}
</div>
</div>
</div>

{/* CARAOUSEL*/}


      </>
  );
};
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App/>, rootElement);