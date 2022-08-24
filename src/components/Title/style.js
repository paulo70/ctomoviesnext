import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  justify-content: left;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
`

export const Paragraph = styled.p`
  text-transform: uppercase;
  color: #0054FF;
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 10px;

  @media(max-width: 768px){
    font-size: 14px;
  }
`
