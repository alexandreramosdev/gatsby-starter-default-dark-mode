import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { Container } from "../container"
import { Wrapper, HeaderWrapper } from "./styles"

const Header = ({ siteTitle }) => {
  let websiteTheme
  if (typeof window !== "undefined") {
    websiteTheme = window.__theme
  }

  const [theme, setTheme] = useState(websiteTheme)

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => {
      setTheme(window.__theme)
    }
  }, [])

  const themeToggle = () => {
    window.__setPreferredTheme(websiteTheme === "dark" ? "light" : "dark")
  }

  return (
    <HeaderWrapper>
      <Container>
        <Wrapper>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: "var(--textTitleInverse)",
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
          <button onClick={themeToggle}>
            {theme === "dark" ? "light" : "dark"}
          </button>
        </Wrapper>
      </Container>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
