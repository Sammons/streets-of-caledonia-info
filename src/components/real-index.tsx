import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import styled from '@emotion/styled'
import { StaticImage } from "gatsby-plugin-image"
import '../styles/global.css'


const Colors = {
  Eggshell: '#F4F4F4',
  Black: '#2E282A',
  Green: '#1F883D',
  Grey: '#D0D7DE',
  DarkerGrey: '#8C959F',
  LighterGrey: '#F6F6F6'
}

const Spacing = {
  S1: 'var(--space-one)',
  S2: 'var(--space-two)',
  S3: 'var(--space-three)',
  S4: 'calc(var(--space-three) + var(--space-one))'
}



const HeaderImageContainer = styled.div(() => ({
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  width: '100%'
}))

// const HeaderFontSize = ()

const HorizontallyCenteredHeaderText = styled.h1((p) => ({
  position: 'absolute',
  // top: '18%',
  top: Spacing.S3,
  left: '50%',
  width: '100%',
  transform: 'translate(-50%, 0)',
  textAlign: 'center',
  color: Colors.Eggshell
}))

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

const BelowHeaderCardContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  flexGrow: '1',
  padding: Spacing.S1
}))

const BelowHeaderCardElementContainer = styled.div(() => ({
  borderRadius: '0.375em',
  border: `0.5px solid ${Colors.Grey}`,
  boxShadow: `${Colors.DarkerGrey} 0px 3px 6px 0px`,
  padding: Spacing.S2,
  margin: Spacing.S2,
  width: '30%',
  minHeight: '200px',
  ':hover': {
    borderColor: Colors.Black,
    cursor: 'pointer'
  },
  display: 'flex',
  flexDirection: 'column'
}))

const BelowHeaderCard = (props: {
  header: string,
  icon: React.ReactElement,

}) => {
  return <BelowHeaderCardElementContainer>
    <h2>{props.header}</h2>
    <div style={{
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{ width: '40px' }}>
        {props.icon}
      </div>
    </div>
  </BelowHeaderCardElementContainer>
}

const FullWidthHeader = () => {
  return <>
    <div style={{ position: 'relative' }}>
      <HeaderImageContainer>
        <StaticImage style={{
          width: '100%',
          justifySelf: 'center'
        }} src="../images/soc.jpg" alt="A picture of the entrance to Streets of Caledonia" />
        <HorizontallyCenteredHeaderText>
          {'Streets of Caledonia Community'}
        </HorizontallyCenteredHeaderText>
      </HeaderImageContainer>
    </div>
  </>
}



const BelowHeaderSection = () => {
  return <>
    <BelowHeaderCardContainer>
      <BelowHeaderCard header={'HOA board candidates'} icon={<StaticImage src="../images/people.svg" alt="image of a group of people" />} />
      <BelowHeaderCard header={'Check the HOA rules'} icon={<StaticImage src="../images/checklist.svg" alt="checklist" />} />
      <BelowHeaderCard header={'Questions & Answers'} icon={<StaticImage src="../images/question.svg" alt="question mark" />} />
    </BelowHeaderCardContainer>
  </>
}

const IndexPage: React.FC<PageProps> = () => {
  return <>
    <FullWidthHeader />
    <BelowHeaderCardContainer>
      <h2 color={Colors.DarkerGrey} style={{ fontStyle: 'italic', marginTop: Spacing.S2 }}>{'Site under construction, links may not work'}</h2>
    </BelowHeaderCardContainer>
    <BelowHeaderSection />
    <FooterContainer>
      <FooterElement>
        This site does not use cookies
      </FooterElement>
      <FooterSeparater/>
      <FooterElement>
        <a href="https://www.facebook.com/groups/485492819357906">Connect with other residents on Facebook</a>
      </FooterElement>
      <FooterSeparater/>
      <FooterElement>
        <a href="https://github.com/Sammons/streets-of-caledonia-info/issues">Provide website feedback on GitHub</a>
      </FooterElement>
    </FooterContainer>
  </>
}

export { IndexPage }

export const Head: HeadFC = () => <title>Streets of Caledonia Community</title>
