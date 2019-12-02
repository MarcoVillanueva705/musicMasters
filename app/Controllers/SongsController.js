import _store from "../store.js";
import SongService from "../Services/SongsService.js";
import Song from "../Models/Song.js";
import store from "../store.js";

//Private

/**Draws the Search results to the page */
function _drawResults() {
  let template = "";
  let songs = _store.State.songs;
  songs.forEach(song => (template += song.Template));
  document.querySelector("#songs").innerHTML = template;
}
/**Draws the Users saved songs to the page */
function _drawPlaylist() {
  let playlistTemplate = "";
  let playlists = _store.State.playlist;
  playlists.forEach(
    song => (playlistTemplate += song.playlistTemplate)
  );
  document.querySelector("#playlist").innerHTML = playlistTemplate;
}

//Public
//REVIEW CONSOLE.LOG _drawResults into constructor to see if it works first
export default class SongsController {
  constructor() {
    console.log("Hello from Songs Controller");
    _store.subscribe("songs", _drawResults);
    _store.subscribe("playlist", _drawPlaylist);
    // _drawResults();
    //TODO Don't forget to register your subscribers
    //REVIEW SUBSCRIBE IS A FUNCTION THAT LET'S CONTROLLERS, SERVICES ET. AL KNOW 
    //THAT THERE WAS A CHANGE TO THE STATE
  }

  /**Takes in the form submission event and sends the query to the service */
  search(e) {
    e.preventDefault();
    debugger
    //NOTE You dont need to change this method
    try {
      SongService.getMusicByQuery(e.target.query.value);
    } catch (error) {
      console.error(error);
    }
  }
  /**
   * find and play a song by its id
   * @param {string} id
   * 
   */

   playSong(id) {
    let song = store.State.songs.find(s =>s._id == id);//id is the parameter, and _id is the value from Song
   }
  /**
   *
   *
   * @param {string} id
   */
  addSong(id) {
    SongService.addSong(id);
    console.log(id);
  }
  
  /**
   * Takes in a song id to be removed from the users playlist and sends it to the server
   * @param {string} id
   */
  removeSong(id) {}
}
