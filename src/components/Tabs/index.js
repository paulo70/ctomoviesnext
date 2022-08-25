import React, { useState, useEffect, useContext } from "react";
import { getMoviesPerWeek } from "../../services/requests";
import { Tabs, Tab, Content } from "./style";

import Title from '../Title'
import ListMovies from '../ListMovies'

const TabContent = ({ data }) => {
  const [active, setActive] = useState(0);
  const [weekMovies, setWeekMovies] = useState([])

  const handleClick = e => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }

    if (index === 1) {
      handleMovies()
    }
  };

  const handleMovies = async () => {
    try {
      const reponse = await getMoviesPerWeek()
      const result = reponse.data.results
      setWeekMovies(result)
    } catch (error) {
      return error
    }
  }

  useEffect(() => {
    if (active === 1) {
      handleMovies()
    }
  }, [active])

  return (
    <>
      <Title>Escolha seu filme para semana ou diário</Title>
      <Tabs>
        <Tab onClick={handleClick} active={active === 0} id={0}>
          Filmes por dia
        </Tab>

        <Tab onClick={handleClick} active={active === 1} id={1}>
          Filmes por semana
        </Tab>
      </Tabs>
      <>
        <Content active={active === 0}>
          {data.results.map(movies => (
            <ListMovies {...movies} key={movies.id} />
          ))}
        </Content>
      </>

      <>
        <Content active={active === 1}>
          {weekMovies?.map(movies => (
            <ListMovies {...movies} key={movies?.id} />
          ))}
        </Content>
      </>
    </>
  )
}

export default TabContent
