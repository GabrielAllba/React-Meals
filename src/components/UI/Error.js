import Modal from "../UI/Modal";
import { useContext } from "react";
import classes from "../.././components/Cart/Cart.module.css";
import ErrorContext from '../../store/error-context'
const Error = (props) => {
  const errorCtx = useContext(ErrorContext);
  return (
    <Modal onClose={props.onClose}>
      
      <div className={classes.total}>
        <span>{errorCtx.message}</span>
        
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        
      </div>
    </Modal>
  );
};

export default Error;
