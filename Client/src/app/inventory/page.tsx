"use client";

import { useGetProductsQuery } from "@/state/api";
import Header from "../components/Header";

import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "productId",
    headerName: "ID",
    width: 90,
    cellClassName: "dark:!text-white",
  },
  {
    field: "name",
    headerName: "Product Name",
    width: 200,
    cellClassName: "dark:!text-white",
  },
  {
    field: "price",
    headerName: "Price",
    width: 110,
    type: "number",
    valueGetter: (value, row) => `${row.price}`,
    cellClassName: "dark:!text-white",
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 110,
    type: "number",
    valueGetter: (value, row) => (row.rating ? row.rating : "N/A"),
    cellClassName: "dark:!text-white",
  },
  {
    field: "stockQuantity",
    headerName: "Stock Quantity",
    width: 150,
    type: "number",
    cellClassName: "dark:!text-white",
  },
];

const Inventory = () => {
  const { data: products, isError, isLoading } = useGetProductsQuery();
  if (isLoading) {
    return <div className="py-4">Loading...</div>;
  }
  if (isError || !products) {
    return (
      <div className="text-center text-red-500">Failed to fetch products</div>
    );
  }
  return (
    <div className="flex flex-col">
      <Header name="Inventory" />
      <DataGrid
        rows={products}
        columns={columns}
        getRowId={(row) => row.productId}
        checkboxSelection
        className="bg-white dark:bg-black shadow rounded-lg border border-gray-200 mt-5 text-gray-700"
      />
    </div>
  );
};

export default Inventory;
