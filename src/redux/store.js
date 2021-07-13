import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/auth.reducer";
import { channelVideoReducer } from "./reducers/channel.reducer";
import {
  homeVideoReducer,
  relatedVideoReducer,
  selectedVideoReducer,
  searchedVideoReducer,
} from "./reducers/videos.reducer";
import { commentListReducer } from "./reducers/comments.reducer";
const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: homeVideoReducer,
  selectedVideo: selectedVideoReducer,
  channelDetails: channelVideoReducer,
  commentList: commentListReducer,
  relatedVideo: relatedVideoReducer,
  searchedVideos: searchedVideoReducer,
});

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
