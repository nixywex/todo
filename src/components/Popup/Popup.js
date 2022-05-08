import styles from "./Popup.module.scss";

function Popup({ children, trigger }) {
  if (trigger) {
    return (
      <div className={styles.popup}>
        <div className={styles.popupInner}>{children}</div>
      </div>
    );
  }
}

export default Popup;
