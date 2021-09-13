import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { faWater } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
    return (
        <nav className={libraryStatus ? "moved" : ""}>
            <h1 >Waves <FontAwesomeIcon icon={faWater} /></h1>

            <button onClick={() => setLibraryStatus(!libraryStatus)} >
                Library
                <FontAwesomeIcon icon={faMusic} />

            </button>
        </nav >



    );
}

export default Nav;