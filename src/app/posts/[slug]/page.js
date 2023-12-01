import { notFound } from "next/navigation";
import { getArticleDetail } from "@/utils/services/post.service";
export default async function Page({ params }) {
  // const { data } = await new Promise(async (resolve) => {
  //     setTimeout(() => {
  //         // resolve('Ini Data dari menunggu');
  //         resolve(false);
  //     }, 3000);
  // });
  const { data } = await getArticleDetail(params.slug);
  if (!data) {
    notFound();
  }
  return (
    <div>
      <h1 className="font-bold text-2xl text-gray-600">Posts - {data.title}</h1>
      <div className="py-4 text-gray-600">
        <p>{data.content}</p>
      </div>
    </div>
  );
}
