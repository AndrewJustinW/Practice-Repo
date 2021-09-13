// Importing Song.js and Player.js Components (Step 3)

import Song from "./components/Song"
import Player from "./components/Player"
import Library from "./components/Library"
import Nav from "./components/Nav"
import { useState, useRef } from 'react'

// Importing Util
import data from "./data"
// Import Styles
// import './styles/app.scss'


function App() {
  //State

  const [songs, setSongs] = useState(data()) // array of song objects.
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [libraryStatus, setLibraryStatus] = useState(false)
  //Ref
  const audioRef = useRef(null)



  return (
    <div className={`App ${libraryStatus ? 'library-active' : ""}`}>

      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />

      <Song currentSong={currentSong} libraryStatus={libraryStatus} />

      <Player
        libraryStatus={libraryStatus}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        songs={songs} />

      <Library
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        libraryStatus={libraryStatus}
        isPlaying={isPlaying}
      />
    </div>
  );
}

export default App;


// Steps taken to create: (future react projects template)

// =========== Beginning Steps ===========> *(rendering things to page)

// 1. Created Song component that contains the Album Art, Song Name, and Artist html(jsx)
// 2. Created Player Component that shows the what will be song progress bar, song time, and controls. (html)
// 3. Importing Song and Player Component into App.js
// 4. Installed Font Awesome for react from Font Awesome Website. 
// 5. Importing FontAwesomeIcons into Player Component > Rendering Play and Skip icons to Player component from Font Awesome.

//  ========== Styling Start =============>

// 6. Created _player.scss and _song.scss that will be imported into main app.scss file. (Called partials, like ejs templates imported)
// 7. Imported styles folder into app.js so that it effects all pages.
// 6. .song-container initial styling created in _song.scss
// 7. .player initial styling created in _player.scss
// 8. .time-control initial styling in _player.scss. (Mainly Spacing)
// 9.  input within .time-control styled in player.scss. (Mainly spacing)

// ------------------------------------- New Day ------------------------------------------------------------

// =========== App.JS Component ==========>

// 10. Downloaded data.js file from devEd github which returns an array of objects. Each object contains a song and it's details.
// 11. Imported data.js into app.js
// 12. Created a useState const for songs and setSongs with the state of data() [data() is just returning the array of objects from data.js component| data() is the component creation]
// 13. Created a useState const for currentSong which will hold the currently being played song.
// 14. Passed currentSong which holds the first song in the array to the Song.js component as a prop.

// =========== Song.JS Component ==========>

// 15. Added {currentSong} prop as a parameter to component creation in Song.js.
// 16. Added currentSong object details to the html so that it shows on page.. Example: (<h1>{currentSong.name}</h1>)

// =========== Styling ==============>

// 17. Added styles to songs rendered onto the page from the Song Component.. (song names, song authors, song image |  h2, h3, img)

// ------------------------------------- New Day ------------------------------------------------------------

// =========== Player.JS Component ==========>

// 18. Passed {currentSong} as a prop to Player.js and utilized the prop by adding it to Player.js function call parameter.
// 19. Created an audio tag at the bottom of Player.JS component and added the currentSongs audio source to it. (currentSong.audio) <-- audio property in data.js
// 20. Created a function called playSongHandler that will be called by the play icon when clicked to play a song.
// 21. Added an onClick event to the fontAwesome play icon on Player.js and set it to run the newly created {playSongHandler}
// 22. Imported useRef from react at the top of Player.JS so that we can target the audio tag the same way we would with the Dom. (document.querySelector('audio'))
//      - Since we are unable to use the DOM to select the audio tag while using React, this useRef function makes it possible using another way.
// 23. Created a const audioRef that equals useRef('null)
// 24. In the audio tag at the bottom we add a "ref=" attribute that is set to the newly created const audioRef (ref= audioRef)
// 25. In the playSongHandler function we console.log({audioRef}) which then shows that we have successfully targeted the play button with our onClick
// 26. Removed the console.log and changed it to audioRef.current.play() to actually play the song instead of console.logging the audio object.

// =========== App.JS Component ==========>

// 27. Created a const state isPlaying / setIsPlaying and set it equal to useState(false)
// 28. Passed isPlaying and setIsPlaying down as a prop to Player.JS

// =========== Player.JS Component ==========>

// 29. Added an if else statement to the playSongHandler to create play/pause functionality.
//    - in the if(isPlaying) statement we place audioRef.current.pause() and we change setIsPlaying to (!isPlaying)  
//    - which basically means if it is playing already when clicked change its state to its not playing or pause.
// 30. In the Else statement we place "audioRef.current.play()" because if its not playing when the button is clicked we want it to play.
//     -We also setIsPlaying to (!isPlaying) to basically toggle on/off depending on if its playing or not.
// 31. Didn't follow tutorial: Changed play icon into pause icon if isPlaying = true.

