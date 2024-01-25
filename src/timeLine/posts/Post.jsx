import { Avatar } from "@mui/material"
import "./Post.css"
import { FavoriteBorder, MoreHoriz, Telegram } from "@mui/icons-material"
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post({ user, image, likes, timestamp }) {
  return (
    <div className="post">

      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar> {user.charAt(0).toUpperCase()} </Avatar>
          {user} • <span> {timestamp} </span>
        </div>
        <MoreHoriz className="postOption" />
      </div>

      <div className="post__image">
        <img src={image} />
      </div>


      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <FavoriteBorder className="postIcon" />
            < ChatBubbleOutlineIcon className="postIcon" />
            <Telegram className="postIcon" />
          </div>
          <div className="post__iconSave">
            < BookmarkBorderIcon className="postIcon" />
          </div>
        </div>
        <strong> Likes {likes} </strong>
      </div>
    </div>
  )
}

export default Post
