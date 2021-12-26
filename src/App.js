import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import FirstDiv from './components/FirstDiv';
import Features from './components/Features';
import ViewportProvider from "./viewport/ViewportProvider";
import Advantages from './components/Advantages';
function App() {
    return (
        <>
         <ViewportProvider>
            <Navbar/>
            <FirstDiv/>
            <Advantages/>
            <Features/>
           
         </ViewportProvider>
        </>

    );
}

export default App;
