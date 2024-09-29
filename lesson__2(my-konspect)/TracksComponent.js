import { TrackComponent } from "./TrackComponent.js";

export function TracksComponent(inputTracks) {
    const element = document.createElement('ul');

    for (let j = 0; j < inputTracks.length; j++) {
        const track = inputTracks[j];

        const trackElement = TrackComponent(track);

        element.append(trackElement);
    }

    return element;
}
