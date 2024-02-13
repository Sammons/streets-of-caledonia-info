import '../styles/global.css'
import * as React from "react"
import styled from '@emotion/styled'
import { Colors, Spacing } from "../constants/constants"
import { StaticImage } from 'gatsby-plugin-image'
import { navigate } from 'gatsby-link'

const BackButton = styled.div(() => ({
  position: 'fixed',
  top: Spacing.S1,
  left: Spacing.S1,
  // transform: 'translate(0, 50%)'
}))

const BackButtonHoverContainer = styled.div(() => ({
  // width: '100%',
  // height: '100%',
  maxWidth: Spacing.S4,
  padding: Spacing.S4,
  ':hover': {
    cursor: 'pointer',
  }
}))

export const HomeIcon = () => <BackButton onClick={() => navigate("/")}>
  <BackButtonHoverContainer >
    <StaticImage style={{width: `calc(2*${Spacing.S4})`, height: `calc(2*${Spacing.S4})`}} src='../images/house-icon.svg' alt='Go home' />
  </BackButtonHoverContainer>
</BackButton>