import React, { Fragment, useContext, useEffect, useState } from "react";
import { Button, Calendar, Table, notification } from "antd";

import { Input, Space } from "antd";
import {
  AudioOutlined,
  EditOutlined,
  DeleteOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import useMovieList from "hooks/useMovieList";
import { NavLink, useNavigate } from "react-router-dom";
import { adminService } from "../../../services/admin";
import { movieService } from "../../../services/movie";
import { LoadingContext } from "../../../contexts/LoadingContext/LoadingContext";
const { Search } = Input;
export default function Films() {
  const navigate = useNavigate();
  //let listMovie = useMovieList();
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useContext(LoadingContext);
  useEffect(() => {
    fetchMovieList();
    return () => {};
  }, []);
  const fetchMovieList = async () => {
    setLoading({
      isLoading: true,
    });

    const result = await movieService.fetchMovieListApi();
    setMovieList(result.data.content);

    setLoading({
      isLoading: false,
    });
  };

  const columns = [
    {
      title: "maPhim",
      dataIndex: "maPhim",
      sorter: (a, b) => b.maPhim - a.maPhim,
      sortDirections: ["descend", "ascend"],
      width: 150,
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      render: (text, film, idx) => {
        return (
          <Fragment>
            <img
              src={film.hinhAnh}
              alt={film.tenPhim}
              width={50}
              height={50}
              onError={(e) => {
                e.target.onError = null;
                e.target.src = `http://picsum.photos/id/${idx}/50/50`;
              }}
            />
          </Fragment>
        );
      },
      width: 100,
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      sorter: (a, b) => {
        let tenPhimA = a.tenPhim.toLowerCase().trim();
        let tenPhimB = b.tenPhim.toLowerCase().trim();
        if (tenPhimA > tenPhimB) {
          return 1;
        }
        return -1;
      },
      width: 300,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: " Mô tả",
      dataIndex: "moTa",

      render: (text, film) => {
        return (
          <Fragment>
            {film.moTa.length > 50
              ? film.moTa.substr(0, 50) + "..."
              : film.moTa}
          </Fragment>
        );
      },
    },
    {
      title: " Hành động ",
      dataIndex: "maPhim",

      render: (text, film) => {
        return (
          <Fragment>
            <NavLink
              key={1}
              className="mr-2 text-2xl"
              to={`/admin/films/edit/${film.maPhim}`}
            >
              {" "}
              <EditOutlined style={{ color: "blue" }} />{" "}
            </NavLink>
            <span
              key={2}
              className="mr-2 text-2xl"
              onClick={async () => {
                const confirm = window.confirm(
                  "Bạn có chắc muốn xóa phim " + film.tenPhim + "?"
                );

                if (!confirm) return;
                try {
                  await adminService.xoaPhimApi(film.maPhim);
                  notification.success({
                    message: "Xóa phim thành công",
                    placement: "bottomRight",
                  });

                  const result = await movieService.fetchMovieListApi();
                  setMovieList(result.data.content);
                } catch (error) {
                  notification.error({
                    message: "Xóa phim thất bại",
                    placement: "bottomRight",
                  });
                }
              }}
            >
              {" "}
              <DeleteOutlined
                style={{ color: "red", cursor: "pointer" }}
              />{" "}
            </span>
            <NavLink
              key={1}
              className="mr-2 text-2xl"
              to={`/admin/films/showtime/${film.maPhim}`}
            >
              {" "}
              <CalendarOutlined style={{ color: "blue" }} />{" "}
            </NavLink>
          </Fragment>
        );
      },
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
  };
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1677ff",
      }}
    />
  );

  const onSearch = async (value) => {
    //call api
    const result = await movieService.fetchMovieListApi(value);
    const search = await movieService.fetchMovieListApi();
    setMovieList(result.data.content);
  };
  return (
    <div className="container">
      <h3> Quản lý phim</h3>
      <Button onClick={() => navigate("/admin/films/addnew")}>THÊM PHIM</Button>
      <Search
        className="mb-5"
        placeholder="tìm kiếm"
        size="large"
        onSearch={onSearch}
      />

      <Table
        columns={columns}
        dataSource={movieList}
        onChange={onChange}
        rowKey={"maPhim"}
      />
    </div>
  );
}
