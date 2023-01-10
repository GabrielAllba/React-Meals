import { Fragment, useRef , useState} from 'react';
import classes from  './MealItemForm.module.css'
import Input from '../../UI/Input';
import Modal from '../../UI/Modal';
import Error from '../../UI/Error';
const MealItemForm = props => {
    const [showError, setShowError] = useState(false)
    const amountInputRef = useRef();

    const submitHandler = event  => {
        event.preventDefault()
        const enteredAmount = amountInputRef.current.value
        const enteredAmountNumber = +enteredAmount
        
        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
            handleShowError()
            return
        }
        props.onAddToCart(enteredAmountNumber)
        
    }
    const handleShowError = () => {
        setShowError(true)
    };
    const handleHideError = () => {
        setShowError(false)
    }



    return (
      <Fragment>
        {showError && <Error onClose={handleHideError}></Error>}
        <form onSubmit={submitHandler} className={classes.form}>
          <Input
            label="Amount"
            ref={amountInputRef}
            input={{
              id: "amount_" + props.id,
              type: "number",
              min: "1",
              step: "1",
              defaultValue: "1",
            }}
          ></Input>
          <button>+ Add</button>
        </form>
      </Fragment>
    );
}

export default MealItemForm