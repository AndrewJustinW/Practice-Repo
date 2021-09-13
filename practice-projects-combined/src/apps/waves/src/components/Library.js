import LibrarySong from './LibrarySong'

const Library = ({ songs, setCurrentSong, audioRef, setIsPlaying, currentSong, libraryStatus, isPlaying }) => {
    return (

        <div className={`library ${libraryStatus ? "active-library" : ""}`}>

            <h2>Music Library</h2>
            <div className="library-songs">

                {songs.map((song) => (

                    <LibrarySong
                        key={song.id}
                        songs={songs}
                        currentSong={currentSong}
                        song={song}
                        audioRef={audioRef}
                        setCurrentSong={setCurrentSong}
                        isPlaying={isPlaying}
                        setIsPlaying={setIsPlaying} />

                ))}

            </div>
        </div>




    );
}

export default Library;