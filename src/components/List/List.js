import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/Column';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator';
import ReactHtmlParser from 'react-html-parser';
import { settings } from '../../data/dataStore';
class List extends React.Component {
    state = {
        columns: this.props.columns || [],
    }
    static propTypes = {
        description: PropTypes.node,
        columns: PropTypes.array,
    }
    static defaultProps = {
        description: settings.defaultListDescription,
    }
    render() {
        return (
            <section className={styles.component}>
                <Hero titleText={this.props.title} imgAddress={this.props.image} />
                <div className={styles.description}>
                    {ReactHtmlParser(this.props.description)}
                </div>
                <div className={styles.columns}>
                    {this.state.columns.map(({ key, ...columnProps }) => (
                        <Column key={key} {...columnProps}
                            creatorClass={styles.creator}
                            creatorText={settings.cardCreatorText}
                            iconName={columnProps.icon} />
                    ))}
                </div>
                <div className={styles.creator}>
                    <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)} />
                </div>
            </section>
        )
    }
    addColumn(title) {
        this.setState(state => (
            {
                columns: [
                    ...state.columns,
                    {
                        key: state.columns.length ? state.columns[state.columns.length - 1].key + 1 : 0,
                        title,
                        icon: 'list-alt',
                        cards: []
                    }
                ]
            }
        ));
    }
}

export default List;