import { playlists as a } from "./data/data.js";
import { PlaylistsComponent } from "./PlaylistsComponent.js";

// DATA

// RENDER
const root = document.getElementById('root')
const playlistsElement = PlaylistsComponent(a)
root.append(playlistsElement)



