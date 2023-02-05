import styles from './NewFeature.module.css';

type NewFeatureProps = {
  imgUrl: string;
  title: string;
  subtitle: string;
};

const NewFeature = ({ imgUrl, title, subtitle }: NewFeatureProps) => (
  <div className={styles.new_feature_container}>
    <div className={`${styles.image_container} submenu-gradient`}>
      <img src={imgUrl} alt="icon" />
    </div>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.subtitle}>{subtitle}</p>
  </div>
);
export default NewFeature;
