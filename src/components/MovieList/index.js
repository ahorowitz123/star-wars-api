import React from "react";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";
import moment from "moment";

// Presentational component to display the list of movies for the selected character
const MovieList = props =>
  <Table responsive>
    <thead>
      <tr>
        <th> Title </th>
        <th> Release Date </th>
      </tr>
    </thead>
    <tbody>
      {props.movies.map((movie, index) => {
        const thisDate = moment(movie.release_date, "YYYY-MM-DD")
        return (
          <tr key={index}>
            <td>
              {movie.title}
            </td>
            <td>
              {thisDate.format("dddd, MMMM D YYYY")}
            </td>
          </tr>
        );
      })}
    </tbody>
  </Table>;

MovieList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MovieList;
