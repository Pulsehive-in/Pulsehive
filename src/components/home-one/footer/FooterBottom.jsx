import LogoWhiteImg from "../../../assets/images/logo/logo-white.png";
function FooterBottom() {
  return (
    <>
      <div className="col-lg-6">
        <div className="aximo-footer-logo">
          <a href="">
            <img src={LogoWhiteImg} alt="Logo" />
          </a>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="aximo-copywright one">
          <p> &copy; Copyright 2025, Designed and Developed by <a style={{color:"#BFF747"}} href="#">RADS Media</a></p>
        </div>
      </div>
    </>
  );
}

export default FooterBottom;
