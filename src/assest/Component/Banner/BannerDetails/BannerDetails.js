import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';

import './BannerDetails.css'
import slider from "../../../Img/apple-watch-0.png"
function BannerDetails() {
    return (
        <div className="banner_slider">
            <OwlCarousel className='owl-theme' margin={10} items={1} autoplay={true} autoplayTimeout={4000}>
                <div className='items'>
                    <div className="items_wrapper">
                        <div className="item_details">
                            <h2>50% Off For Your First Shopping</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam recusandae dolore nemo beatae blanditiis accusantium!</p>
                            <button>Visit Collections</button>
                        </div>
                        <div className="item_img">
                            <img src={slider} alt="" />
                        </div>
                    </div>
                </div>
                <div className='items'>
                    <div className="items_wrapper">
                        <div className="item_details">
                            <h2>50% Off For Your First Shopping</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam recusandae dolore nemo beatae blanditiis accusantium!</p>
                            <button>Visit Collections</button>
                        </div>
                        <div className="item_img">
                            <img src={slider} alt="" />
                        </div>
                    </div>
                </div>
                <div className='items'>
                    <div className="items_wrapper">
                        <div className="item_details">
                            <h2>50% Off For Your First Shopping</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam recusandae dolore nemo beatae blanditiis accusantium!</p>
                            <button>Visit Collections</button>
                        </div>
                        <div className="item_img">
                            <img src={slider} alt="" />
                        </div>
                    </div>
                </div>

            </OwlCarousel>
        </div>
    )

}
<div className='items'>
    <div className="items_wrapper">
        <div className="item_details">
            <h2>50% Off For Your First Shopping</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam recusandae dolore nemo beatae blanditiis accusantium!</p>
            <button>Visit Collections</button>
        </div>
        <div className="item_img">
            <img src={slider} alt="" />
        </div>
    </div>
</div>
export default BannerDetails