import React, { Component } from "react";
import { getMovieDetail } from "../../../store/actions/movie.action";
import { connect } from "react-redux";
import Loading from "../../loading";
import "./style.scss";
import { withRouter } from "react-router";
import dateFormat from "date-format";
import { NavLink } from "react-router-dom";

class DetailMovie extends Component {
  renderShowTime = () => {
    const { lichChieu } = this.props.movieDetail;
    console.log(lichChieu);
    return lichChieu?.map((showTime, index) => {
      return (
        <tr>
          <th scope="row">{index + 1}</th>
          <td>{showTime.thongTinRap.tenCumRap}</td>
          <td>{showTime.thongTinRap.tenRap}</td>
          <td>{showTime.giaVe}</td>
          <td>
            <NavLink to={`/booking/${showTime.maLichChieu}`}>
              {dateFormat(
                "yyyy-MM-dd hh:mm",
                new Date(showTime.ngayChieuGioChieu)
              )}
            </NavLink>
          </td>
        </tr>
      );
    });
  };
  render() {
    if (this.props.loading) {
      return <Loading />;
    } else {
      let { movieDetail } = this.props;
      return (
        <div>
          <h2 className="test">Detail movie</h2>
          <img src={movieDetail.hinhAnh} alt="phĩm" />
          <section className="showTime container mx-auto py-2">
            <h2 className="text-center">Lịch chiếu</h2>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Số thứ tự</th>
                  <th scope="col">Tiền cụm rạp</th>
                  <th scope="col">Tên rạp</th>
                  <th scope="col">Giá</th>
                  <th scope="col">Ngày chiếu</th>
                </tr>
              </thead>
              <tbody>{this.renderShowTime()}</tbody>
            </table>
          </section>
        </div>
      );
    }
  }

  componentDidMount() {
    // const params = this.props.match.params;
    // const { maPhim } = params;
    const {
      params: { maPhim },
    } = this.props.match;
    this.props.dispatch(getMovieDetail(maPhim));
  }
}
const mapStateToProps = (state) => {
  return {
    movieDetail: state.movie.movieDetail,
    loading: state.common.loading,
  };
};

export default connect(mapStateToProps)(withRouter(DetailMovie));
