export function renderAudioTracks(audioArray) {
    const audioItems = [];
  
    audioArray.forEach((audio) => {
      const audioItem = document.createElement("div");
      audioItem.classList.add("audio-item");
  
      const h2Element = document.createElement("h2");
      h2Element.textContent = audio.h2;
  
      const audioElement = document.createElement("audio");
      audioElement.controls = true;
  
      const source = document.createElement("source");
      source.src = audio.src;
      source.type = audio.type;
  
      audioElement.append(source);
  
      const description = document.createElement("p");
      description.classList.add("underneath");
      description.textContent = audio.description;
  
      audioItem.append(h2Element);
      audioItem.append(description);
      audioItem.append(audioElement);
  
      audioItems.push(audioItem);
    });
  
    return audioItems;
  }