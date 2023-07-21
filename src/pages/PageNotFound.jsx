import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="pageNotFound-container">
      <h1>⚠️PageNotFound⚠️</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        dignissimos harum nesciunt beatae, saepe asperiores facere vel? Eius qui
        fugit consequatur. Libero cum iusto saepe autem necessitatibus unde
        consequuntur quidem.
      </p>
      <NavLink to='/'>
            Home Page
      </NavLink>
    </div>
  );
};

export default PageNotFound;
