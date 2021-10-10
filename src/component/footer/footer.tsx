import './footer.css'
const footer = () => {
    return (
        <footer>
            <div className="content">
                <div className="top">
                    <div className="logo-details">
                        <span className="logo_name">Paluto Express</span>
                    </div>
                    <div className="media-icons">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-instagram"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                        <a href="#"><i className="fa fa-youtube"></i></a>
                    </div>
                </div>
                <div className="link-boxes">
                    <ul className="box">
                        <li className="link_name">Links</li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Get Started</a></li>

                    </ul>
                    <ul className="box">
                        <li className="link_name">Services</li>
                        <li><a href="#">Bake Sushi</a></li>
                        <li><a href="#">Salad Roll</a></li>
                        <li><a href="#">Malabon</a></li>
                        <li><a href="#">Cordon Blue</a></li>

                    </ul>
                    <ul className="box">
                        <li className="link_name">Other services</li>
                        <li><a href="#">Paluto</a></li>
                        <li><a href="#">Manecure</a></li>
                        <li><a href="#">Pedecure</a></li>
                        <li><a href="#">Taga hugas</a></li>

                    </ul>
                    <ul className="box">
                        <li className="link_name">Contact</li>
                        <li><a href="#">+63 9617134338</a></li>
                        <li><a href="#">+63 9617134338</a></li>
                        <li><a href="#">awit@gmail.com</a></li>

                    </ul>


                </div>
            </div>
            <div className="bottom-details">
                <div className="bottom_text">
                    <span className="copyright_text">Copyright © 2021 <a href="#">Paluto Express</a></span>
                    <span className="policy_terms">
          <a href="#">Privacy policy</a>

        </span>
                </div>
            </div>
        </footer>
    )

}

export default footer;
