import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft, faAngleRight, faPause, faRetweet, faRandom } from '@fortawesome/free-solid-svg-icons' //importing specific svg icon from the free-solid-svg... library
import { useState } from 'react'
const Player = ({ currentSong, isPlaying, setIsPlaying, audioRef, libraryStatus, setCurrentSong, songs }) => {
    // State 


    // Song time coding========================================================================>
    const [songsList, setSongsList] = useState([...songs])
    const [loop, setLoop] = useState(false)
    const [shuffle, setShuffle] = useState(false)
    const [shuffled, setShuffled] = useState(false)
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
        animationPercentage: 0,
        played: false,
    }
    )

    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime
        const songDuration = e.target.duration || 0

        // Calculate Percentage of song.
        const roundedCurrent = Math.round(current)
        const roundedDuration = Math.round(songDuration)
        const animation = Math.round((roundedCurrent / roundedDuration) * 100)
        setSongInfo({ ...songInfo, currentTime: current, duration: songDuration, animationPercentage: animation, played: true })
    }

    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2))

    }
    //================================================================================================/
    // Reference
    let faControl = null

    // Pause and Play icons.
    if (isPlaying === true) {
        faControl = faPause
    } else {
        faControl = faPlay
    }

    //Event Handlers
    const playSongHandler = () => {
        if (isPlaying) {

            audioRef.current.pause()
            setIsPlaying(!isPlaying)
        } else {
            audioRef.current.play()
            setIsPlaying(!isPlaying)
        }
    }

    const autoHandler = () => {
        if (isPlaying) {

            const playPromise = audioRef.current.play()

            if (playPromise !== undefined) {
                playPromise.then(() => {
                    audioRef.current.play()
                })
            }
        }
    }

    function dragHandler(e) {
        console.log(e)
        audioRef.current.currentTime = e.target.value;
        setSongInfo({ ...songInfo, currentTime: e.target.value });
    }




    const skipTrackHandler = (direction) => {
        // console.log(playedSongs)
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id)        // for non-random
        let copyIndex = songsList.findIndex((song) => song.id === currentSong.id)       // for random

        if (!loop) {

            if (shuffle) {
                if (direction === 'skip-forward') {
                    if (currentSong !== songsList[(songsList.length - 1)]) {
                        setCurrentSong(songsList[copyIndex + 1]);
                    } else if (currentSong === songsList[(songsList.length - 1)]) {
                        setCurrentSong(songsList[0])
                    }
                } else { // skip backward while shuffle is on

                    if (currentSong !== songsList[0]) {
                        setCurrentSong(songsList[copyIndex - 1]);
                    } else if (currentSong === songsList[0]) {
                        setIsPlaying(false)
                        audioRef.current.currentTime = 0
                        audioRef.current.pause()
                    }
                }

            } else { // When shuffle is inactive.
                setSongsList([...songs])
                if (direction === 'skip-forward') {
                    setCurrentSong(songs[currentIndex + 1] || songs[0]);  // || songs[0] makes sure at the end when there are no more indexes it will go back to the beginning
                } else {
                    setCurrentSong(songs[currentIndex - 1] || songs[songs.length - 1]); // This one makes sure that if we're at index 0 and click back it will go to the last song.
                }
            }
        } else {

            if (direction === 'skip-forward') {
                setCurrentSong(currentSong)
                audioRef.current.currentTime = 0
            }
            if (direction === 'skip-backward') {

                if (currentSong !== songsList[0]) {
                    setCurrentSong(songsList[copyIndex - 1]);
                } else if (currentSong === songsList[0]) {
                    setIsPlaying(false)
                    audioRef.current.currentTime = 0
                    audioRef.current.pause()
                }
            }
        }
    }

    const songEndHandler = () => {
        let copyIndex = songsList.findIndex((song) => song.id === currentSong.id)




        if (loop === false) {

            setCurrentSong(songsList[copyIndex + 1])

        }
        else if (loop === true) {
            audioRef.current.currentTime = 0
            audioRef.current.play()

        }

    }

    const shuffleHandler = () => {

        function shuffleArray(arr) {
            var j, x, index;
            for (index = arr.length - 1; index > 0; index--) {
                j = Math.floor(Math.random() * (index + 1));
                x = arr[index];
                arr[index] = arr[j];
                arr[j] = x;
            }
            return arr;
        }
        if (shuffle === false) {

            setShuffle(true)
            setSongsList(shuffleArray(songsList))
        }
        else {
            setShuffle(false)
            setSongsList([...songs])
        }
    }

    const loopHandler = () => {
        if (loop === false) {
            setLoop(true)
        } else {
            setLoop(false)
        }
    }



    // INPUT SLIDER ANIMATION
    const trackAnim = {
        transform: `translateX(${songInfo.animationPercentage}%)`,
        background: `lightgrey`
    }

    return (
        <div className={`player ${libraryStatus ? 'moved' : ""}`}>
            <div className="time-control">

                <p>{getTime(songInfo.currentTime)}</p>

                <div style={{
                    background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
                }} className="track">

                    <input
                        min={0}
                        max={songInfo.duration}
                        value={songInfo.currentTime}
                        type="range"
                        onChange={dragHandler}
                        step="any"

                    />

                    <div className="animate-track" style={trackAnim}></div>
                </div>


                <p>{getTime(songInfo.duration)}</p>

            </div>


            <div className="play-control">

                <FontAwesomeIcon onClick={() => loopHandler()} className={loop ? "active-icon" : ""} icon={faRetweet} size="2x" />
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-backward')} className="skip-backward" size='2x' icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playSongHandler} className="play" size='2x' icon={faControl} />
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-forward')} className="skip-forward" size='2x' icon={faAngleRight} />
                <FontAwesomeIcon onClick={() => shuffleHandler()} className={shuffle ? "active-icon" : ""} icon={faRandom} size="2x" />


                {/* <div className="bars" >
                    <FontAwesomeIcon icon={faBars} size="3x" />

                </div> */}

            </div>




            {/* <div className="track-list">
                <div>
                    {songsList.map((song) => (

                        <TrackList song={song} />
                    ))}

                </div>


            </div> */}

            <audio
                onLoadedData={autoHandler}
                onTimeUpdate={timeUpdateHandler}
                ref={audioRef}
                src={currentSong.audio}
                onLoadedMetadata={timeUpdateHandler}
                onEnded={songEndHandler}
            ></audio>
        </div>
    )
}

export default Player;