import { useGlobalContext } from "../context";

const Favorites = () => {
  const { favorites, selectContact, removeFromFavorites } = useGlobalContext();

  return (
    <section className="favorites">
      <div className="favorites-content">
        <h5>Favorites</h5>
        <div className="favorties-container">
          {favorites.map((item) => {
            const { id, last_name, first_name } = item;

            return (
              <div key={id} className="favorite-item">
                <p
                  onClick={() => selectContact(id, true)}
                  className="favorite-display"
                >
                  {last_name}, {first_name}
                </p>
                <button
                  className="remove-btn"
                  onClick={() => removeFromFavorites(id)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Favorites;
