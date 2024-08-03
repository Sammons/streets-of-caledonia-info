import * as React from "react"
import '../../styles/global.css'
import { Link, type HeadFC, type PageProps } from "gatsby"
import { Colors, Spacing } from "../../constants/constants"
import { Footer, GitHubLink } from "../../components/footer"
import { HomeIcon } from "../../components/home-icon"
import Map from 'react-map-gl';
import mapboxgl from 'mapbox-gl'



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
          {'Map'}
        </h1>
        <h2 style={{ color: Colors.MoreDarkerGrey, textAlign: 'center' }}>
          {'Streets of Caledonia'}
          <br /><br />
        </h2>
      </div>
    </div>
  </>
}

// Meant to be public, locked down to specific URLs
const PublicMapBoxToken = atob('cGsuZXlKMUlqb2ljMkZ0Ylc5dWN5SXNJbUVpT2lKamJIcGtOSE5xYVdRd2FtdzFNbXR3ZG10dGNuZGhjMlZwSW4wLkgzbHdBdFV2Sl9oVzYzSkdZa1A3NXc=');
mapboxgl.accessToken = PublicMapBoxToken;

const LandingPage: React.FC<PageProps> = () => {
  const mapContainer = React.useRef(null);
  const map = React.useRef(null as null | mapboxgl.Map);
  const [lng, setLng] = React.useState(-90.760);
  const [lat, setLat] = React.useState(38.7479);
  const [zoom, setZoom] = React.useState(14);
  React.useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current as any as HTMLElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
      bearing: 55
    });
  });
  return <>
    <HomeIcon />
    <TopOfPageHeader />
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: Spacing.S2 }}>
      <div ref={mapContainer} className="map-container" />
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