// ------------------------------------- New Day ------------------------------------------------------------

// =========== Player.JS Component ==========>

// 32. Created a const state songInfo/setSongInfo that holds the properties for each song.
// 33. Created a function called timeUpdateHandler that will change the time depending on the point in the song being played.
// 34. Used the onTimeUpdate audio tag attribute and set it to run the timeUpdateHandler function every time the song duration changes
// 35. We listen for the event object by adding e into the timeUpdateHandler's parameter and grab its currentTime and durations value and set it as consts. 
//    - Example: (e.target.currentTime) (e.target.duration) <-------------  keys of the event object 

// ------------------------------------- New Day ------------------------------------------------------------

// =========== Player.JS Component ==========>
// 36. Created a function that will format the duration in seconds/minutes that takes in time as a parameter getTime(time)
// 37. In the start time's place we call the function getTime and set songInfo.currentTime as an argument so that the currentTime (duration value) gets formatted.
// -    <p>{getTime(songInfo.currentTime)}</p>
// 38. In the end time's place we call the function getTime and set songInfo.duration as an argument so that it is also formatted in minutes/seconds
// -    <p>{getTime(songInfo.duration)}</p>
// 39. In the audio tag we add another attribute called "onLoadedMetadata" so that we can set it's initial end time as soon as it loads on the page.
//     - We set the onLoadedMetadata attriubte to onLoadedMetadata={timeUpdateHandler} which adds duration and currentTime as a property to the currently playing song's object.
// 40. We start adding functionality to  input ranger slider by adding more attributes to the input tag.
//    a. Added min attribute and set it to 0 (min={0})
//    b. Added max attribute and set it to (songInfo.duration)
//    c. Added value attribute and set it to (songInfo.currentTime)
// 41. Created a function called dragHandler which will set the functionality for actually operating the drag.
// 42. Added an onChange attribute to the input slider and set it to the newly created dragHandler function.
// 43. In the dragHandler function we use the setSongInfo state and grab its current state (everything already in the songInfo object)
//    -- Then we update the currentTIme property to whatver timestamp we drag the slider too using e.target.value.
// 44. In the dragHandler function we also grab the audio tag by targetting it's ref: audioRef and set it's currentTime to e.target.value to make it equivalent to the value of input slider.
//    == IMPORTANT: This is what actually makes  the input slider connected to the audio tag which is what is playing the music.

// ------------------------------------- New Day ------------------------------------------------------------

// =========== Library.JS Component ==========>

// 45. Created a component called Library that will be the list of songs to choose from.
// 46. Created another compoenent called LibrarySong that contains alot of the same data as the Song component.
// 47. Imported LibrarySong component into the Library component
// 48. Called the LibrarySong component in the div named library-song div on library.JS .

// =========== App.JS Component ==========>

// 49. Imported Library.js into App.Js
// 50. Called the Library component onto the page.
// 51. Passed down songs variable that contains the list of songs to the Library component as props.

// =========== Library.JS Component ==========>

// 52. Added songs to the the component paramets in Library.js to access the prop.
// 53. In the library-songs div on the LibrarySongs component we map through the array of songs objects. 
//    -  And for each song we render a new LibrarySong component and pass it the song (individual song details) as a prop.  songs.map(song=> { <LibrarySong song=song  }) 
//    -- (songs variable is just an array of objects which each songs details) 

// =========== LibrarySong.JS Component =======>

// 54. Added the song variable to the LibrarySong component parameter so that we can use it's properties.
// 55. Displayed song details in the library section. (song.cover, song.name, song.artist )

// =========== Styling ==============>

// 56. Added styling to _library.scss which controls styling for library components (h2,h3,h4,img, padding,  font sizes, etc.  )
// 57. Imported google font Laso.
// 58. Created a custom scrollbar from template website.
// 59. Hid bottom scrollbar for library component.

// =========== App.JS Component ==========>

//60. Send setCurrentSong as a prop to the Library component.

// =========== Library.JS Component ==========>
// 
// 61. Added setCurrentSong as a parameter to Library component creation and passed down setCurrentSong again to the LibrarySong component.
// 62. Also pass down the array of song objects and the individual song object to the LibrarySong component. [passed down songs={songs} and song={song}]

// =========== LibrarySong.JS Component =======>
// 63. Added setCurrentSong, song and songs props to LibrarySong parameter.
// 64. Added an onClick attribute to the library-song div and set it to selectSongHandler [onClick={selectSongHandler} ]
// 65. Created a function called selectSongHandler and setCurrentSong to whatever song was clicked on from the list of songs. [setCurrentSong(song)]

// =========== Player.JS Component ==========>
// 66. Cut the audioRef variable from Player component.

