import React, { useState, useEffect, useContext } from "react";
import { Tabs, Tab, Content } from "./style";

import Title from '../Title'

const TabContent = () => {
  const [active, setActive] = useState(0);

  const handleClick = e => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };

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
    </>
  )
}

export default TabContent
