import { Avatar } from '@mui/material'
import './Suggestion.css'

function Suggestion() {
  return (
    <div className='suggestions'>
      <div className="suggestions__title"> Suggestion for you </div>
      <div className="suggestions__userNames">


        <div className="suggestion__userName">

          <div className="usename__left">
            <span className="avatar">
              <Avatar> A </Avatar>
            </span>
            <div className="username__info">
              <span className='username'> redian_ </span>
              <span className="relation"> New to Instagram </span>
            </div>
          </div>
          <button className="follow__button"> Follow </button>

        </div>


        <div className="suggestion__userName">

          <div className="usename__left">
            <span className="avatar">
              <Avatar> A </Avatar>
            </span>
            <div className="username__info">
              <span className='username'> redian_ </span>
              <span className="relation"> New to Instagram </span>
            </div>
          </div>
          <button className="follow__button"> Follow </button>
        </div>



        <div className="suggestion__userName">
          <div className="usename__left">
            <span className="avatar">
              <Avatar> A </Avatar>
            </span>
            <div className="username__info">
              <span className='username'> redian_ </span>
              <span className="relation"> New to Instagram </span>
            </div>
          </div>
          <button className="follow__button"> Follow </button>
        </div>


        <div className="suggestion__userName">
          <div className="usename__left">
            <span className="avatar">
              <Avatar> A </Avatar>
            </span>
            <div className="username__info">
              <span className='username'> redian_ </span>
              <span className="relation"> New to Instagram </span>
            </div>
          </div>
          <button className="follow__button"> Follow </button>
        </div>

      </div>
    </div>
  )
}

export default Suggestion
