import styled from "styled-components"

import { Container } from "../container"

export const HeaderWrapper = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;

  & > ${Container} {
    padding: 1.0875rem 1.45rem;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
