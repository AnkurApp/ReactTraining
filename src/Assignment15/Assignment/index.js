import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserApi } from "../Modules/action";
import UserTable from "../Components/userTable";

export default function Assignment15() {
  const dispatch = useDispatch();
  let { user } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(UserApi());
  }, []);

  return (
    <>
      <UserTable user={user} />
    </>
  );
}
