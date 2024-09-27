import { TrackImageComponent } from "./TrackImageComponent";
import { TrackTitleComponent } from "./TrackTitleComponent";


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
