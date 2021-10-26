import { roboFailure, roboStart, roboSuccess } from "./robotRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(roboStart());
  try {
    const res = await publicRequest.get("/users";
    dispatch(roboSuccess(res.data));
  } catch (err) {
    dispatch(roboFailure());
  }
};
