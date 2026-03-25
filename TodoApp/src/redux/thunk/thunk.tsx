import { ResetLoading, startLoading, increment, reset } from "../CreateSlice/todoSlice";
import { AppDispatch } from "../store/store";

export const IncrementAsync = () => {

  return (dispatch: AppDispatch) => {
    dispatch(startLoading());

    setTimeout(() => {
      dispatch(increment());
    }, 2000);

  };
};

export const Reset = () => {

  return (dispatch: AppDispatch) => {
    dispatch(ResetLoading());

    setTimeout(() => {
      dispatch(reset())
    },
      2000);
  };


};
