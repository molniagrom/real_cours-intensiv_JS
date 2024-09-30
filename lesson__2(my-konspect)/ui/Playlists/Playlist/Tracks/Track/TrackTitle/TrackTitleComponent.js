// Отвечает за компонент названия трека.
// Содержит функцию "TrackTitleComponent", которая формирует строку с названием и исполнителем трека, возможно с добавлением символа "🔥" для популярных треков.


export function TrackTitleComponent(inputTrack) {
    return `${inputTrack.isHot ? "🔥" : ""}${inputTrack.artist} - ${inputTrack.title}`;
}
