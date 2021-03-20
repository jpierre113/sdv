import './characterModal.css'

const CharacterModal = ({handleClose, show, children}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return(
    <div className={showHideClassName}>
      <div className="modal-container">
        {children}
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CharacterModal;
