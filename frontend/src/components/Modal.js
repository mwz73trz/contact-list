import { useGlobalContext } from "../context";

const Modal = () => {
  const { selectedContact, closeModal } = useGlobalContext();

  const { first_name, last_name, address, city, state, zipcode, phone, email } =
    selectedContact;

  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <div className="modal-content">
          <h4>
            {first_name} {last_name}
          </h4>
          <p>{address}</p>
          <p>
            {city}, {state} {zipcode}
          </p>
          <p>{phone}</p>
          <p>{email}</p>
          <button className="btn btn-hipster close-btn" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
