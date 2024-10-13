import styles from "./Buttons.module.css";

const buttonsContainer = ({onButtonClick}) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "5",
    "-",
    "6",
    "7",
    "8",
    "*",
    "9",
    "0",
    ".",
    "/",
    "=",
  ];

  return (
    <div className={styles.buttonsContainer}>

     {
     buttonNames.map((ele)=> {
        return(
         <button key={ele} className={styles.button}
         onClick={() => onButtonClick(ele)}>{ele}</button>
        )
        }

      
        )}
     
    </div>
  );
};

export default buttonsContainer;
