import React from "react";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";

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
        return (
          <tr key={index}>
            <td>
              {movie.title}
            </td>
            <td>
              {movie.release_date}
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
