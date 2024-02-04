import {AddVideoCard, VideoCard} from "../index";

const ReleasesSection = () => {
    return (
        <div className="releases-section">
            <div className="releases-details-box">
                <div className="releases-details-text">
                    <p>Releases</p>
                    <p className="releases-details-subtext">Videos that you upload in collaboration with aBit appear here.</p>
                </div>
                <div className="releases-details">
                    <div className="releases-details-item">
                        <p className="releases-details-item-title">1</p>
                        <p>Shared Videos</p>
                    </div>
                    <div className="releases-details-item">
                        <p className="releases-details-item-title">$9510</p>
                        <p>Fund Raised</p>
                    </div>
                    <div className="releases-details-item">
                        <p className="releases-details-item-title">317</p>
                        <p>Co-owner community</p>
                    </div>
                    <div className="releases-details-item">
                        <p className="releases-details-item-title">$3804</p>
                        <p>Co-owner Earnings</p>
                    </div>
                </div>
            </div>
            <div className="video-card-list">
                <AddVideoCard />
                <VideoCard />
            </div>
        </div>
    )
}

export default ReleasesSection;