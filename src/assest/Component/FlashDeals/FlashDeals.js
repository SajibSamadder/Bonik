import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function FlashDeals() {

    return (
        <section>
            <div className="container">
                <div className="flash_deals_wrapper">
                    <h2>Flash Deals</h2>
                    <OwlCarousel className='owl-theme' loop margin={10} nav={true} navText={['<i class="far fa-chevron-right"></i>', '<i class="far fa-chevron-right"></i>']}>
                        <div class='item'>
                            <h4>1</h4>
                        </div>
                        <div class='item'>
                            <h4>2</h4>
                        </div>
                        <div class='item'>
                            <h4>3</h4>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </section>
    )
}

export default FlashDeals