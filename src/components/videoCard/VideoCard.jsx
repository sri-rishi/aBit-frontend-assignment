const VideoCard = () => {
    return (
        <div className="video-card">
            <p className="video-card-title">The Sound of Silence</p>
            <div className="video-card-details">
                <div className="video-card-details-box">
                    <p className="video-card-details-title">Shares</p>
                    <p>317</p>
                </div>
                <div className="video-card-details-box">
                    <p className="video-card-details-title">Offered</p>
                    <p>75%</p>
                </div>
                <div className="video-card-details-box">
                    <p className="video-card-details-title">Raised</p>
                    <p>$9510</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;