import axios from 'axios'
import { Country } from 'interfaces/Country'
import { COUNTRY_API_URL } from 'utils/config'

export const getAll = async (): Promise<Country[]> => {
  const response = await axios.get(COUNTRY_API_URL)
  return response.data as Country[]
}
