import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
/* import Creator from '../Creator/Creator.js'; */
import Icon from '../Icon/Icon.js';

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
  }

  render() {
    const { title, icon, cards } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title} <span className={styles.icon}><Icon name={icon} /></span></h3>
        {cards.map(({ key, ...cardProps }) => (
          <Card key={key} {...cardProps} />
        ))}
        {/*         <div className={this.props.creatorClass}>
          <Creator text={this.props.creatorText} action={title => this.addCard(title)} />
        </div> */}
      </section>
    );
  }
}
export default Column;