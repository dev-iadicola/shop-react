const AlertComponent = ({ type, message, onClose }) => {
    return (
      <div className={`alert alert-${type} alert-dismissible fade show fixed-top my-2 w-75 mx-auto`} role="alert">
        <h3>{message}</h3>
        <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
      </div>
    );
  };

  export default AlertComponent