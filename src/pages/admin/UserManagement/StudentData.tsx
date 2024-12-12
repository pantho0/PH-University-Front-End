import {
  Button,
  Pagination,
  Space,
  Table,
  TableColumnsType,
  TableProps,
} from "antd";
import { useState } from "react";
import { TQueryParams } from "../../../types";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagement.api";
import { TStudent } from "../../../types/userManagement.types";

export type TTableData = Pick<
  TStudent,
  "id" | "fullName" | "email" | "contactNo"
>;

const StudentData = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [params, setParams] = useState<TQueryParams[]>([]);
  const {
    data: studentData,
    isLoading,
    isFetching,
  } = useGetAllStudentsQuery([
    { name: "page", value: page },
    { name: "sort", value: "id" },
    { name: "limit", value: limit },
    ...params,
  ]);

  const metaData = studentData?.meta;

  const tableData = studentData?.data?.map(
    ({ _id, id, fullName, email, contactNo }) => ({
      key: _id,
      id,
      fullName,
      email,
      contactNo,
    })
  );
  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "fullName",
      //   filters: [
      //     {
      //       text: "Autumn",
      //       value: "Autumn",
      //     },
      //     {
      //       text: "Fall",
      //       value: "Fall",
      //     },
      //     {
      //       text: "Summer",
      //       value: "Summer",
      //     },
      //   ],
    },
    {
      title: "Roll",
      dataIndex: "id",
      //   filters: [
      //     {
      //       text: "2024",
      //       value: "2024",
      //     },
      //     {
      //       text: "2025",
      //       value: "2025",
      //     },
      //     {
      //       text: "2026",
      //       value: "2026",
      //     },
      //   ],
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Contact",
      dataIndex: "contactNo",
    },
    {
      title: "Action",
      render: () => {
        return (
          <div>
            <Space>
              <Button>Details</Button>
              <Button>Update</Button>
              <Button>Block</Button>
            </Space>
          </div>
        );
      },
      width: "1%",
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParams[] = [];
      filters.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );
      filters.year?.forEach((item) =>
        queryParams.push({ name: "year", value: item })
      );
      setParams(queryParams);
    }
  };

  return (
    <>
      <Table
        columns={columns}
        loading={isFetching}
        dataSource={tableData}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
        pagination={false}
      />
      <Pagination
        onChange={(value, pageSizeOptions) => [
          setPage(value),
          setLimit(pageSizeOptions),
        ]}
        pageSize={limit}
        total={metaData?.total}
      />
    </>
  );
};

export default StudentData;
