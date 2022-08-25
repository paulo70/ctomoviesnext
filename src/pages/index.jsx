import axios from 'axios'
import Container from '../components/Container'
import Header from "../components/Header"
import Tab from '../components/Tabs'

import { getMoviesPerDay } from '../services/requests'

export default function Home({ data }) {
  return (
    <>
      <Header />
      <Container>
        <Tab data={data} />
      </Container>
    </>
  )
}



export const getStaticProps = async () => {

  try {
    const { data } = await getMoviesPerDay()
    return {
      props: {
        data,
      },
    }
  } catch (error) {
    return {
      props: {
        data: {}
      }
    }
  }
}


