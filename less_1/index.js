const playlists = [
    {
        id: 1,
        title: 'Hip-Hop-Hits',
        tracks: [
            {
                artist: 'Eminem',
                title: 'Rap God',
                isNot: true,
                imageSource: '/less_1/img/cardImage/trackList/track1.jpeg'
            },
            {
                artist: '50 cent',
                title: 'In da Club',
                isNot: false,
                imageSource: '/less_1/img/cardImage/trackList/track1.jpeg'
            }
        ]
    },
    {
        id: 2,
        title: 'rap Hits 1990s',
        tracks: [
            {
                artist: 'Public Enemy',
                title: 'Fight the Power',
                isNot: true,
                imageSource: '/less_1/img/cardImage/trackList/track1.jpeg'   
            }
        ]
    }
]



// RENDER

const root = document.getElementById('root');

for (let i = 0; i < playlists.length; i++) {
    const playlist = playlists[i];

    const playlistElement = document.createElement('div');
    const playlistTitleElement = document.createElement('h2');
    playlistTitleElement.append(playlist.title)

    playlistElement.append(playlistTitleElement)

    const tracksElement = document.createElement('ul');

    const trackimageElement = document.createElement('img');
    imageElement.src = track.imageElement;

    tracksElement.append(trackimageElement, track.title)

    for (let j = 0; index < playlist.tracks.length; j++) {
        const track = playlist.tracks[j];
       
        const trackElement = document.createElement('li');
        
        trackElement.append(track.title)

        tracksElement.append(trackElement)

    }

    playlistElement.append(tracksElement)


    root.append(playlistElement);


}

function createTrackElement() {

}
