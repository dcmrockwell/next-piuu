import Link from "next/link";
import { Fragment, useState } from "react";


const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [homeToggle, setHomeToggle] = useState(false);
  return (
    <Fragment>
      {/* Right Navigation */}
      <div
        className={`nav_overlay ${toggle ? "go" : ""}`}
        onClick={() => setToggle(false)}
      />
      <div className={`neoh_fn_nav ${toggle ? "go" : ""}`}>
        <div className="trigger is-active">
          <div className="trigger_in" onClick={() => setToggle(false)}>
            <span className="text">Close</span>
            <span className="hamb">
              <span className="hamb_a" />
              <span className="hamb_b" />
              <span className="hamb_c" />
            </span>
          </div>
        </div>
        <div className="nav_content">
          <div className="nav_menu">
            <ul>
              <li className="menu-item menu-item-has-children">
                <a
                  href="/"
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   setHomeToggle(!homeToggle);
                  // }}
                >
                  Home
                </a>
                {/* <ul
                  className="sub-menu"
                  style={{ display: homeToggle ? "block" : "none" }}
                >
                  <li>
                    <Link legacyBehavior href="/">
                      Home Static
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/kenburns">
                      Full Kenburns
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/half-kenburns">
                      Half Kenburns
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/half-slider">
                      Half Slider
                    </Link>
                  </li>
                </ul> */}
              </li>
              <li className="menu-item">
                <a href="#">Whitepaper</a>
                {/* <Link legacyBehavior href="/about">
                  Whitepaper
                </Link> */}
              </li>
              <li className="menu-item">
              <a href="#">Telegram</a>
                {/* <Link legacyBehavior href="/blog">
                  Chart
                </Link> */}
              </li>
              <li className="menu-item">
              <a href="#">Buy Now</a>
                {/* <Link legacyBehavior href="/contact">
                  Telegram
                </Link> */}
              </li>
            </ul>
          </div>
          <div className="nav_buttons">
            <a
              href="https://opensea.io/"
              className="neoh_fn_button"
              target="_blank"
            >
              <span className="icon">
                <img src="svg/opensea.svg" alt="" className="fn__svg" />
              </span>
              <span className="text">OpenSea</span>
            </a>
            <a
              href="https://discord.com/"
              className="neoh_fn_button"
              target="_blank"
            >
              <span className="icon">
                <img src="svg/discord.svg" alt="" className="fn__svg" />
              </span>
              <span className="text">Discord</span>
            </a>
          </div>
        </div>
        {/* Nav Footer */}
        <div className={`nav_footer ${toggle ? "ready" : ""}`}>
          <div className="nf_left">
            {/* <p>
              Copyright {new Date().getFullYear()}- 
              Fly High. Conquer the Crypto World
              <a
                href="#"
                target="_blank"
              >
                
              </a>
            </p> */}
          </div>
          {/* <div className="nf_right">
            <div className="neoh_fn_social_list">
              <ul>
                <li>
                  <a href="#">
                    <i className="fn-icon-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fn-icon-facebook"  />

                    
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fn-icon-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fn-icon-pinterest" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fn-icon-behance" />
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
        {/* !Nav Footer */}
      </div>
      {/* !Right Navigation */}
      {/* Header */}
      <header className="neoh_fn_header">
        <div className="container">
          <div className="header_in">
            <div className="logo">
              <Link legacyBehavior href="/">
                <a>
                  <img src="img/logo.png" alt="" />
                </a>
              </Link>
            </div>
            <div className="trigger">
              <div className="trigger_in" onClick={() => setToggle(!toggle)}>
                <span className="text">Menu</span>
                <span className="hamb">
                  <span className="hamb_a" />
                  <span className="hamb_b" />
                  <span className="hamb_c" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* !Header */}
    </Fragment>
  );
};
export default Header;
