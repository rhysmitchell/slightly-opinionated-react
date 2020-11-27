import React, { useState, useEffect } from 'react'
import { countryService } from 'services/Country'
import { Country } from 'interfaces/Country'
import { Row, Col, Table } from 'react-bootstrap'

const Countries: React.FC = (): JSX.Element => {
  const [countries, setCountries] = useState<Country[]>([])

  useEffect(() => {
    const getCountriesFromApi = async (): Promise<void> => {
      const countriesFromApi: Country[] = await countryService.getAll()
      setCountries(countriesFromApi)
    }

    getCountriesFromApi()
  }, [])

  return (
    <>
      <Row>
        <Col xs={12}>
          <h1>Countries</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Table striped hover>
            <tbody>
              <tr>
                <th>Country</th>
                <th>Region</th>
              </tr>
              {countries.map(country => (
                <tr key={country.name}>
                  <td>{country.name}</td>
                  <td>{country.region}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  )
}

export default Countries
