import '../styles/global.css'
import * as React from "react"
import styled from '@emotion/styled'
import { Colors, Spacing } from "../constants/constants"
import { StaticImage } from 'gatsby-plugin-image'
import { navigate } from 'gatsby-link'

const BackButton = styled.div(() => ({
  position: 'fixed',
  top: Spacing.S2,
  left: '0px',
}))

const BackButtonHoverContainer = styled.div(() => ({
  maxWidth: Spacing.S4,
  padding: Spacing.S4,
  ':hover': {
    cursor: 'pointer',
  }
}))

export const BackIcon = (props: {to?: string}) => <BackButton onClick={() => props.to ? navigate(props.to) : navigate(-1)}>
  <BackButtonHoverContainer >
    <StaticImage style={{width: `calc(2*${Spacing.S4})`, height: `calc(2*${Spacing.S4})`}} src='../images/arrow-back.svg' alt='Go home' />
  </BackButtonHoverContainer>
</BackButton>