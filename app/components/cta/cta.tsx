import styles from "./cta.module.scss";

export default function Cta() {
  return (
    <div className={styles.cta}>
      <h2 className={styles.cta__title}>
        <span>Let’s talk about</span>
        <span>your project</span>
      </h2>
      <p className={styles.cta__msg}>
        Ready to take it to the next level? Contact us today and find out how
        our expertise can help your business grow.
      </p>
      <button className={`${styles.cta__btn} btn__primary`} type="button">
        get in touch
      </button>
    </div>
  );
}
