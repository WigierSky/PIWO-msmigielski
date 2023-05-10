import React from "react";

const HeroComponent = () => {
  const heroComponent = [
    {
      title: "Find your dream home today!",
      subtitle: "Log in and book a house tour with our real estate agent!",
      login: "Login",
      password: "Password",
      registerBtn: "Register",
      loginBtn: "Log in",
      forgotPsswordBtn: "Forgot Password",
      noAccount: "No account?",
      image: "./assets/hero-image.png",
    },
  ];

  const heroComponentDisplay = heroComponent.map((h) => (
    <>
      <section id="home" className="hero-section">
        <div className="hero-img-section">
          <img className="hero-img" src={h.image} />
        </div>
        <div className="login-test">
          <div className="login-section">
            <div className="hero-title">
              <div className="hero-text">
                <h3>{h.title}</h3>
                <p className="hero-subtitle">{h.subtitle}</p>
              </div>
            </div>
            <div className="input-fields-section">
              <div>
                <label>{h.login}</label>
                <input type="text" />
              </div>
              <div>
                <label>{h.password}</label>
                <input type="password" />
                <div className="login-links">
                  <div className="register-btn">
                    <p>
                      {h.noAccount} <a href="#">{h.registerBtn}</a>
                    </p>
                  </div>
                  <div className="forgot-password">
                    <a href="#">{h.forgotPsswordBtn}</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="login-btn-section">
              <button className="btn login-btn">{h.loginBtn}</button>
            </div>
          </div>
        </div>
      </section>
    </>
  ));

  return <>{heroComponentDisplay}</>;
};

export default HeroComponent;
