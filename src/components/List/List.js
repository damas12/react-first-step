import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/ColumnContainer';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator';
import Container from '../Container/Container';
import ReactHtmlParser from 'react-html-parser';
import { settings } from '../../data/dataStore';
class List extends React.Component {
  state = {
    columns: this.props.columns || [],
  }
  static propTypes = {
    description: PropTypes.node,
    columns: PropTypes.array,
    title: PropTypes.node,
    image: PropTypes.string,
    addColumn: PropTypes.func,
  }
  static defaultProps = {
    description: settings.defaultListDescription,
  }
  render() {
    const { title, image, description, columns, addColumn } = this.props;
    return (
      <Container>
        <section className={styles.component}>
          <Hero titleText={title} image={image} />
          <div className={styles.description}>
            {ReactHtmlParser(description)}
          </div>
          <div className={styles.columns}>
            {columns.map(columnData => (
              <Column key={columnData.id} {...columnData} />
            ))}
          </div>
          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={addColumn} />
          </div>
        </section>
      </Container>
    );
  }
}

export default List;