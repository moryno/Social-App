import { useContext } from "react";
import { UserContext } from "../../context/authContext";
import "./stories.scss";

const Stories = () => {
  const { currentUser } = useContext(UserContext);

  const stories = [
    {
      id: 1,
      name: "Jane Doe",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 2,
      name: "Jane Doe",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 3,
      name: "Jane Doe",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 4,
      name: "Jane Doe",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    },
  ];
  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="stories" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="stories" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
