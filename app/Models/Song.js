//DESIGN PATTERN adapter; TAKING WHAT THE OBJECT RETURNS AND MAKES IT ANOTHER PROPERTY NAME
export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this._id = data.trackId || data._id;
  }

  get Template() {
    return `
  <div class ="col-8">
    <h2>${this.artist}</h2>
    <h2>${this.title}</h2>
    <h5>${this.album}</h5>
    <img src="${this.albumArt}">
    <button onclick="app.songsController.addSong('${this._id}')">Add To List!</button>
    <button onclick="app.songsController.playSong('${this._id}')"
    ></button>
    
  </div>          
  `;
  }

  

  get playlistTemplate() {
    return `
    <div class ="col-8">
    <h2>${this.artist}</h2>
    <h2>${this.title}</h2>
    <h5>${this.album}</h5>
    <img src="${this.albumArt}">
    <button type="submit" onsubmit="app.songsController.removeSong(event, '${this._id}')">Remove From List!</button>
    
  </div> 
        `;
  }
}
