import * as React from "react"
import { Link, type HeadFC, type PageProps, navigate } from "gatsby"
import styled from '@emotion/styled'
import { StaticImage } from "gatsby-plugin-image"
import '../styles/global.css'
import { Footer } from "../components/footer"
import { Colors, Spacing } from "../constants/constants"


const HeaderImageContainer = styled.div(() => ({
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  width: '100%'
}))

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

const BelowHeaderCardContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  flexGrow: '1',
  margin: Spacing.S2
}))

const BelowHeaderCardElementContainer = styled.div(() => ({
  borderRadius: '0.375em',
  border: `0.5px solid ${Colors.Grey}`,
  boxShadow: `${Colors.DarkerGrey} 0px 3px 6px 0px`,
  padding: Spacing.S3,
  margin: Spacing.S1,
  marginLeft: Spacing.S2,
  marginRight: Spacing.S2,
  flexBasis: '100%',
  maxWidth: 'min(30%, 300px)',
  ':hover': {
    borderColor: Colors.Black,
    cursor: 'pointer'
  },
  display: 'flex',
  flexDirection: 'column',
  flexFlow: 'column-reverse',
}))

const BelowHeaderCard = (props: {
  linkTo: string,
  header: string,
  icon: React.ReactElement,

}) => {
  return <BelowHeaderCardElementContainer onClick={() => navigate(props.linkTo)}>
    <h2 style={{width: '100%', textAlign: 'center', paddingTop: Spacing.S2}}>{props.header}</h2>
    <div style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-start',
    }}>
      <div style={{ width: '40px' }}>
        {props.icon}
      </div>
    </div>
  </BelowHeaderCardElementContainer>
}

const BelowHeaderSection = () => {
  return <>
    <BelowHeaderCardContainer>
      <BelowHeaderCard linkTo="/candidates" header={'HOA board candidates'} icon={<StaticImage src="../images/people.svg" alt="image of a group of people" />} />
      <BelowHeaderCard linkTo="/hoa-rule-helper" header={'HOA rule helper'} icon={<StaticImage src="../images/checklist.svg" alt="checklist" />} />
      <BelowHeaderCard linkTo="/faq" header={'Questions & Answers'} icon={<StaticImage src="../images/question.svg" alt="question mark" />} />
    </BelowHeaderCardContainer>
  </>
}

const ButtonStyledLink = styled('a')(() => ({
  backgroundColor: Colors.Green,
  color: Colors.LighterGrey,
  fontWeight: 'bold',
  fontSize: '120%',
  border: `1px solid ${Colors.LighterGrey}`,
  borderRadius: '0.375em',
  width: 'fit-content',
  textAlign: 'center',
  padding: Spacing.S2,
  textDecoration: 'none',
  ':hover': {
    cursor: 'pointer'
  },
  ':active': {
    opacity: '90%'
  },
  ':disabled': {
    opacity: '50%'
  }
}))

const LandingPage: React.FC<PageProps> = () => {
  return <>
    <FullWidthHeader />
    {/* <BelowHeaderCardContainer>
      <h2 color={Colors.DarkerGrey} style={{ fontStyle: 'italic', marginTop: Spacing.S2 }}>{'Site under construction, links may not work'}</h2>
    </BelowHeaderCardContainer> */}
    <BelowHeaderCardContainer>
      <h2><b>Please vote!</b> fill your <a href="BallotAndProxy.pdf">Ballot & Proxy</a> and email or fax to <a href="mailto:helpdesk@omni-management.com">helpdesk@omni-management.com</a></h2>
    </BelowHeaderCardContainer>
    <BelowHeaderSection />
    <BelowHeaderCardContainer>
      <ButtonStyledLink href="https://docs.google.com/forms/d/e/1FAIpQLSeallwAB4I-KIIcgm_SLR_jxCHb9FiN07h6lmlfZW1l5WksKA/viewform?usp=sf_link">Signup for updates</ButtonStyledLink> 
    </BelowHeaderCardContainer>
    <Footer/>
  </>
}

export default LandingPage;

export const Head: HeadFC = () => <>
  <title>Streets of Caledonia Community Info</title>
  <meta name="description" content="Landing page with links to community resources" />
  <meta name="image" content="/soc.jpg" />
  {/* House Icon */}
  <link rel="icon" href={`data:image/svg+xml,<svg viewBox="0 0 16 16" height="48" width="48" focusable="false" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="css-1eamic5 ex0cdmw0"><title>HouseDoor icon</title><path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"></path></svg>`} />
</>
