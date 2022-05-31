import HeaderLanding from "./HeaderLanding";
import '../style.css';
// import Showcase from "./Showcase";
// import { Link } from "react-router-dom";
// import { pics } from "./Pics"

function LandingPage() {
    // const _winner = ~~(Math.random() * pics.length);
    // const _pic = pics[_winner];
    // const _bg = _pic.bgColor;
    // const _leftPic = _pic.left;
    // const _rightPic = _pic.right;
    return (
        <div className="landingPage" style={{ backgroundColor: "#99ceff" }}>
            {<HeaderLanding />}
            <div className="container mainContent text-center">
                <div className="row gy-5">
                    <div className="col-lg-6">
                        {/* <div className="">
                            {<Showcase leftPic={_leftPic} rightPic={_rightPic} />}
                        </div> */}
                        <div className="">
                            <video muted autoPlay loop playsInline className="img-fluid mx-auto">
                                <source src="assets/showcase/slide.mp4" type="video/mp4"></source>
                            </video>
                        </div>
                    </div>
                    <div className="col-lg-6 justify-content-center align-items-center vertical-align">
                        <div className="container infoBlock mb-5">
                            <div className="infoDescriptionLogo">
                                <img className="img-fluid" src="assets/logos/logo-white.png" alt=""></img>
                            </div>
                            <div className="infoDescription">
                                <div className="indent">
                                    As tech art lovers, we decided to see what would happen if we use some cool pixelated birds to inspire AI for creating the art.
                                    The stunning versions of the famous owls exceeded all our expectations!
                                </div>
                                <br />
                                <div className="indent">
                                    We decided that the community should see this and created a collection of <span className="bold">10,000 AI-generated</span> owls.
                                    For us, this will be the beginning of the large-scale development of generative AI art in the NFT community.
                                    Tech is the future, and NFT is the future of art!
                                </div>
                                <br />
                                <div className="text-center">
                                    This is the first project of its kind and we want you to be part of it.
                                    {/* <br /><span className="bold">The first 2500 AINightbirds will mint for free</span>. The remaining <span className="bold">7500 at a price of 0.05 ETH</span>. */}
                                    <br />
                                    <br />Join us for fun and beauty!
                                </div>
                            </div>
                            <div className="container text-center pt-3 pb-3">
                                <div className="mintNowBtn">
                                    <button className="btn btn-outline-dark rounded-pill">
                                        {/* <Link style={{ display: 'block' }} to="/mint">MINT NOW for 0.<span className="price-decimals">05</span> ETH</Link> */}
                                        {/* <Link style={{ display: 'block' }} to="/mint">MINT NOW for <span className="bold">FREE</span></Link> */}
                                        <a target="_blank" rel="noreferrer" href="https://opensea.io/collection/ainightbirds">OPENSEA</a>
                                        {/* <Link style={{ display: 'block' }} to=""></Link> */}
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default LandingPage;
