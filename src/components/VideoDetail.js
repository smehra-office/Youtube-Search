import React from 'react';

const VideoDetail = ({ video }) => {

    if (video) {
        let { videoId: id } = video.id;
        let { title, description } = video.snippet;
        return (
            <div className='ui segment'>
                <div className="ui embed">
                    <iframe title="video player" src={`https://www.youtube.com/embed/${id}`}
                        allowFullScreen>
                    </iframe>
                </div>
                <h3 className="ui header">{title}</h3>
                <div className="description">
                    <p>{description}
                    </p>
                </div>
            </div>
        );
    }
    else
        return <div />;

};

export default VideoDetail;


