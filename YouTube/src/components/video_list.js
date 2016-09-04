import React from 'react';
import VideoListItem from './video_list_item';

// props is passed from the parent element
// this is where we pass in the videos as an attribute
// from index.js
const VideoList = (props) => {
	// const videos = props.videos;

	//this returns a list all the videos that are passed in in props
	// and creates an array of videos in the format of VideoListItem component
	const videoItems = props.videos.map((video) => {

		// you should add a unique identifier as a key param
		// so react knows which list item to update if anything changes.
		return (
			<VideoListItem
			  onVideoSelect={props.onVideoSelect}
			  key={video.etag} 
			  video={video} />
		);
	});

	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	);
}


export default VideoList;