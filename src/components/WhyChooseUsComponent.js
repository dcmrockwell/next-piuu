const WhyChooseUsComponent = () => {
  return (
    <section id="investor">
      {/* Dividers */}
      <img
        src="svg/divider.svg"
        alt=""
        className="fn__svg fn__divider top_divider"
      />
      <img
        src="svg/divider.svg"
        alt=""
        className="fn__svg fn__divider bottom_divider"
      />
      {/* !Dividers */}
      <div className="container">
        {/* Main Title */}
        <div className="neoh_fn_title">
          <h3 className="fn_title">Ride on the back of Pixiu the lucky dragon.</h3>
          <div className="line">
            <span />
          </div>
        </div>
        {/* !Main Title */}
        {/* Investor List Shortcode */}
        <div className="neoh_fn_investor">
          <ul>
            <li>
              <div className="item">
                <img src="img/hero/1.png" alt="" />
                <a href="#" className="full_link" />
              </div>
            </li>
            <li>
              <div className="item">
                <img src="img/hero/2.png" alt="" />
                <a href="#" className="full_link" />
              </div>
            </li>
            <li>
              <div className="item">
                <img src="img/hero/3.png" alt="" />
                <a href="#" className="full_link" />
              </div>
            </li>
            <li>
              <div className="item">
                <img src="img/hero/4.png" alt="" />
                <a href="#" className="full_link" />
              </div>
            </li>
            <li>
              <div className="item">
                <img src="img/hero/5.png" alt="" />
                <a href="#" className="full_link" />
              </div>
            </li>
            {/* <li>
              <div className="item">
                <img src="img/investors/6.png" alt="" />
                <a href="#" className="full_link" />
              </div>
            </li>
            <li>
              <div className="item">
                <img src="img/investors/7.png" alt="" />
                <a href="#" className="full_link" />
              </div>
            </li>
            <li>
              <div className="item">
                <img src="img/investors/8.png" alt="" />
                <a href="#" className="full_link" />
              </div>
            </li>
            <li>
              <div className="item">
                <img src="img/investors/9.png" alt="" />
                <a href="#" className="full_link" />
              </div>
            </li>
            <li>
              <div className="item">
                <img src="img/investors/10.png" alt="" />
                <a href="#" className="full_link" />
              </div>
            </li> */}
          </ul>
        </div>
        {/* !Investor List Shortcode */}
      </div>
    </section>
  );
};
export default WhyChooseUsComponent;
