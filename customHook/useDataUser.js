import React, { useEffect, useState } from "react";

const initUser = {
  avatar: "https://robohash.org/rerumetiure.bmp?size=50x50&set=set1",
  userId: 1234567890,
  name: "Trần Hải Dương",
  code: 1234567,
  phone: "0936149167",
  clientname: "Công ty A",
  contractCode: "2020Covid19I",
  plate: "15B1-97165",
  creditLimit: 100000000,
  creditRemain: 90000000,
};

export default function () {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(initUser);
  }, []);

  return {
    user: user,
  };
}
