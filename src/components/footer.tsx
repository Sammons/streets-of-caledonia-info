import '../styles/global.css'
import * as React from "react"
import styled from '@emotion/styled'
import { Colors, Spacing } from "../constants/constants"

const FooterContainer = styled.div(() => (
  {
    position: 'fixed',
    border: `1px solid ${Colors.Grey}`,
    bottom: '0px',
    background: '#F1F1F1',
    padding: Spacing.S1,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
))

const FooterElement = styled.span(() => ({
  padding: Spacing.S1,
}))

const FooterSeparater = styled.div(() => ({

  height: Spacing.S4,
  border: `1px solid ${Colors.Grey}`,
  flexGrow: 1,
  maxWidth: '1px'
}))

export const GitHubLink = 'https://github.com/Sammons/streets-of-caledonia-info';

export const Footer = () => <FooterContainer>
  <FooterElement>
    This site does not use cookies
  </FooterElement>
  <FooterSeparater />
  <FooterElement>
    <a href="https://www.facebook.com/groups/485492819357906">Connect with other residents on Facebook</a>
  </FooterElement>
  <FooterSeparater />
  <FooterElement>
    <a href={`${GitHubLink}/issues`}>Provide website feedback on GitHub</a>
  </FooterElement>
</FooterContainer>
