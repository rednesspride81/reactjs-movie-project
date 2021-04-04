// import axios from "axios";
import React, { Component } from "react";
import { getMovieList } from "../../../store/actions/movie.action";
import { connect } from "react-redux";
import Loading from "../../loading";
import MovieCard from "../../../components/movie-card";
class Home extends Component {
  renderMovieList = () => {
    return this.props.movieList.map((movie, index) => {
      return (
        <div className="col-4" key={index}>
          <MovieCard movie={movie} />
        </div>
      );
    });
  };
  render() {
    if (this.props.loading) {
      return <Loading />;
    } else {
      return (
        <div>
          <h2>Danh sách phim</h2>
          <div className="container">
            <div className="row">{this.renderMovieList()}</div>
          </div>
          <div id="showtimes">
            <h2>ShowTimes</h2>
          </div>
        </div>
      );
    }
  }

  componentDidMount() {
    // Cách 2
    this.props.dispatch(getMovieList());
    //   call api ngay đây
    // axios({
    //   method: "GET",
    //   url:
    //     "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    //   data: null,
    // })
    //   .then((res) => {
    //     this.props.dispatch(getMovieList(res.data));
    //   })
    //   .catch((err) => {});
  }
}

const mapStateToProps = (state) => {
  return {
    movieList: state.movie.movieList,
    loading: state.common.loading,
  };
};
export default connect(mapStateToProps, null)(Home);
