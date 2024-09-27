import { liba } from "./liba";
import { TracksComponent } from "./TracksComponent";



export function PlaylistComponent(inputPlaylist) {
    const classes = ['playlist'];

    if (inputPlaylist.isActive) {
        classes.push('active');
    }

    const element = liba.create('div', classes);

    // todo: split into PlaylistTitleComponent
    const playlistTitleElement = document.createElement('h2');
    playlistTitleElement.append(inputPlaylist.title);

    element.append(playlistTitleElement);

    element.append(TracksComponent(inputPlaylist.tracks));

    return element;
}
