export interface GeolocationOpenStreetResponseData {
  address: {
    'ISO3166-2-lvl4': string
    country: string
    country_code: string
    county: string
    hamlet: string
    municipality: string
    postcode: string
    state: string
    village: string
  }
  addresstype: string
  boundingbox: string[]
  category: string
  display_name: string
  importance: number
  lat: string
  licence: string
  lon: string
  name: string | null
  osm_id: number
  osm_type: string
  place_id: number
  place_rank: number
  type: string
}
