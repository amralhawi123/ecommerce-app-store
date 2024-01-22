import { useGetData } from "../../hooks/useGetData";
import { usePostData } from "../../hooks/usePostData";
import { CREAT_SUB_CATEGOEY, GET_ERROR, GET_SUB_CATEGOEY } from "../type";

// creat sub category
export const creatSubCategory = (data) => async (dispatch) => {
  try {
    const respons = await usePostData(`/api/v1/subcategories`, data);

    dispatch({
      type: CREAT_SUB_CATEGOEY,
      payload: respons,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// creat sub category depend on id
export const getSubCategory = (id) => async (dispatch) => {
  try {
    const respons = await useGetData(`/api/v1/categories/${id}/subcategories`);

    dispatch({
      type: GET_SUB_CATEGOEY,
      payload: respons,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
