import React, { useEffect, useState } from "react";

const initUser = {
  avatar: "https://robohash.org/rerumetiure.bmp?size=50x50&set=set1",
  userId: 1234567890,
  name: "Trần Hải Dương",
  code: 1234567,
  phone: "0936149167",
  clientname: "Công ty A",
  contractCode: "2020Covid19I",
  residentID:"031123123123",
  address:"Dịch Vọng, Cầu Giấy, Hà Nội",
  plate: "15B1-97165",
  creditLimit: 100000000,
  creditRemain: 90000000,
  bill:[
    {
      id: 1,
      contractCode:"2020Covid19I",
      transactionDate: "2020-10-04",
      station:"Xuân Thủy, Cầu Giấy, Hà Nội",
      status: "Accepted",
      product:"Xăng E5-RON 92",
      quantity: 10,
      total: "170000 VNĐ"
    },
    {
      id:2,
      contractCode:"2020Covid19I",
      transactionDate: "2020-10-04",
      station:"Xuân Thủy, Cầu Giấy, Hà Nội",
      status: "Accepted",
      product:"Xăng E5-RON 92",
      quantity: 10,
      total: "170000 VNĐ"
    },
    {
      id:3,
      contractCode:"2020Covid19I",
      transactionDate: "2020-10-04",
      station:"Xuân Thủy, Cầu Giấy, Hà Nội",
      status: "Accepted",
      product:"Xăng E5-RON 92",
      quantity: 10,
      total: "170000 VNĐ"
    },
    {
      id:4,
      contractCode:"2020Covid19I",
      transactionDate: "2020-10-04",
      station:"Xuân Thủy, Cầu Giấy, Hà Nội",
      status: "Accepted",
      product:"Xăng E5-RON 92",
      quantity: 10,
      total: "170000 VNĐ"
    },
    {
      id:5,
      contractCode:"2020Covid19I",
      transactionDate: "2020-10-04",
      station:"Xuân Thủy, Cầu Giấy, Hà Nội",
      status: "Accepted",
      product:"Xăng E5-RON 92",
      quantity: 10,
      total: "170000 VNĐ"
    },
    {
      id:6,
      contractCode:"2020Covid19I",
      transactionDate: "2020-10-04",
      station:"Xuân Thủy, Cầu Giấy, Hà Nội",
      status: "Accepted",
      product:"Xăng E5-RON 92",
      quantity: 10,
      total: "170000 VNĐ"
    },
    {
      id:7,
      contractCode:"2020Covid19I",
      transactionDate: "2020-10-04",
      station:"Xuân Thủy, Cầu Giấy, Hà Nội",
      status: "Accepted",
      product:"Xăng E5-RON 92",
      quantity: 10,
      total: "170000 VNĐ"
    },
    {
      id:8,
      contractCode:"2020Covid19I",
      transactionDate: "2020-10-04",
      station:"Xuân Thủy, Cầu Giấy, Hà Nội",
      status: "Accepted",
      product:"Xăng E5-RON 92",
      quantity: 10,
      total: "170000 VNĐ"
    },
    {
      id:9,
      contractCode:"2020Covid19I",
      transactionDate: "2020-10-04",
      station:"Xuân Thủy, Cầu Giấy, Hà Nội",
      status: "Accepted",
      product:"Xăng E5-RON 92",
      quantity: 10,
      total: "170000 VNĐ"
    },
    {
      id:10,
      contractCode:"2020Covid19I",
      transactionDate: "2020-10-04",
      station:"Xuân Thủy, Cầu Giấy, Hà Nội",
      status: "Accepted",
      product:"Xăng E5-RON 92",
      quantity: 10,
      total: "170000 VNĐ"
    },
  ]
  
  
};

export default function () {
  const [user, setUser] = useState(null);
  const [bill, setBill] = useState(null);

  useEffect(() => {
    setUser(initUser);
  }, []);

  useEffect(()=>{
    setBill(initUser.bill)
  },[])

  return {
    user: user,
    bill: bill
  };
}
