import {Button} from "../index";
import {IoWallet, BsFillBellFill,BsChevronDown, PROFILE_PIC} from "../../assets";

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="title">
                <h1>aBit</h1>
            </div>
            <div className="nav-btn-box">
                <Button className={"share-btn"} text={"Share new video"}/>
                <Button  className="nav-icon-btn btn-border-none-bg-trans" icon={<IoWallet/>} />
                <Button className="nav-icon-btn btn-border-none-bg-trans" icon={<BsFillBellFill />} />
                <div className="profile-pic-box">
                    <img className="profile-pic" src={PROFILE_PIC} alt="user" />
                </div>
                <Button className="down-icon-btn btn-border-none-bg-trans" icon={<BsChevronDown />}/>
            </div>
        </nav>
    )
}

export default Navbar;