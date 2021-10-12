import React from 'react';
import './GetFoodWithDFood.css';
import mobile from '../../images/mobile.png';
import googlePlay from '../../images/android.png';
import apple from '../../images/apple.png';
import dishFood from '../../images/dish.png'

function GetFoodWithDFood() {
    return (
		<div className="get-food-with-dfood">
			<div className="get-food-with-dfood-wrapper container">
				<div className="section-color"></div>
				<div className="section-wrapper-content">
					<div className="food-mobile d-lg-block d-none">
						<img src={mobile} width="100%" alt="Mobile food" />
                       
					</div>
					<div className="get-content">
						<h2 className="section-header">Get Food With dFood</h2>
						<p className="pt-1">Download the dfood app and order your food online to get the faster delivery.</p>
						<div className="store-app">
							<img className="mb-sm-0 mb-2 store-img" src={googlePlay} alt="On Google play" />
							<img  className="ml-sm-4 mb-sm-0 ml-2 mb-2 store-img" style={{marginLeft: '20px'}}  src={apple} alt="On App store" />
						</div>
					</div>
					<div className="get-dfood-dish">
						<img src={dishFood} alt="get-dfood-dish " />
					</div>
				</div>
			</div>
            {/* <div className="own-items bg-color5">
			<div className="section-body mt-lg-0 mt-5 mt-lg-n5 container">
				<div className="row ml-lg-4">
					<div className="col-lg-6">
						<div>
							<h2 className="font2 font-weight-semi">
								<span className="color1">Own a Restaurant?</span> <br />
								<span className="color3">Join our Food Merchant Network</span>
							</h2>
							<p className="mt-4 font-95">Reach out to a wider set to customers and enhance your revenues with takeaways powered by dFood delivery platform.</p>
							<ul className="mt-4 ml-3 list-become">
								<li>Get your food featured</li>
								<li>Enjoy an exposure to a huge customer base</li>
								<li>Increase your sales through collaborative campaingns</li>
							</ul>
							<a href="#" className="btn btn-danger btn-lg bg-color1 mt-4 font2 font-weight-semi px-4">Become  Partner</a>
						</div>
					</div>
					<div className="col-lg-6">
						<img className="w-100" src="./assets/img/get/restaurant-building-flat-design-architecture-facade-food-cafe-construction-vector-illustration.png" alt="restaurant-building-flat" />
					</div>
				</div>
			</div>
		</div> */}
	
		</div>
		
    )
}

export default GetFoodWithDFood
