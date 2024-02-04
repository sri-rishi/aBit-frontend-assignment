import { COVER_BAND, COVER_IMAGE } from "../../assets"
import ProfileCard from "../profileCard/ProfileCard";

const HeroSection = () => {
    return (
        <div className="hero-section">
          <div className="cover-img-box">
            <img src={COVER_IMAGE} alt="cover" />  
          </div>
          <div className="cover-band-box">
            <img src={COVER_BAND} alt="band" />
          </div>
          <ProfileCard />
        </div>
    )
}

export default HeroSection;