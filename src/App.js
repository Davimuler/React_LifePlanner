import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/ContentBar/NavBar/NavBar";
import MainBar from "./Components/ContentBar/MainBar/MainBar";
import ContentBar from "./Components/ContentBar/ContentBar";
import Router from "./Components/ContentBar/Router";

function App() {
    return (
        <div className='App_Wrapper'>
           <div className='HeaderBar'><Header/></div>
            <div className='Content'>
                <Router/>
            </div>
            {/*<div className='MainBar'>*/}
            {/*   <MainBar/>*/}
            {/*</div>*/}
            {/*<div className='NavBar'>*/}
            {/*    <NavBar/>*/}
            {/*</div>*/}
        </div>
    );
}

export default App;
