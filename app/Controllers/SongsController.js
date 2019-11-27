import _store from "../store.js";
import SongService from "../Services/SongsService.js";
import Song from "../Models/Song.js";

//Private
/**Draws the Search results to the page */
function _drawResults() {
  let template = "";
  let songs = _store.State.songs;
  debugger;
  songs.forEach(song => (template += song.Template));
  document.querySelector("#songs").innerHTML = template;
}
/**Draws the Users saved songs to the page */
function _drawPlaylist() {}

//Public
export default class SongsController {
  constructor() {
    console.log("Hello from Songs Controller");
    _store.subscribe("songs", _drawResults);
    _drawResults();
    //TODO Don't forget to register your subscribers
  }

  /**Takes in the form submission event and sends the query to the service */
  search(e) {
    //NOTE You dont need to change this method
    e.preventDefault();
    try {
      SongService.getMusicByQuery(e.target.query.value);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Takes in a song id and sends it to the service in order to add it to the users playlist
   * @param {string} id
   */
  addSong(id) {
    id.preventDefault();
    let formData = id.target;
  }
  //need handler in index.html
  /**
   * Takes in a song id to be removed from the users playlist and sends it to the server
   * @param {string} id
   */
  removeSong(id) {}
}
