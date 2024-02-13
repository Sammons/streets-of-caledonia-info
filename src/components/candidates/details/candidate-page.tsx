import * as React from "react"
import '../../../styles/global.css'
import { Link, type HeadFC, type PageProps, navigate } from "gatsby"
import styled from '@emotion/styled'
import { StaticImage } from "gatsby-plugin-image"
import { Colors, Spacing } from "../../../constants/constants"
import { Footer } from "../../../components/footer"
import { BackIcon } from "../../../components/back-icon"


const TopOfPageHeader = (props: { name: string }) => {
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
          {props.name}
        </h1>
      </div>
    </div>
  </>
}

const CandidateListItemStyled = styled.li(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '275px',
  height: '275px',
  padding: Spacing.S2,
  border: `0.5px dashed ${Colors.DarkerGrey}`,
  margin: 0,
  '& img': {
    borderRadius: '0.3em'
  }
}))

const CandidateListItem = (props: React.PropsWithChildren<{ name: string }>) => {
  return <CandidateListItemStyled>
    {props.children}
    <h2 style={{ marginTop: Spacing.S1 }}>{props.name}</h2>
  </CandidateListItemStyled>
}


const CandidateCard = (props: { name: string, staticImage: React.ReactElement }) => {
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
        <CandidateListItem name={props.name}>
          {props.staticImage}
        </CandidateListItem>
      </ul>
    </div>
  </>
}

export const CandidatePage = (props: {
  name: string,
  image: React.ReactElement,
  edu: string,
  background: string,
  comments: string
}) => {
  return <>
    <BackIcon />
    <TopOfPageHeader name={props.name} />
    <h2 style={{ textAlign: 'center', fontStyle: 'italic' }}>
      Details are from the candidate mail packet. *
    </h2>
    <CandidateCard name={props.name} staticImage={props.image} />
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: Spacing.S3, padding: Spacing.S2 }}>
    {props.edu && <> <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>Education</h2>
        <div style={{ margin: Spacing.S2, fontSize: '120%', maxWidth: '600px' }}>
          <span>
            {props.edu}
          </span>
        </div>
      </>}
      {props.background && <> <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>Personal background and experience</h2>
        <div style={{ margin: Spacing.S2, fontSize: '120%', maxWidth: '600px' }}>
          <span>
            {props.background}
          </span>
        </div>
      </>}
      <h2 style={{ textAlign: 'center', fontWeight: 'bold', margin: Spacing.S1 }}>Comments about board candidacy</h2>
      <div style={{ margin: Spacing.S2, fontSize: '120%', maxWidth: '600px' }}>
        <span>
          {props.comments}
        </span>
      </div>
    </div>
    <div style={{ textAlign: 'center', fontStyle: 'italic', padding: Spacing.S2, margin: Spacing.S3, height: '75px' }}>
      <span >
        * Please reach out to <a href="mailto:ben+socweblink@sammons.io">Ben</a> if you are a candidate and want to customize your details.
      </span>
    </div>
    <Footer />
  </>
}