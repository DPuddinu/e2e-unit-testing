import { Link } from "@tanstack/react-router";

const Posts = () => {

  return (
    <div className="flex flex-col gap-2">
      <Link to="/posts/$id" params={{ id: '1' }}>Post 1</Link>
      <Link to="/posts/$id" params={{ id: '2' }}>Post 2</Link>
      <Link to="/posts/$id" params={{ id: '3' }}>Post 3</Link>
    </div>
  )
};

export default Posts;