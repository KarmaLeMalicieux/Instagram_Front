
import SideNav from '../components/SideNav';
import TimeLine from '../components/TimeLine';

import './HomePage.css';


function HomePage() {
  return (
    <div className="homePage">

      <div className="homePage__nav">

        <SideNav />

      </div>

      <div className="homePage__timeLine">

        <TimeLine />

      </div>

    </div>
  )
}

export default HomePage
