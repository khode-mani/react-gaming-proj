import "./commentCard.scss";

export default function CommentCard(props) {
  return (
    <>
      <div className="comment-con mt-5 p-3">
        <div className="right">
          <div className="img-con">
            <img src={props.profileImage} alt="" />
          </div>
          <p className="pay2">
            {props.firstName} {props.lastName}
          </p>
        </div>

        <div className="left">
          <p>{props.comment}</p>
        </div>
      </div>
    </>
  );
}
