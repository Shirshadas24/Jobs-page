import Hero from '../components/Hero'

import JobListings from '../components/JobListings'
import HomeCards from '../components/HomeCards'
import ViewJobs from '../components/ViewJobs'
const HomePage = () => {
  return (
    <>
    <Hero/>
    <HomeCards/>
    <JobListings isHome={true}/>
    
    <ViewJobs/>
    </>
  )
}

export default HomePage