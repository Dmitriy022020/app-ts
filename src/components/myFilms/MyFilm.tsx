import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {removeMyFilm} from "../../stores/filmsActions";
import {TFilm} from "../../types/common";

interface IProps {
  film: TFilm
}
function MyFilm(props: IProps) {
  const {film} = props
  const dispatch = useDispatch()
  return (
    <div>
      <h3>{film.title}</h3>
      <h5>{film.release_date}</h5>
      <span>
        рейтинг <strong>{film.vote_average}</strong>
      </span>
      <button className="button">
        <Link to={{pathname:`/myFilms/${film.id}`, state: 'myFilms'}}>
          подробнее
        </Link>
      </button>
      <button className="button red" onClick={() => dispatch(removeMyFilm(film.id))}>Удалить из My films</button>
    </div>
  )
}

export default MyFilm