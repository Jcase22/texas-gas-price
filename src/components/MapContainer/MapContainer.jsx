import { Loader } from "@googlemaps/js-api-loader"
import {APIProvider} from '@vis.gl/react-google-maps'
import {useEffect} from 'react'

const MapContainer = () => {

  useEffect(() => {
    console.log(process.env.REACT_APP_API_KEY)
  }, [])


  return (
    <APIProvider apiKey={process.env.REACT_APP_API_KEY} onLoad={() => console.log('Maps API has loaded.')}>
      <div>
        <div>this is the map container</div>
      </div>
    </APIProvider>
  )
}

export default MapContainer