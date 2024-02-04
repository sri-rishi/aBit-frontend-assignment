import { PROFILE_PIC } from "../../assets";
import {Button} from "../index";

const ProfileCard = () => {
    return (
        <div className="profile-card">
            <div className="profile-card-pic-box">
                <img className="profile-card-pic" src={PROFILE_PIC} alt="user" />
            </div>
            <div className="profile-card-details">
                <div className="profile-card-title">
                    <p>DAN MACE</p>
                    <p className="profile-sub-title">/Johny_Films/</p>
                </div>
                <div className="profile-bio">
                    <p className="profile-bio-title">Bio</p>
                    <p>Simply a film fan creating oringinal content for Youtube. Let's Collaborate</p>
                </div>
                <div className="profile-btn-box">
                    <Button className={"profile-btn"} text={"Creator"} />
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;