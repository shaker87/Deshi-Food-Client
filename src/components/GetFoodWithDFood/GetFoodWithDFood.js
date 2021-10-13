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
		</div>
		
    )
}

export default GetFoodWithDFood
