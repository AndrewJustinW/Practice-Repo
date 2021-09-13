const TrackList = ({ song }) => {
    return (
        <div className="track-list-song">

            <img classNmae="track-list-art" src={song.cover} alt="Cover Art" />

            <div>
                <h5>{song.name}</h5>
                <h6>{song.artist}</h6>
            </div>

        </div>

    );
}

export default TrackList;