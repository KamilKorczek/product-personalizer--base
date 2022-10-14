import styles from './Product.module.scss';
import propTypes from 'prop-types';
import { useMemo, useState } from 'react';
import ProductForm from '../ProductForm/ProductForm';
import ProductImage from '../ProductImage/ProductImage';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const getPrice = useMemo(() => {
    return props.basePrice + props.sizes.find(({name}) => name === currentSize).additionalPrice + '$'
  }, [props.sizes, props.basePrice, currentSize]);

  const handleSubmit = e => {
    e.preventDefault();
    console.clear();
    console.log('Summary');
    console.log('===============');
    console.log('Name: ', props.title);
    console.log('Price: ', getPrice);
    console.log('Size: ', currentSize);
    console.log('Color: ', currentColor);
  }

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} title={props.title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>{getPrice}</span>
        </header>
        <ProductForm 
        colors={props.colors}
        sizes={props.sizes}
        handleSubmit={handleSubmit}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
        />
      </div>
    </article>
  )
};

Product.propTypes= {
  basePrice: propTypes.number.isRequired,
  colors: propTypes.array.isRequired,
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  sizes: propTypes.array.isRequired,
  title: propTypes.string.isRequired,
  getPrice: propTypes.func
};

export default Product;