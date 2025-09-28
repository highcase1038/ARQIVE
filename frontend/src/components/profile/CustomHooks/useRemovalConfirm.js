import { useState } from "react";
import { useDispatch } from "react-redux";
import { unFavoriteProfile } from "../../../actions/users";
const useRemovalConfirm = (onSubmit) => {
  const [removalModalState, setremovalModalState] = useState(false);
  const [loginregisterModalState, setloginregisterModalState] = useState(false);
  const [removalFav, setremovalFav] = useState("");
  const dispatch = useDispatch();
  const removalToggle = (id) => {
    setremovalModalState(!removalModalState);
    setremovalFav(id);
  };
  const loginToggle = () => {
    setloginregisterModalState(!loginregisterModalState);
  };
  const onRemovalSubmit = () => {
    dispatch(unFavoriteProfile(removalFav));
    setremovalModalState(!removalModalState);
  };
  const onDeleteHome = () => {
    onSubmit(removalFav);
    setremovalModalState(!removalModalState);
  };
  const onConfirmDelete = () => {
    onSubmit();
  };
  return {
    removalModalState,
    removalToggle,
    onRemovalSubmit,
    removalFav,
    onDeleteHome,
    onConfirmDelete,
    loginToggle,
    setloginregisterModalState,
    loginregisterModalState,
  };
};

export default useRemovalConfirm;
