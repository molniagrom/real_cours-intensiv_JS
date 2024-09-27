import { PlaylistComponent } from "./PlaylistComponent";

// components
export function PlaylistsComponent(inputPlaylists) {
    const element = document.createElement('div');

    for (let i = 0; i < inputPlaylists.length; i++) {
        const playlist = inputPlaylists[i];
        element.append(PlaylistComponent(playlist));
    }

    return element;
}
