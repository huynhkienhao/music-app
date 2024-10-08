const register = () => {
    return (
        <div className="app">
            <header className="header__brand">
                <div className="header__brand-logo">
                    <img
                        src="./assets/img/logo_spotify.webp"
                        alt=""
                        className="header__brand-img"
                    />
                </div>
                <div className="header__brand-title">
                    <h1>Sign up to start listening</h1>
                </div>
            </header>
            <div className="container">
                <div className="register__form">
                    <div className="register__form-item register__form--fullName mb-3">
                        <input
                            type="text"
                            className="register__form-input p-3"
                            placeholder="Full name"
                        />
                    </div>
                    <div className="register__form-item register__form--email mb-3">
                        <input
                            type="email"
                            className="register__form-input p-3"
                            placeholder="Email"
                        />
                    </div>
                    <div className="register__form-item register__form--password mb-3">
                        <input
                            type="password"
                            className="register__form-input p-3"
                            placeholder="Password"
                        />
                    </div>
                    <div className="register__form-btn mt-5 input-50">
                        <button className="register__form-submit">Đăng ký</button>
                    </div>
                </div>
                <div className="register__or">
                    <div className="register__or-line" />
                    <div className="register__or-title">or</div>
                    <div className="register__or-line" />
                </div>
                <div className="register__socialMedia">
                    <button className="register__socialMedia-btn register__socialMedia-btn--google mb-3 input-50">
                        <i className="fa-brands fa-google register__socialMedia-icon register__socialMedia-icon--google" />
                        <span className="register__socialMedia-text">Đăng ký bằng Google</span>
                    </button>
                    <button className="register__socialMedia-btn register__socialMedia-btn--facebook input-50">
                        <i className="fa-brands fa-facebook register__socialMedia-icon register__socialMedia-icon--facebook" />
                        <span className="register__socialMedia-text">
                            Đăng ký bằng Facebook
                        </span>
                    </button>
                </div>
                <hr className="register__hr" />
                <div className="register__account">
                    <span className="register__account-text">Bạn đã có tài khoản?</span>
                    <a href="" className="register__account-link">
                        Đăng nhập tại đây.
                    </a>
                </div>
            </div>
            <footer className="footer__reCAPTCHA">
                <p className="footer__reCAPTCHA-text">
                    This site is protected by reCAPTCHA and the Google
                    <a href="" className="footer__reCAPTCHA-link">
                        Privacy Policy
                    </a>
                    and
                    <a href="" className="footer__reCAPTCHA-link">
                        Terms of Service
                    </a>
                    apply.
                </p>
            </footer>
        </div>

    )
}

export default register;