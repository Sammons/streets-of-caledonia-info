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
// card can be
// rgba(140, 149, 159, 0.15) 0px 3px 6px 0px
// border radius 0.75 vs 0.375 vs 0.1875
// 8px padding (16 gap), 24 for containers




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
  top: '24px',
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
    padding: '8px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  }
))

const BelowHeaderCardContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  flexGrow: '1',
  padding: '8px'
}))

const BelowHeaderCardElementContainer = styled.div(() => ({
  borderRadius: '0.375em',
  border: `0.5px solid ${Colors.Grey}`,
  boxShadow: `${Colors.DarkerGrey} 0px 3px 6px 0px`,
  padding: '16px',
  margin: '16px',
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
    <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
    <div style={{width: '40px'}}>
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
      <BelowHeaderCard header={'View candidates for HOA Board'} icon={<StaticImage src="../images/people.svg" alt="image of a group of people"/>} />
      <BelowHeaderCard header={'Check the HOA rules'} icon={<StaticImage src="../images/checklist.svg" alt="checklist"/>} />
      <BelowHeaderCard header={'Frequently Asked Questions'} icon={<StaticImage src="../images/question.svg" alt="question mark"/>}/>
    </BelowHeaderCardContainer>
  </>
}

const IndexPage: React.FC<PageProps> = () => {
  return <>
    <FullWidthHeader />
    <BelowHeaderCardContainer>
      <h2 color={Colors.DarkerGrey} style={{fontStyle: 'italic', marginTop: '16px'}}>{'Site under construction, links may not work'}</h2>
    </BelowHeaderCardContainer>
    <BelowHeaderSection />
    <FooterContainer>
      This site does not use cookies &nbsp;| &nbsp;
      <a href="https://www.facebook.com/groups/485492819357906">Connect with other residents on Facebook</a> &nbsp;| &nbsp;
      <a href="https://github.com/Sammons/streets-of-caledonia-info/issues">Provide website feedback on GitHub</a>
    </FooterContainer>
  </>
}

export { IndexPage }

export const Head: HeadFC = () => <title>Streets of Caledonia Community</title>
