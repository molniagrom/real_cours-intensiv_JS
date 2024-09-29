import { TrackImageComponent } from "./TrackImageComponent.js";
import { TrackTitleComponent } from "./TrackTitleComponent.js";


export function TrackComponent(inputTrack) {
    // create
    const element = document.createElement('li');

    // add data
    element.append(
        TrackImageComponent(inputTrack.imageSource),
        TrackTitleComponent(inputTrack)
    );

    // return
    return element;
}
