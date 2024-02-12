import * as React from "react"
import '../../styles/global.css'
import { Link, type HeadFC, type PageProps } from "gatsby"
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
          {'Frequently Asked Questions'}
        </h1>
        <h2 style={{ color: Colors.MoreDarkerGrey, textAlign: 'center' }}>
          {'...'}
          <br /><br />
        </h2>
      </div>
    </div>
  </>
}


const LandingPage: React.FC<PageProps> = () => {
  return <>
    <HomeIcon/>
    <TopOfPageHeader />
    <h2 style={{textAlign: 'center', fontStyle: 'italic'}}>
      Under construction
    </h2>
    <br/>
    <Footer />
  </>
}

export default LandingPage;
export const Head: HeadFC = () => <>
  <title>Streets of Caledonia Community Board Candidates</title>
  <meta name="description" content="Index page with links to upcoming HOA candidates" />
  <meta name="image" content="/soc.jpg" />
</>
