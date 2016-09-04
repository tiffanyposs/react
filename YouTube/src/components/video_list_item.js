import React from 'react';

// the param is really props, however with ES6 you can
// pass a key of the property with curly braces and it
// create a variable named video. It's the same as doing
// const video = props.video;
const VideoListItem = ({ video, onVideoSelect }) => {
	// const video = props.video;
	const imageUrl = video.snippet.thumbnails.default.url;
	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} />
				</div>

				<div className="media-body">
					<div className="media-heading">
						{video.snippet.title}
					</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;