import { ContentHeader, Span } from "./style"
import Search from '../Search'

const Header = () => {
  return (
    <ContentHeader>
      <Span>
        movies cto
      </Span>
      <Search />
    </ContentHeader>
  )
}

export default Header
