import { useFetch } from "../../hooks/useFetch";
import { NavLink } from 'react-router-dom'

const Articles = () => {
  const {
    data: articles,
    isPending,
    error,
  } = useFetch('http://localhost:3000/articles');
  return (
    <div className="article-container">
      {isPending && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}

      {articles &&
        articles.map((article) => {
          return (
            <div className="card" key={article.id}>
              <h3>Title: {article.Title}</h3>
              <p>
                Author: <i>{article.author}</i>
              </p>

              <NavLink to={`/articles/${article.id}`}>Learn More</NavLink>
            </div>
          );
        })}
    </div>
  );
};

export default Articles;
