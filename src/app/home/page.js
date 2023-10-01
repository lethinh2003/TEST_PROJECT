"use client";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
const callDataApi = async () => {
  const results = await axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT_SERVER}/api/v1/product-catesgories?gender=men`
  );
  return results.data;
};
const Home = () => {
  const getListQuery = useQuery(["product-categories", "men"], callDataApi, {
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
  });
  const {
    data: productCategories,
    isLoading,
    isFetching,
    isError: isErrorQuery,
    error,
    refetch,
  } = getListQuery;
  useEffect(() => {
    if (isErrorQuery) throw new Error(error.response.data.message);
  }, [isErrorQuery]);
  return (
    <>
      <Box
        sx={{
          marginTop: "10rem",
          width: 500,
          backgroundColor: "background.default",
        }}
      >
        <Typography
          sx={{
            fontSize: "1rem",
          }}
        >
          Home page
        </Typography>
        <Typography
          sx={{
            fontSize: "1rem",
          }}
        >
          List Categories
        </Typography>
        <ul>
          {productCategories?.data?.map((item) => {
            return ProductCategoryItem(item);
          })}
        </ul>
      </Box>
    </>
  );
};

const ProductCategoryItem = (data) => {
  return (
    <li key={data._id}>
      {data.product_category_name} - {data.product_category_keyword}
    </li>
  );
};
export default Home;
