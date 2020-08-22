import React from 'react';

function Footer(props) {
    return(
    <div className="footer">
        
            <div className="row justify-content-center">             
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                    <span style={{ color: 'white'}}> <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a> </span>
                    <span style={{ color: 'white'}}>  <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a> </span>
                    <span style={{ color: 'white'}}>   <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a> </span>
                    <span style={{ color: 'white'}}>   <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a> </span>
                    <span style={{ color: 'white'}}>   <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a> </span>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                <span style={{ color: 'white'}}> <p>Copyright © 2020 All rights reserved</p> </span>
                </div>
            </div>
        </div>
    
    )
}

export default Footer;