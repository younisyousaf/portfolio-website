import React from "react";
import Logo from "../../../assets/img/logo/logo.jpg";
const Preloader = () => {
  return (
    <div className="preloader__matias">
      <div className="box text-center">
        <div className="matias">
          <img
            src={Logo}
            alt="img"
            style={{
              objectFit: "cover",
              borderRadius: "50%",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <span className="fz-30 mati fw-600 text-uppercase">Younis Yousaf</span>
      </div>
    </div>
  );
};

export default Preloader;
