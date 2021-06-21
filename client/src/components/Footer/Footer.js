import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            

            <footer className="footer">
                <div className="container bottom_border">
                <div className="row">
                <div className=" col-sm-4 col-md col-sm-4  col-12 col">
                <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>

                <p className="mb10">Blogbuilder is a independent community platform where you can share your artifacts & knowledge with others</p>
                <p><i className="fa fa-location-arrow"></i> Hyderabad, India </p>
                <p><i className="fa fa fa-envelope"></i> rkumar6821@gmail.com  </p>


                </div>


                <div className=" col-sm-4 col-md  col-6 col">
                <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>

                <ul className="footer_ul_amrc">
                <li><a href="http://webenlance.com">Image Rectoucing</a></li>
                <li><a href="http://webenlance.com">Clipping Path</a></li>
                <li><a href="http://webenlance.com">Hollow Man Montage</a></li>
                <li><a href="http://webenlance.com">Ebay Amazon</a></li>
                <li><a href="http://webenlance.com">Hair Masking/Clipping</a></li>
                <li><a href="http://webenlance.com">Image Cropping</a></li>
                </ul>

                </div>


                <div className=" col-sm-4 col-md  col-6 col">
                <h5 className="headin5_amrc col_white_amrc pt2">Most Visits</h5>

                <ul className="footer_ul_amrc">
                    <li><a href="http://webenlance.com">Remove Background</a></li>
                    <li><a href="http://webenlance.com">Shadows Mirror Reflection</a></li>
                    <li><a href="http://webenlance.com">Logo Design</a></li>
                    <li><a href="http://webenlance.com">Vectorization</a></li>
                    <li><a href="http://webenlance.com">Hair Masking/Clipping</a></li>
                    <li><a href="http://webenlance.com">Image Cropping</a></li>
                </ul>

                </div>


                <div class=" col-sm-4 col-md  col-12 col">
                <h5 class="headin5_amrc col_white_amrc pt2">Follow us</h5>


                <ul class="footer_ul2_amrc">
                <li><a href="#"><i class="fab fa-twitter fleft padding-right"></i> </a><p>We are on following platforms where you can follow us<a href="#">https://www.lipsum.com/</a></p></li>
                <li><a href="#"><i class="fab fa-twitter fleft padding-right"></i> </a><p>Lorem Ipsum is simply dummy text of the printing...<a href="#">https://www.lipsum.com/</a></p></li>
                <li><a href="#"><i class="fab fa-twitter fleft padding-right"></i> </a><p>Lorem Ipsum is simply dummy text of the printing...<a href="#">https://www.lipsum.com/</a></p></li>
                </ul>

                </div>
                </div>
                </div>

                <br/>


                <div class="container">

                <p class="text-center">Copyright @2017 | <a href="#">Terms of Service</a></p>

                <ul class="social_footer_ul">
                <li><a href="http://webenlance.com"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="http://webenlance.com"><i class="fab fa-linkedin"></i></a></li>
                <li><a href="http://webenlance.com"><i class="fab fa-instagram"></i></a></li>
                </ul>

                </div>

            </footer>


        </>
    )
}

export default Footer
