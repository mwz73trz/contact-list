import { useGlobalContext } from "../context";

const Contacts = () => {
  const { loading, contacts, selectContact } = useGlobalContext();

  if (loading) {
    return (
      <section className="section">
        <h4>Loading...</h4>
      </section>
    );
  }

  return (
    <section className="section-center">
      {contacts.map((singleContact) => {
        const { id, first_name, last_name } = singleContact;

        return (
          <article key={id} className="single-contact">
            <h5 onClick={() => selectContact(id)}>
              {last_name}, {first_name}
            </h5>
          </article>
        );
      })}
    </section>
  );
};

export default Contacts;
