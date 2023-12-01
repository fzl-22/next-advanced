import { api } from "@/utils/api";
export const getArticle = async () => {
  // get all article
  return await api.get("/pbkk-static-api/main/articles.json", {
    transformResponse: (res) => {
      const resData = JSON.parse(res);
      return resData;
    },
  });
}; // get article by id
export const getArticleDetail = async (id) => {
  return await api.get("/pbkk-static-api/main/articles.json", {
    transformResponse: (res) => {
      const resData = JSON.parse(res);
      const article = resData.filter((item) => {
        return item.id === id;
      });
      return article[0] ?? {};
    },
  });
};
