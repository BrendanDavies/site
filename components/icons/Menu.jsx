import classNames from 'classnames';
import styles from './Menu.module.css';

export const Menu = ({ isExpanded, className: parentClassName, ...props }) => (
  <div
    className={classNames(styles.menu, parentClassName, {
      [styles.open]: isExpanded
    })}
    {...props}
  >
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
);

export default Menu;
