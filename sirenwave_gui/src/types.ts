export default undefined;
import { liveConfig } from "./stores";

export class SongPlaying {
    song: Song
    audio: HTMLAudioElement
    playing: boolean
    lengthMSeconds: number
    timePassed: number
    delay:number

    constructor(song:Song) {
        this.song = song
        this.audio = new Audio('./assets/in-heat.m4a');
        this.lengthMSeconds = song.lengthSeconds * 1000
        this.timePassed = 0
        this.delay = this.lengthMSeconds / 100
    }

    async play() {
        this.audio.play()
        let end = Date.now() + this.lengthMSeconds
        while (this.timePassed < end && this.playing) {
            this.timePassed = end - Date.now()
            await new Promise(resolve => setTimeout(resolve, this.delay));
        }
    }

    async pause() {
        this.audio.pause()
        this.playing = false
    }
}

export class Song {
    name: string
    album: Album
    artist: Artist
    lengthSeconds: number
}

export class Album {
    
}

export class Artist {

}

export class liveConfigState {

}

export class SongQueue {
    songs: Song[]
    index: number

    constructor() {

    }

    next(): Song {
        if (this.songs.length == 0) {
            return null
        } else if (this.index == this.songs.length - 1 && ) {

        }
    }
}