import { HashRouter, Route, } from "react-router-dom";
import PracticeRepoHome from './components/PracticeRepoHome';
import Waves from './apps/waves/src/App'
import BookListApp from "./apps/learning-context-api/src/App"
import { useEffect } from "react";

function App() {


  useEffect(() => {
    var head = document.head;
    var link = document.getElementById('style-changer')

    if (window.location.href.indexOf('waves') !== -1) {
      link.href = './stylings/waves/app.css';
      head.appendChild(link);

    } else if (window.location.href.indexOf('booklist') !== -1) {

      link.href = './stylings/booklist-app/app.css';
      head.appendChild(link);
    }

  }, [])



  return (
    <div >
      <HashRouter basename="/">

        <Route exact path="/">
          <PracticeRepoHome />
        </Route>

        <Route path="/waves">
          <Waves />
        </Route>

        <Route path="/booklist">
          <BookListApp />
        </Route>

      </HashRouter>
    </div>
  );
}

export default App;
