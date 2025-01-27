import PageHeader from '../../components/share/PageHeader'
import ShopInfo from '../../components/share/ShopInfo'
import OurInfo from './OurInfo'
import OurStory from './OurStory'
import OurTeam from './OurTeam'

const About = () => {
  return (
    <div>
      <PageHeader page='About Us'/>
      <OurInfo/>
      <OurStory/>
      <OurTeam/>
      <ShopInfo/>
    </div>
  )
}

export default About
