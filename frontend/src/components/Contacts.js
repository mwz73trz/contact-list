import { useGlobalContext } from "../context";
import { BsHandThumbsUp } from "react-icons/bs";

const Contacts = () => {
  const { loading, contacts, selectContact, addToFavorites } =
    useGlobalContext();

  if (loading) {
    return (
      <section className="section">
        <h4>Loading...</h4>
      </section>
    );
  }

  if (contacts.length < 1) {
    return <h4>No Contacts matched your search term. Please try again.</h4>;
  }

  return (
    <section className="section-center">
      {contacts.map((singleContact) => {
        const { id, first_name, last_name } = singleContact;

        return (
          <article key={id} className="single-contact">
            <footer>
              <h5 onClick={() => selectContact(id)}>
                {last_name}, {first_name}
              </h5>
              <button className="like-btn" onClick={() => addToFavorites(id)}>
                <BsHandThumbsUp />
              </button>
            </footer>
          </article>
        );
      })}
    </section>
  );
};

export default Contacts;
