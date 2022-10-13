import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import propTypes from 'prop-types';
import { useState } from 'react';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  const getPrice = price => {
    return price + props.sizes.find(({ name }) => name === currentSize).additionalPrice + '$'
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.clear();
    console.log('Summary');
    console.log('===============');
    console.log('Name: ', props.title);
    console.log('Price: ', getPrice(props.basePrice));
    console.log('Size: ', currentSize);
    console.log('Color: ', currentColor);
  }

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>{getPrice(props.basePrice)}</span>
        </header>
        <form onSubmit={handleSubmit}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => 
                <li key={size.name}>
                  <button type="button" 
                  className={clsx(size.name === currentSize && styles.active)} 
                  onClick={() => setCurrentSize(size.name)}>{size.name}</button>
                </li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
            {props.colors.map(color =>
              <li key={color}>
                <button 
                type="button" 
                className={clsx(prepareColorClassName(color), color === currentColor && styles.active)} 
                onClick={() => setCurrentColor(color)} />
              </li>
            )}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
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
  title: propTypes.string.isRequired
};

export default Product;