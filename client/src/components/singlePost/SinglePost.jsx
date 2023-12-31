import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Context } from "../../context/Context";
import "./singlePost.css";

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);
    const BASE_URL = process.env.REACT_APP_BASE_URL;

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(`${BASE_URL}/posts/` + path);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        };
        getPost();
    }, [path, BASE_URL]);

  const handleDelete = async () => {
    try {
        await axios.delete(`${BASE_URL}/posts/${post._id}`, {
            data: { username: user.username },
        });
        window.location.replace("/");
    } catch (error) {}
  };

  const handleUpdate = async () => {
    try {
        await axios.put(`${BASE_URL}/posts/${post._id}`, {
            username: user.username, 
            title, 
            desc,
        });
        setUpdateMode(false)
    } catch (error) {}
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img 
            src={post.photo} 
            alt="" 
            className="singlePostImg" 
          />
        )}
        {updateMode ? (
          <input 
            type="text" 
            value={title} 
            className="singlePostTitleInput" 
            autoFocus 
            onChange={(e) => setTitle(e.target.value)}
          /> 
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i className="singlePostIcon far fa-edit" onClick={() => setUpdateMode(true)}></i>
                <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
              </div>
            )}
          </h1>
        )}
  
        <div className="singlePostInfo">
          {/* <span className="singlePostAuthor">
              Author: 
              <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
              </Link>
          </span> */}
          {/* <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span> */}
        </div>
  
        {updateMode ? (
          <textarea 
            className="singlePostDescInput" 
            value={desc} 
            onChange={(e) => setDesc(e.target.value)}
          /> 
        ) : (
          <div className="singlePostDesc">
            {desc.split('\n').map((paragraph, index) => (
              <p key={index} className="paragraph">
              {paragraph}
            </p>
            ))}
          </div>
        )}

        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}  
