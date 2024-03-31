import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(
        "https://v-blog-api.vercel.app/api/post/getPosts"
      );
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <img
        className="relative"
        src="https://res.cloudinary.com/dshvydi5f/image/upload/v1711691046/vBlog/2234209_plklhb.png"
        alt=""
      />
      <div className="flex flex-col gap-6 pt-14 pb-60 px-3 max-w-6xl mx-auto h-14 absolute top-[120px] right-[280px] w-full ">
        <h1 className="text-3xl font-bold lg:text-6xl">
          Welcome to <span className="text-teal-500">vBlog</span>
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm">
          Here you'll find a variety of articles and tutorials on topics such as
          web development, software engineering, and programming languages.
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all posts
        </Link>
      </div>
      <div className="flex">
        <div className="w-full">
          <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
            {posts && posts.length > 0 && (
              <div className="flex flex-col gap-6">
                <h2 className="text-2xl font-semibold text-center">
                  Recent Posts
                </h2>
                <div className="flex flex-wrap gap-4">
                  {posts.map((post) => (
                    <PostCard key={post._id} post={post} />
                  ))}
                </div>
                <Link
                  to={"/search"}
                  className="text-lg text-teal-500 hover:underline text-center"
                >
                  View all posts
                </Link>
              </div>
            )}
          </div>
        </div>
        {/* <div className="p-3 bg-amber-100 dark:bg-slate-700">
          <CallToAction />
        </div> */}

        {/* <div className="w-2/12 max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
          {posts && posts.length > 0 && (
            <>
              <h2 className="text-2xl font-semibold text-left">
                Trending Articles
              </h2>
              <div className="flex">
                <img
                  src="https://res.cloudinary.com/dshvydi5f/image/upload/v1711688203/vinh/vinh111jjj_ep1f4a.png"
                  alt="title"
                  className="object-cover rounded-full w-12 h-12"
                />
                <div className="ml-2 flex items-center">
                  <div className="font-bold ">@Vinh</div>
                  <div className="text-gray-500 text-xs sm:text-sm">
                    day la mo ta
                  </div>
                </div>
              </div>
            </>
          )}
        </div> */}
      </div>
    </>
  );
}
