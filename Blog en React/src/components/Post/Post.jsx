import "./post.css"

export default function Post({ category, title, description, date, image }) {
  return (
    <div className="post">
      <img className="postImg" src={image} alt={title} />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">{category}</span>
        </div>
        <span className="postTitle">{title}</span>
        <p className="postDesc">{description}</p>
        <hr />
        <span className="postDate">{date}</span>
      </div>
    </div>
  );
}

