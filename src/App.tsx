import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Subscribe from "./components/Subscribe/Subscribe";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__block">
      <Main />
      <Subscribe />
      </div>

      {/* decorators with absolute position */}
      <img src="img/ellipse1.svg" alt='' className="ellipse1" />
      <img src="img/ellipse2.svg" alt='' className="ellipse2" />
      <img src="img/ellipse3.svg" alt='' className="ellipse3" />
      <img src="img/footer.svg" alt='' className="footer" />
      <img src="img/javascript.svg" alt="" className="javascript hide" />
      <img src="img/html.svg" alt="" className="html hide" />
      <img src="img/css.svg" alt="" className="css hide" />
      <img src="img/sublime.svg" alt="" className="sublime hide" />
      <img src="img/vsc.svg" alt="" className="vsc hide" />
      <span className="ellipse4 hide" />
      <span className="ellipse5 hide" />
      <span className="ellipse6 hide" />
      <span className="ellipse7 hide" />
      <span className="ellipse8 hide" />
    </div>
  );
}

export default App;
