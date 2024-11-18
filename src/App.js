import ZipInputBar from './components/ZipInputBar/ZipInputBar.jsx'
import MapContainer from './components/MapContainer/MapContainer.jsx'
import { APIProvider } from '@vis.gl/react-google-maps'


const App = () => {


  return (
    <div id='app-container'>
      <APIProvider apiKey={process.env.REACT_APP_API_KEY} onLoad={() => console.log('Maps API has loaded.')}>
        <ZipInputBar />
        <MapContainer />
      </APIProvider>
    </div>
  );
}

export default App;
