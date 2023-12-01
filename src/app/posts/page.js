import axios from "axios";
import Link from "next/link";
import { getArticle } from "@/utils/services/post.service";
export default async function Page() {
  // const { data } = await axios.get("https://raw.githubusercontent.com/dauditts/pbkk-static-api/main/articles.json");
  const { data } = await getArticle();
  return (
    <div>
      <h1 className="font-bold text-2xl text-gray-600">Posts</h1>
      <div className="py-4 text-gray-600">
        {data.map((post) => (
          <>
            <div className="p-4 my-3">
              <Link href={`/posts/${post.id}`}>
                <b className="hover:text-blue-400">{post.title}</b>             
              </Link>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
