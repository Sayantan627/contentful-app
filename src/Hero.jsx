import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            I'm baby tote bag four loko glossier mlkshk post-ironic. Kogi deep v
            mukbang waistcoat, single-origin coffee everyday carry pabst
            slow-carb austin retro iPhone +1 meh neutral milk hotel synth.
            Literally flannel YOLO, meh hoodie meggings viral pop-up man bun fam
            hella pour-over. Vice mumblecore affogato migas DSA. Gorpcore
            marxism organic beard actually thundercats, celiac jianbing cred
            tumblr live-edge waistcoat green juice chambray. Lyft actually JOMO
            air plant.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="women and browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
