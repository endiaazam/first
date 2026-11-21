import './index.css';
import Gamepage from './gamep';
import Musicpage from './musicp';
import Applicationpage from './appp';
import Videopage from './videop';
import Homepage from './homep';

function MainPage ({ activePage}) {
    return(
        <div className='flex'>
            <div id='main'>
                <div id='head'>
                    <h1>falmo</h1>
                    {activePage ==="home" && <h1>home</h1>}
                    {activePage ==="games" && <h1>games</h1>}
                    {activePage === "applications" && <h1>applications</h1>}
                    {activePage ==="videos" && <h1>videos</h1>}
                    {activePage ==="musics" && <h1>musics</h1>}
                </div>
                {activePage === "home" && <Homepage />}
                {activePage === "games" && <Gamepage />}
                {activePage === "videos" && <Videopage />}
                {activePage === "applications" && <Applicationpage />}
                {activePage === "musics" && <Musicpage />}
            </div>
        </div>
    )
}

export default MainPage;