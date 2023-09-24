import styles from './Geolocation.module.css'
import { useState, useEffect } from 'react'
import { GeolocationOpenStreetResponseData } from '../../types/geolocation'

const Geolocation = () => {
  const [data, setData] = useState<GeolocationOpenStreetResponseData | null>(null)

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async function (position) {
          const { latitude, longitude } = position.coords

          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
            )
            const data = await response.json()

            setData(data)
          } catch (error) {
            if (error instanceof Error) {
              console.error('Error getting geolocation: ' + error.message)
            }
          }
        },
        function (error) {
          console.error('Error getting geolocation: ' + error.message)
        }
      )
    } else {
      console.error('Geolocation is not supported by your browser')
    }
  }, [])

  if (!data) {
    return <p>Location unknown!</p>
  }

  return (
    <div className={styles.location_card}>
      <h4>
        {data.address.village}, {data.address.country}
      </h4>
    </div>
  )
}
export default Geolocation
