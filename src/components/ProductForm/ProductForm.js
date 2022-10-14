import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import styles from './ProductForm.module.scss';
import propTypes from 'prop-types';

const ProductForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <OptionSize 
      currentSize={props.currentSize} 
      setCurrentSize={props.setCurrentSize} 
      sizes={props.sizes} />
      <OptionColor 
      colors={props.colors} 
      prepareColorClassName={props.prepareColorClassName} 
      currentColor={props.currentColor} 
      setCurrentColor={props.setCurrentColor}/>
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
}

ProductForm.propTypes = {
  handleSubmit: propTypes.func
}

export default ProductForm;