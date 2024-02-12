import * as React from "react"
import '../../styles/global.css'
import { Link, type HeadFC, type PageProps } from "gatsby"
import { Colors, Spacing } from "../../constants/constants"
import { Footer, GitHubLink } from "../../components/footer"
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
          {'FAQ'}
        </h1>
        <h2 style={{ color: Colors.MoreDarkerGrey, textAlign: 'center' }}>
          {'Frequently Asked Questions'}
          <br /><br />
        </h2>
      </div>
    </div>
  </>
}

const QuestionAndAnswer = (props: { q: string, a: string | React.ReactElement }) => {
  return <>
    <h2 style={{marginTop: Spacing.S2, marginBottom: Spacing.S2}}>{props.q}</h2>
    <h3 style={{marginBottom: Spacing.S3, paddingLeft: '2px' }}>&nbsp;&nbsp;&nbsp;&nbsp;A: {props.a}</h3>
  </>
}

const LandingPage: React.FC<PageProps> = () => {
  const qas = [
    {
      q: 'Is this website affiliated with Omni?', a: <>
        No. It is maintained independently by interested residents. Feel free to join as a contributor on <a href={GitHubLink}>GitHub</a>
      </>
    },
    {
      q: 'I forgot where the link to Omni is?',
      a: <>
      You can login <a href="https://frontsteps.cloud/CaliberWeb2_OmniManagementGroup#!/">here</a>
      </>
    },
    {
      q: 'I want to make a complaint, who do I talk to?',
      a: <>
      You should contact Omni <a href="https://www.omni-management.com/contact-us/">here</a>
      </>
    }
  ] as const
  return <>
    <HomeIcon />
    <TopOfPageHeader />
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: Spacing.S2 }}>
      <ol>
        {
          qas.map((props, idx) => <li><QuestionAndAnswer {...props} q={`${idx + 1}. ${props.q}`} /></li>)
        }
      </ol>
    </div>
    <br />
    <Footer />
  </>
}

export default LandingPage;
export const Head: HeadFC = () => <>
  <title>Streets of Caledonia Community FAQ</title>
  <meta name="description" content="Index page with FAQ" />
  <meta name="image" content="/soc.jpg" />
</>
