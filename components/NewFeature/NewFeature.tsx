import styles from './NewFeature.module.css';
import Image from 'next/image';

type NewFeatureProps = {
  imgUrl: string;
  title: string;
  subtitle: string;
};

const NewFeature = ({ imgUrl, title, subtitle }: NewFeatureProps) => (
  <div className={styles.new_feature_container}>
    <div className={`${styles.image_container} glassmorphism`}>
      <Image src={imgUrl} alt="icon" width={34} height={34} />
    </div>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.subtitle}>{subtitle}</p>
  </div>
);
export default NewFeature;
