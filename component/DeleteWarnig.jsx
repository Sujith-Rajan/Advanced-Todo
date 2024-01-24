import styles from "../styles/delete.module.css";
import { MdDelete } from "react-icons/md";
import { Motion, spring } from 'react-motion';


const DeleteWarnig = ({ setDeleteMsg, handleDelete }) => {
    return (
        <Motion
        defaultStyle={{ scale: 0 }} style={{ scale: spring(1) }}>
       {(interpolatingStyle) => (
        <div
        style={{
            transform: `scale(${interpolatingStyle.scale})`,
            transition: 'transform 0.09s ease-in-out', 
          }}
         className={styles.container}>
            <button className={styles.closeButton} onClick={() => setDeleteMsg(false)}>
                x
            </button>
            <span className={styles.deleteTitle}> Delete!</span>
            <hr className={styles.hrLine}/>
            <div>
                <div className={styles.wrapper}>
                    <MdDelete className={styles.icon} />
                    <p>Are you sure ?</p>
                </div>
             <hr className={styles.hrLine} />
                <div className={styles.wrapper}>
                    <button
                        onClick={() => {
                            setDeleteMsg(false);
                            handleDelete();
                        }}
                    >
                        Yes
                    </button>
                    <button onClick={() => setDeleteMsg(false)}>No</button>
                </div>
            </div>
        </div>
        )}
</Motion>
    );
};

export default DeleteWarnig;
