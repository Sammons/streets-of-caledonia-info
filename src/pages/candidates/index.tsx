import * as React from "react"
import '../../styles/global.css'
import { Link, type HeadFC, type PageProps } from "gatsby"
import styled from '@emotion/styled'
import { StaticImage } from "gatsby-plugin-image"
import { Colors, Spacing } from "../../constants/constants"
import { Footer } from "../../components/footer"
import { HomeIcon } from "../../components/home-icon"



const TopOfPageHeader = () => {
  return <>
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'center',
        alignItems: 'center',
        width: '100%',
        padding: Spacing.S2,
        margin: Spacing.S3,
        borderBottom: `1px solid ${Colors.DarkerGrey}`,
      }}>
        <h1 color={Colors.DarkerGrey} style={{ margin: Spacing.S2 }}>
          {'HOA Board Candidates'}
        </h1>
        <h2 style={{ color: Colors.MoreDarkerGrey, textAlign: 'center' }}>
          {'The first resident election is coming up! Vote by March 1 or appear at the special meeting on March 4th 2024.'}
          <br /><br />
          {/* TODO: build this page {'Omni is accepting email submissions. View more details in'} <Link to="ways-to-vote">ways to vote</Link> */}
        </h2>
      </div>
    </div>
  </>
}

const CandidateListItem = styled.li(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '275px',
  height: '275px',
  padding: Spacing.S2,
  border: `0.5px dashed ${Colors.DarkerGrey}`,
  margin: 0,
  ':hover': {
    cursor: 'pointer',
    background: Colors.Grey
  },
  '& img': {
    borderRadius: '0.3em'
  }
}))


const Candidates = () => {
  return <>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: Spacing.S3
    }}>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
        <CandidateListItem>
          <StaticImage src={'../../images/photos-of-candidates/sammons.png'} alt={`Photo of Ben Sammons`} width={128} aspectRatio={1} />
          <h2 style={{ marginTop: Spacing.S1 }}>{'Ben Sammons'}</h2>
        </CandidateListItem>

        <CandidateListItem>
          <StaticImage src={'../../images/placeholder-photo.svg'} alt={`Placeholder Photo`} width={128} aspectRatio={1} />
          <h2 style={{ marginTop: Spacing.S1 }}>{'Eric Tillotson'}</h2>
        </CandidateListItem>

        <CandidateListItem>
          <StaticImage src={'../../images/placeholder-photo.svg'} alt={`Placeholder Photo`} width={128} aspectRatio={1} />
          <h2 style={{ marginTop: Spacing.S1 }}>{'Phanindra Phanakanti'}</h2>
        </CandidateListItem>

        <CandidateListItem>
          <StaticImage src={'../../images/placeholder-photo.svg'} alt={`Placeholder Photo`} width={128} aspectRatio={1} />
          <h2 style={{ marginTop: Spacing.S1 }}>{'Matthew Markillie'}</h2>
        </CandidateListItem>

        <CandidateListItem>
          <StaticImage src={'../../images/placeholder-photo.svg'} alt={`Placeholder Photo`} width={128} aspectRatio={1} />
          <h2 style={{ marginTop: Spacing.S1 }}>{'Sanjay Kumar Patel'}</h2>
        </CandidateListItem>

        <CandidateListItem>
          <StaticImage src={'../../images/placeholder-photo.svg'} alt={`Placeholder Photo`} width={128} aspectRatio={1} />
          <h2 style={{ marginTop: Spacing.S1 }}>{'Zack Summers'}</h2>
        </CandidateListItem>

        <CandidateListItem>
          <StaticImage src={'../../images/placeholder-photo.svg'} alt={`Placeholder Photo`} width={128} aspectRatio={1} />
          <h2 style={{ marginTop: Spacing.S1 }}>{'Louis Terbrock'}</h2>
        </CandidateListItem>
      </ul>
    </div>
  </>
}

const LandingPage: React.FC<PageProps> = () => {
  return <>
    <HomeIcon/>
    <TopOfPageHeader />
    <h2 style={{textAlign: 'center', fontStyle: 'italic'}}>Tap on a candidate to see their info</h2>
    <Candidates />
    <Footer />
  </>
}

export default LandingPage;
export const Head: HeadFC = () => <>
  <title>Streets of Caledonia Community Board Candidates</title>
  <meta name="description" content="Index page with links to upcoming HOA candidates" />
  <meta name="image" content="/soc.jpg" />
</>
