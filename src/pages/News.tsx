import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Spinner } from "../components/Spinner";
import { api } from "../lib/api";
import { menuItems } from "../utils/menu";

interface NewsArticleProps {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  author: string;
  content: string;
}

const API_KEY = "b14cd137fb3f4bd187be894d7bb296a8";

export function News() {
  const [news, setNews] = useState<NewsArticleProps[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      const response = await api.get(
        `https://newsapi.org/v2/everything?q=Ibovespa&language=pt&pageSize=12&page=${currentPage}&sortBy=publishedAt&apiKey=${API_KEY}`
      );
      setNews(response.data.articles);
      setIsLoading(false);
    };

    fetchNews();
  }, [currentPage]);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="min-h-screen max-w-[1312px] mx-auto px-4 flex flex-col">
      <Header menuItems={menuItems} />

      <h1 className="text-xl font-bold mb-4">Latest News</h1>
      <p className="text-lg text-gray-500 mb-8">
        Check out the latest news about Ibovespa:
      </p>

      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {news.map((article) => (
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                key={article.url}
                className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform scale-100 hover:scale-[1.02]"
              >
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-full h-48 object-fill"
                  />
                )}
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-2">
                    {article.title ? article.title : "Sem título ainda."}
                  </h3>

                  <p className="text-gray-700 text-base mb-2">
                    {!!article.author ? article.author : "Sem autor ainda."}
                  </p>

                  <p className="text-gray-600 text-base">
                    {article.publishedAt
                      ? new Date(article.publishedAt).toLocaleDateString()
                      : 'Sem data ainda.'}
                  </p>
                </div>
              </a>
            ))}
          </div>
          <div className="flex justify-center my-6">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="mr-2 px-4 py-2 border rounded-lg text-white bg-blue-500 hover:bg-blue-600 disabled:opacity-50 transition duration-300"
            >
              Anterior
            </button>
            <button
              onClick={handleNextPage}
              className="px-4 py-2 border rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition duration-300"
            >
              Próxima
            </button>
          </div>
        </>
      )}
    </div>
  );
}
