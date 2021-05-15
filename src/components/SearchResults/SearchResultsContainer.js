import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import {
  createAction_changeSearchString, getCardsForSearchResults,
  getSearchString,
} from '../../redux/searchStringRedux.js';

const mapStateToProps = (state, props) => ({
  cards: getCardsForSearchResults(state, props.match.params.id),
  searchString: getSearchString(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString =>
    dispatch(
      createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);