import React from 'react';
import './Searchbar.css';

const sortByOptions = {
  'Best Match' : 'best-match',
  'Highest Rated' : 'rating',
  'Most Reviewed' : 'review-count'
}

class SearchBar extends React.Component {
  renderSortByOptions() {
    return
    Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  }
} render() {
  return (
<div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
       renderSortByOptions()
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input placeholder="Search Businesses" />
    <input placeholder="Where?" />
  </div>
  <div className="SearchBar-submit">
    <a>Lets Go</a>
  </div>
</div>
    )
}
export default SearchBar;
