import React from "react"
import{Carousel} from  'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "./App.css";

const Slide = () => {
    return (
        <div>
            <Carousel className="main-slide">

            <div>
                <img src="https://static2.bigstockphoto.com/5/0/1/large1500/105946457.jpg" alt="dimdim" />
            </div>
            <div>
                    <img src="https://i.ytimg.com/vi/b4qkrzr7xvs/maxresdefault.jpg" alt="text"/>
            </div>
                <div>
                    <img src="https://www.mistay.in/travel-blog/content/images/2020/07/travel-4813658_1920.jpg" alt="text"  />
                </div>
                <div>
                    <img src="https://static.toiimg.com/photo/60776678.cms"  alt="mon" />
                </div>
                <div>
                    <img src="https://bigseventravel.com/wp-content/uploads/2021/02/most_famous_monuments_in_india_taJ_Mahal_-1920x1272.jpg"  alt="bab"  />
                </div>

            </Carousel>
        </div>
    );
}
export default Slide;