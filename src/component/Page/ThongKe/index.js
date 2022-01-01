import React, { useState, useEffect } from "react";
import "./homePage.scss";
import {
  AssignmentTurnedIn,
  AddShoppingCart,
  PersonAdd,
  ListAlt,
} from "@material-ui/icons";
import * as api from "./../../../api/thong_ke";

function Thongke(props) {
  const [dataGiay, setDataGiay] = useState(0);
  const [dataLoaiGiay, setDataLoaiGiay] = useState(0);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    await api.getAllGiay().then((res) => {
      const { data } = res;
      console.log(res);
      if (res.status === 200) {
        setDataGiay(res.data.data[0].tong);
      }
    });
    await api.getAllLoaiGiay().then((res) => {
      const { data } = res;
      if (res.status === 200) {
        setDataLoaiGiay(res.data.data[0].tong);
      }
    });
  }
  return (
    <div className="homePage-admin">
      <div className="homepage">
        <div className="title-homePage"> Trang chủ </div>
        <div className="category-homePage">
          <div className="product-homePage shadow">
            <div className="vertical">
              <div className="base">
                <div className="left">
                  <div className="title-homePage-small"> Số sản phẩm </div>
                  <div className="amount-homePage">{dataGiay}</div>
                </div>
                <div className="righ">
                  <AddShoppingCart className="icons"> </AddShoppingCart>
                </div>
              </div>
            </div>
          </div>
          <div className="classProduct-homePage shadow">
            <div className="vertical">
              <div className="base">
                <div className="left">
                  <div className="title-homePage-small"> Loại sản phẩm </div>
                  <div className="amount-homePage">{dataLoaiGiay}</div>
                </div>
                <div className="righ">
                  <AssignmentTurnedIn className="icons"> </AssignmentTurnedIn>
                </div>
              </div>
            </div>
          </div>
          <div className="bill-homePage shadow">
            <div className="vertical">
              <div className="base">
                <div className="left">
                  <div className="title-homePage-small"></div>
                  <div className="amount-homePage"> 1 </div>
                </div>
                <div className="righ">
                  <ListAlt className="icons"> </ListAlt>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="account-homePage shadow">
            <div className="vertical">
              <div className="base">
                <div className="left">
                  <div className="title-homePage-small"> Tài khoản </div>
                  <div className="amount-homePage"> 1 </div>
                </div>
                <div className="righ">
                  <PersonAdd className="icons"> </PersonAdd>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="statistical-homepage">
          <div className="title-statistical-homepage">
            {" "}
            Thông kê số lượng đơn hàng{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thongke;
