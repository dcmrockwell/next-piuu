import Link from "next/link";
const AboutComponent = () => {
  return (
    <section id="about">
      <div className="container">
        {/* About Item #1 */}
        <div className="neoh_fn_about_item">
          <div className="img_item">
            <img src="img/hero/background-rise.png" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">The Rise of $PIXIU</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                Dogs, Cats and Frogs had their moments in the spotlight.. Gone are the days
                of following the herd. Bid farewell to the ordinary and mundane.
              </p>
              <p>
                Be part of something great. Embrace the spirit of the dragon, unleash the full potential
                of meme coins. Ride on the back of Pixiu, the lucky dragon as it spread it wings to the moon..
              </p>
            </div>
            <div className="buttons">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  <img src="svg/opensea.svg" alt="" className="fn__svg" />
                </span>
                <span className="text">Telegram</span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  <img src="svg/discord.svg" alt="" className="fn__svg" />
                </span>
                <span className="text">Uniswap</span>
              </a>
            </div>
          </div>
        </div>
        {/* !About Item #1 */}
        {/* About Item #2 */}
        <div className="neoh_fn_about_item reverse">
          <div className="img_item">
            <img src="img/hero/hero.png" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">Presale</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id 
              ligula ac nisl auctor sagittis. Donec massa dui, ultrices ac tempor et,
              dignissim vel eros. 
              </p>
              <p>
              Aliquam eget sollicitudin ligula. Vestibulum 
              commodo velit et felis tincidunt, a faucibus ligula semper. 
              Morbi vel hendrerit ante. Quisque ac nunc erat. Cras nec commodo ligula.
              </p>
            </div>
            <div className="buttons">
              <Link legacyBehavior href="#">
                <a className="neoh_fn_button only_text">
                  <span className="text">More About US</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* !About Item #2 */}
      </div>
    </section>
  );
};
export default AboutComponent;
