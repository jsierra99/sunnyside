import React from 'react';
import "../css/reviews.scss";
import emily from "../img/image-emily.jpg";
import thomas from "../img/image-thomas.jpg";
import jennie from "../img/image-jennie.jpg";

const Reviews = () => 
{
    return (
        <section className="reviews">
            <div className="container">
                <h1>client testimonials</h1>
                <div className="grid_reviews">
                    <div className="reviews1">
                        <img src={emily} alt="emily" />
                        <p>We put our trus in Sunnyside and they delivered, making sure our needs were met 
                        and deadlines we always hit.</p>
                        <h3>Emily R.</h3>
                        <h5>marketing director</h5>
                    </div>
                    <div className="reviews1">
                        <img src={thomas} alt="thomas" />
                        <p>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and 
                        enjoyable experience.</p>
                        <h3>Thomas S.</h3>
                        <h5>chief operating officer</h5>
                    </div>
                    <div className="reviews1">
                        <img src={jennie} alt="jennie" />
                        <p>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                        <h3>Jennie F.</h3>
                        <h5>business owner</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews
