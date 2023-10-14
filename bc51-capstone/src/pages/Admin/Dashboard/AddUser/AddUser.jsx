import React, { Fragment, useContext, useEffect, useState } from "react";
import { Button, Calendar, Table, notification } from "antd";
import { Input, Space } from "antd";
import {
  AudioOutlined,
  EditOutlined,
  DeleteOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { adminService } from "../../../services/admin";
import { LoadingContext } from "../../../contexts/LoadingContext/LoadingContext";
import { NavLink, useNavigate } from "react-router-dom";
const { Search } = Input;
export default function UserManagement() {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useContext(LoadingContext);
  useEffect(() => {
    fetchUserList();
  }, []);
  const fetchUserList = async () => {
    setLoading({
      isLoading: true,
    });

    const result = await adminService.layDanhSachNguoiDungApi();
    setUserList(result.data.content);

    setLoading({
      isLoading: false,
    });
  };

  const columns = [
    {
      title: "STT",
      dataIndex: "maPhim",
      render: (text, film, idx) => {
        return <Fragment>{idx + 1}</Fragment>;
      },
      width: 50,
    },
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      width: 150,
      defaultSortOrder: "descend",
      sorter: (a, b) => a.taiKhoan - b.taiKhoan,
    },
    {
      title: "Họ Tên",
      dataIndex: "hoTen",
      sorter: (a, b) => {
        let hoTenA = a.hoTen.toLowerCase().trim();
        let hoTenB = b.hoTen.toLowerCase().trim();
        if (hoTenA > hoTenB) {
          return 1;
        }
        return -1;
      },
      width: 200,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: " Email",
      dataIndex: "email",
    },
    {
      title: " Số  điện thoại",
      dataIndex: "soDT",
    },
    {
      title: " Hành động ",
      dataIndex: "taiKhoan",

      render: (text, user) => {
        return (
          <Fragment>
            <NavLink
              key={1}
              className="mr-2 text-2xl"
              to={`/admin/user/edituser/${user.taiKhoan}`}
            >
              {" "}
              <EditOutlined style={{ color: "blue" }} />{" "}
            </NavLink>
            <span
              key={2}
              className="mr-2 text-2xl"
              onClick={async () => {
                const confirm = window.confirm(
                  "Bạn có chắc muốn xóa tài khoản " + user.taiKhoan + "?"
                );

                if (!confirm) return;
                try {
                  await adminService.xoaNguoiDungApi(user.taiKhoan);
                  notification.success({
                    message: "Xóa người dùng thành công",
                    placement: "bottomRight",
                  });

                  const result = await adminService.layDanhSachNguoiDungApi();
                  setUserList(result.data.content);
                } catch (error) {
                  notification.error({
                    message: "Xóa người dùng thất bại",
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
              key={3}
              className="mr-2 text-2xl"
              to={`/admin/user/adduser`}
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
    const result = await adminService.layDanhSachNguoiDungApi(value);
    const search = await adminService.layDanhSachNguoiDungApi();
    setUserList(result.data.content);
  };
  return (
    <div className="container">
      <h3> Quản lí người dùng</h3>
      <Button onClick={() => navigate("/admin/user/adduser")}>
        Thêm người dùng
      </Button>
      <Search
        className="mb-5"
        placeholder="tìm kiếm theo họ tên"
        size="large"
        onSearch={onSearch}
      />

      <Table
        columns={columns}
        dataSource={userList}
        onChange={onChange}
        rowKey={"maPhim"}
      />
    </div>
  );
}