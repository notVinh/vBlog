import React, { useEffect, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LikedSection = ({ postId, isLike, postItem }) => {
  const { currentUser } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const [liked, setLiked] = useState(isLike);
  const [post, setPost] = useState(postItem);

  const handleLike = async (postId) => {
    try {
      if (!currentUser) {
        navigate("/sign-in");
        return;
      }
      const res = await fetch(
        `${import.meta.env.VITE_API}/api/post/likepost/${postId}`,
        {
          method: "PUT",
        }
      );
      if (res.ok) {
        const fetchPost = async () => {
          try {
            const res = await fetch(
              `${import.meta.env.VITE_API}/api/post/getposts/${postId}`
            );
            const item = await res.json();
            if (res.ok) {
              setPost(item);
            }
          } catch (error) {
            console.log(error);
          }
        };

        await fetchPost();
        setLiked(!liked);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto w-full p-3 ">
      <div className="border border-gray-500 my-3"></div>
      <div className="flex justify-between">
        <div className="flex items-center" onClick={() => handleLike(postId)}>
          {liked ? <FaHeart fill="red" /> : <FaRegHeart />}

          <span className="pl-1">{post.likes.length}</span>
        </div>
        <div>
          <FaRegBookmark />
        </div>
      </div>
    </div>
  );
};

export default LikedSection;
