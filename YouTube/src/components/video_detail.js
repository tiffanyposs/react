import React from 'react';

// gets video from the parent App component
// this is equal to the selectedVideo
const VideoDetail = ({ video }) => {

	//If no video is selected show Loading...
	if(!video) return <div>Loading...</div>;

	//get the id from the video object from youtube
	// to concatinate a url
	const videoId = video.id.videoId;

	// way of concatinating string in ES6. Use a ${} with backticks and variable name inside;
	// make sure to use back-tics
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	)
};

export default VideoDetail;