// =========== App.JS Component ==========>
// 67. Pasted the audioRef vaiable to App.js so that we can pass it back down to Player, Library and whatever component needs access to it. (STATE LIFTING)
//    -- (We needed to access audioRef in the Library and LibrarySong components but had no way to pass it down from the Player component, 
//    ---  so instead of creating it in the playerComponent, create it in the app component and pass it down to whichever component needs it.)
// 68. Passed audioRef down to Player and Library components and called them in the component parameters.

// =========== Library.JS Component ==========>
// 69. Passed audioRef down again to the LibrarySong component.

// =========== LibrarySong.JS Component =======>
// 70. Called the audioRef prop into the LibrarySong component's parameter.
// 71. Used the audiRef prop to set audioRef.current.play and audioRef.current.currentTime to 0.
//    -- Set currentTime to 0 to make sure the song restarts from the beginning if clicked a 2nd time while already playing.

// =========== Player.JS Component ==========>
// 72. Created autoHandler function 
// 73. Added onLoadedData attriubte to audio tag and set it to the autoHandler function [onLoadedData={autoHandler}]
//    -- This makes it so that when the audiotag is newly loaded or activated it will be ready to autoPlay the song.
// 74. In the autoHandler function we create a promise that will wait for the selected songs audio to load fully and play the audio only ...
//    -- if a song was playing [isPlaying(true)] [So it basically waits for the song to load up and determines on whether to play it or not depending on the previous state of isPlaying]

// ------------------------------------- New Day ------------------------------------------------------------

// =========== Styling ==============>
// 75. Added a .selected class to _library.scss and set it's background to dark purple..

// =========== LibrarySong.JS Component =======>
// 76. Added a ternary statement to library-song div to set it's class to selected if it is the currently being played song.
//    -- This will change its styling depending on if it's "selected" or not.

// =========== Nav.JS Component ============>
// 77. We create a Nav component which holds an h1 for title of the appname and a button which will be used to toggle library visibility

// =========== STYLING ====================> _library.scss
// 78. Hid the library component from the page by adding a negative transform and setting opacity to 0, Also an ease translation animation.
// 79. Styled the Nav componenet button and h1
// 80. Added .active-library as a class which undoes the transform and opacity back to normal.

// ============ App.JS Component ====================>
// 81. Added a new const useState for libraryStatus and setLibraryStatus.
// 82. Added libraryStatus and setLibraryStatus down to Nav component as props.

// =========== Nav.JS Component ============>
// 83. Added an onClick to the library button that when clicked will setLibraryStatus to true. 

// =========== Library.JS Component ==========>
// 85. Added a dynamic class to library div of "active-library" if libraryStatus is true.
//    -- When libraryStatus is true, active-library will activate and show the library. When it's not it will hide the library.

// =========== Styling: app.scss =============>
// 85. Created a class of .moved which moves everything to the right by 10%

// =========== Nav.JS Component ============>
// 86. Added a class of moved to nav element depending on if libraryStatus is true or not.

// ============ Misc. ======================>
// 87. Added a class of moved to multiple elemnts (player, artwork, nav) 
//    -- This is so that when the library opens up (libraryStatus = true) >> Then everything moves to the right along with it.

// ============= Player.JS Component ================>
// 88. Created a function named skipTrackHandler that takes in direction as a parameter. Handles the skip buttons functionality
// 89. Inside skipTrackHandler we find the currentSongs index by it's id and store it as a variable named currentIndex
// 90. Inside skipTrackHandler depending on direction we setCurrentSong to currentIndex + 1 for forward and currentIndex -1 for backward.
// 91. Forward  and BackWard FontAwesomeIcons: Added an onClick that will run skipTrackHandler and it's direction. [ onClick={()=> skipTrackHandler(skip-forward)}]

// ------------------------------------- New Day ------------------------------------------------------------

// =========== Styling: _player.scss & Player.JS =============>  (input slider styling mainly)
// 92. input range doesn't really allow for styling/customization, so we basically removed it with the webkit: none and started creating a custom style.
// 93. Watch https://developedbyed.com/courses/1203573/lectures/26878653 for explaination on slider, It was alot and kind of annoying.
// --  (Basically we created 2 divs, 1 that hides it self as the songPercentage increases, Then we grabbed colors from the song data and added them to the styles.)

// ============= Player.JS Component ================>
// 94. Inside the audio tag we add an onEnded attribute and set it to songEndHandler. [onEnded={songEndHandler}]
// 95. 
//    A. We create the songEndHandler function and find the currentSongs position in the array of songs by comparing it's id.
//    B. Then we play the next song by changing setCurrentSong to +1 of whatever currentSong was before. 
// 96. Add a random and loop icon to the player component from FontAwesome
// 97. Created a state const for the shuffle icon.
// 97. Added randomization functionality to the skipforward icon when shuffle is active.
