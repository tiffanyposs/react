// Most Parent App
// App > VideoList > VideoListItem
// App > SearchBar
// App > VideoDetail

//note its rare for the components to go more than two levels deep

//import react
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBpyCvb82ao4AXjxGDbR5AM2bvDh3Gzxi8';



// console.log(React)



// Create a new component.
// Should produce some HTML
class App extends Component {
	constructor(props) {
		super(props);

		// prperties associated with this
		// videos is a list of videos
		// selectedVideo is the currently selected video (initially null)
		this.state = { 
			videos: [],
			selectedVideo: null
		};


		this.videoSearch('surfboards');
		
	}

	//video search method
	videoSearch(term) {
		//set state to results of video
		// gets the videos from youtube, then setState to be equal
		// to the array of videos and default the selected video to the first one
		YTSearch({key: API_KEY, term: term}, (videos) => {
			//ES6 if key and variable are same variable name, no need to set both
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});
			// this.setState({ videos: videos })
		});
	}


	render() { 

		// uses the lodash library to 'debounce' the video search function
		// this makes it so a function can't be called more than once in a certain amount of time
		// here we use it for when a user is searching for a video, so theres not a lot of flicker.
		const videoSearch = _.debounce( (term) => { this.videoSearch(term) }, 300 );

		// include SearchBar, VideoDetail, and VideoList componenets in the main App Component
		// Pass the VideoDetail component a property video that is qual to the current selected Video
		// VideoList, pass a property that is a function named selectedVideo that sets the state to selectedVideo
		// VideoList, pass the video array to the component
		return (
			<div>
				<SearchBar onSearchTermChange={term => videoSearch(term)} />
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
				  onVideoSelect={selectedVideo => this.setState({selectedVideo})}
				  videos={this.state.videos} />
			</div>
		);
	}
}

// const App = function() {
// 	return <div>Hi!</div>
// }


// Take this component's HTML and put it on the page
// (In the Dom)
ReactDOM.render(<App />, document.querySelector('.container'));
