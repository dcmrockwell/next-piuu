const ServicesComponent = () => {
  return (
    <section id="services">
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
          <h2 className="fn_title">Embrace the spirit of the dragon..</h2>
          {/* <div className="line">
            <span />
          </div> */}
        </div>
        {/* !Main Title */}
        {/* Services */}
        <div className="neoh_fn_services">
          <ul>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>01</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">USD Rewards</h3>
                  <p className="fn_desc fn_animated_text">
                    Every diamond hands should be rewarded! Our contract has a built-in code that will distribute 
                    usdc to every holders. Who would say no to passive income?
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>02</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">Lottery</h3>
                  <p className="fn_desc fn_animated_text">
                    More tickets, more chances of winning. Every $PIUU holders will get a chance to take
                    part on this exciting game. 80% of the pooled ticket revenue will go to the winner, 20% will
                    buy back and burn $PIUU
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>03</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">Auto Liqiduity</h3>
                  <p className="fn_desc fn_animated_text">
                    Our contract is designed to put more $ to the liquidity when someone jeeted out. The BUY tax is 0%
                  , SELL tax 5%. 3% is allocated for USDC rewards, 2% for auto liquidity.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>04</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">Staking</h3>
                  <p className="fn_desc fn_animated_text">
                    Stake your $PIUU to earn more $PIUU coins or other major coins in BASE NETWORK. Partnership and
                    huge rally of marketing ahead. 
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* !Services */}
      </div>
    </section>
  );
};
export default ServicesComponent;
