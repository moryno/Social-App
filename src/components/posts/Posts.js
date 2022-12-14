import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from "react-query";

const Posts = () => {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
      (res) => res.json()
    )
  );

  const posts = [
    {
      id: 1,
      name: "Jane Doe",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: " Lorem Ipsum is simply dummy text of the printing and typesetting    industry. Lorem Ipsum has been the industry's standard dummy text    ever since the 1500s, when an unknown printer took a galley of type    and scrambled it to make a type specimen book.",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "John Doe",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: " Lorem Ipsum is simply dummy text of the printing and typesetting    industry. Lorem Ipsum has been the industry's standard dummy text    ever since the 1500s, when an unknown printer took a galley of type    and scrambled it to make a type specimen book.",
    },
  ];
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
