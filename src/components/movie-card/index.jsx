import React from "react";
import { withRouter } from "react-router";

function MovieCard({ movie, history }) {
  const handleClick = () => {
    // di chuyển sang trang chi tiết
    history.push(`/movie-detail/${movie.maPhim}`);
  };
  let { hinhAnh, tenPhim, moTa } = movie;
  return (
    <div className="card text-left">
      <img className="card-img-top" src={hinhAnh} alt="phim" />
      <div className="card-body">
        <h4 className="card-title">{tenPhim}</h4>
        <p className="card-text">{moTa}</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-info" onClick={handleClick}>
          Xem chi tiết
        </button>
      </div>
    </div>
  );
}
export default withRouter(MovieCard);
