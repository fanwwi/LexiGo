import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/Store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export type StatesType = {
  error: null | string;
  loading: boolean;
  oneUser?: null ;
  currentUser?:null;
};
