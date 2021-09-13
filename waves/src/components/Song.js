const Song = ({ currentSong, libraryStatus }) => {


    return (
        <div className={`song-container ${libraryStatus ? "moved" : ""}`}>

            <img src={currentSong.cover} alt='Song Cover Art'></img>
            <h2> {currentSong.name} </h2>
            <h3>{currentSong.artist}</h3>


        </div>
    )
}

export default Song;