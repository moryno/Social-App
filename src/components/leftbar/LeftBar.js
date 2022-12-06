import "./leftbar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import { useContext } from "react";
import { UserContext } from "../../context/authContext";

const LeftBar = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="profile" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="item" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="item" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="item" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt="item" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="item" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={Events} alt="item" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="item" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="item" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="item" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="item" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Fund} alt="item" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="item" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="item" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
