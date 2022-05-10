import './style.css'

export const PostCard = ({post}) => {
    // console.log(props);
    return (
        // <h1>oi</h1>
        <div className="post" key={post.id}>
            <img src={post.cover} alt={post.title}></img>
            <div className="post-content">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        </div>
    )
}