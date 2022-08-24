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



export async function getStaticProps() {
  const res = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=e9da1b9b1bf2935bf963f9c98fd51e01')
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}
