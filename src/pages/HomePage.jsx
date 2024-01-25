import SideNav from '../navigation/SideNav';
import TimeLine from '../timeLine/TimeLine';
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
