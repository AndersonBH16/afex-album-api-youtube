import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { VideoAlbum } from "./pages/VideoAlbum";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element = { <VideoAlbum /> }/>
                <Route path='/' element = { <VideoAlbum /> }/>
            </Routes>
        </BrowserRouter>        
    );
}

export default App