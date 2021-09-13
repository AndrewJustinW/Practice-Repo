import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeDown } from '@fortawesome/free-solid-svg-icons'

const LibrarySong = ({ song, setCurrentSong, audioRef, setIsPlaying, currentSong, isPlaying }) => {

    let soundIcon = null

    const selectSongHandler = () => {

        setCurrentSong(song)
        audioRef.current.play()
        setIsPlaying(true)

    }

    if (song.id === currentSong.id && isPlaying) {
        soundIcon = faVolumeUp
    }
    else if (song.id === currentSong.id) {
        soundIcon = faVolumeDown
    }




    return (
        <div onClick={selectSongHandler} onTouchStart={selectSongHandler} className={`library-song ${song.id === currentSong.id ? "selected" : ""} `}>

            <img src={song.cover} alt='Song Cover Art'></img>

            <div className="song-description">
                <h3> {song.name} </h3>
                <h4>{song.artist}</h4>
            </div>

            <FontAwesomeIcon icon={soundIcon || ""} />

        </div>
    )
}

export default LibrarySong;