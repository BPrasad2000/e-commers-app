import React from 'react'
import Layout from '../Layout/Layout'
import cr1 from '../img/cr1.PNG'
import cr2 from '../img/cr2.png'
import cr3 from '../img/cr3.png'
import offer1 from '../img/offer1.png'
import offer2 from '../img/offer2.png'
import offer3 from '../img/offer3.png'
import offer4 from '../img/offer4.png'
import ctg1 from '../img/Ctg01.png'
import ctg2 from '../img/Ctg02.png'
import ctg3 from '../img/Ctg03.png'
import ctg4 from '../img/Ctg04.png'
import ctg5 from '../img/Ctg05.png'
import ctg6 from '../img/Ctg06.png'




const Home = () => {


  return (

      <Layout title={'Home'}>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner h-40">
            <div className="carousel-item active">
              <img src={cr1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={cr2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={cr3} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      <div className='container pb-5'>

        <h2 className='po text-center pt-5 pb-3'>--Products Offer--</h2>
        <div className="row row-cols-1 row-cols-md-4 g-4 text-center">
          <div className="col">
            <div className="card ">
              <img src={offer1} className="card-img-top" style={{width:"12rem"}} alt="..." />
              <div className="card-body ">
                <h5 className="card-title">Edinborough Soy Sauce Squ. 385g</h5>
                <p className="card-text"> <del>Rs 320.00 </del> Rs 240.00 / Unit</p>
               
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card ">
              <img src={offer2} className="card-img-top" style={{width:"12rem"}} alt="..." />
              <div className="card-body ">
                <h5 className="card-title">Baby Cheramy Soap Floral 5*70g</h5>
                <p className="card-text"> <del>Rs 680.00</del>  Rs 510.00/ Unit</p>
               
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card ">
              <img src={offer3} className="card-img-top" style={{width:"12rem"}} alt="..." />
              <div className="card-body ">
                <h5 className="card-title">Chicken Whole Legs Skinless</h5>
                <p className="card-text"> <del>Rs 2,310.00</del>  Rs 1,848.00 / KG</p>
               
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card ">
              <img src={offer4} className="card-img-top" style={{width:"12rem"}} alt="..." />
              <div className="card-body ">
                <h5 className="card-title">Clogard Tooth Paste 200g</h5>
                <p className="card-text"> <del>Rs 360.00</del>   Rs 270.00 / Unit</p>
               
              </div>
            </div>
          </div>
        </div>

        <h2 className='po text-center pt-5 pb-3'>--Shop By Category--</h2>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <a href='/category/fruits'>
                <img src={ctg1} className="card-img-top" alt="..." />
              </a>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <a href='/category/vegitable'>
                <img src={ctg2} className="card-img-top" alt="..." />
              </a>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <a href='/category/meats'>
                <img src={ctg3} className="card-img-top" alt="..." />
              </a>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <a href='/category/bakery'>
                <img src={ctg4} className="card-img-top" alt="..." />
              </a>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <a href='/category/homeware'>
                <img src={ctg5} className="card-img-top" alt="..." />
              </a>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <a href='/category/beauty-picks'>
                <img src={ctg6} className="card-img-top" alt="..." />
              </a>
            </div>
          </div>
        </div>
      </div>
      </Layout>
   
  )
}

export default Home
