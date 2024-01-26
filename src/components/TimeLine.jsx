import { useState } from "react"
import Suggestion from "./Suggestion"
import "./styles/TimeLine.css"
import Post from "./Post"

function TimeLine() {
  const [posts, setPosts] = useState([
    {
      user: "Arthure",
      postImage: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      likes: 12,
      timestamp: "2d"
    },
    {
      user: "Harry Potter",
      postImage: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      likes: 48,
      timestamp: "6d"
    },
    {
      user: "Clara Morgan",
      postImage: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      likes: 189,
      timestamp: "9d"
    }
  ])

  return (
    <div className="timeLine">
      <div className="timeLine__left">
        <div className="timeLine__posts">
          {posts.map(post => (
            <Post user={post.user} image={post.postImage} likes={post.likes} timestamp={post.timestamp} key={post.user} />
          ))}
        </div>
      </div>
      <div className="timeLine__right">
        <Suggestion />
      </div>
    </div>
  )
}

export default TimeLine
