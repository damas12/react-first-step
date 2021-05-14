import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';

class Column extends React.Component {
  state = {
    cards: this.props.cards || [],
  }
  static propTypes = {
    title: PropTypes.string,
    creatorClass: PropTypes.string,
    creatorText: PropTypes.string,
    icon: PropTypes.string,
    cards: PropTypes.array,
    addCard: PropTypes.func,
  }
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }
  render() {
    const { title, icon, cards, addCard } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title} <span className={styles.icon}><Icon name={icon} /></span></h3>
        {cards.map(({ ...cardProps }) => (
          <Card key={cardProps.id} {...cardProps} />
        ))}
        <div className={this.props.creatorClass}>
          <Creator text={this.props.creatorText} action={addCard} />
        </div>
      </section>
    );
  }
}
export default Column;