import type { TArticle } from "@/demo/video_and_articles";
import ArticleModal from "./article_modal";

interface ArticleSectionProps {
  articles: TArticle[];
}

const Article_section: React.FC<ArticleSectionProps> = ({ articles }) => {
  return (
    <div className="space-y-6">
      <p className="text-lg font-medium">Articles</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3 lg:grid-cols-4 xl:grid-cols-6">
        {articles.map((article) => (
          <div key={article.id} className="p-2 border rounded-md">
            <div className="aspect-video rounded-md relative overflow-hidden">
              {/* Pass props dynamically to modal */}
              <ArticleModal
                title={article.title}
                image={article.image}
                desc={article.description}
              />
            </div>

            <div className="mt-2">
              <p className="font-medium">{article.title}</p>
              <p className="text-sm line-clamp-2">{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article_section;
