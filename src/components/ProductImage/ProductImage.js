import styles from './ProductImage.module.scss';
import propTypes from 'prop-types';

const ProductImage = props => {
  return (
    <div className={styles.imageContainer}>
      <img 
        className={styles.image}
        alt={props.title}
        src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.currentColor}.jpg`} />
    </div>
  );
}

ProductImage.propTypes = {
  currentColor: propTypes.string,
  setCurrentColor: propTypes.func,
  name: propTypes.string,
  title: propTypes.string
}

export default ProductImage;