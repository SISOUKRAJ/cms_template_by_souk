import { Table } from "antd";
import Card_Content from "../../components/Card/card_content";
import { useGetTestQuery } from "../../stores/services/test";
import type { TableColumnsType } from "antd";

const Home = () => {
  const {
    data: testData,
    isLoading: testDataLoading,
    error: testError,
  } = useGetTestQuery({});

  const data = testData?.map((item: any) => {
    return { key: item.id, ...item };
  });

  interface DataType {
    key: React.Key;
    userId: string;
    id: string;
    title: string;
    body: string;
  }

  const columns: TableColumnsType<DataType> = [
    {
      title: "No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Body",
      dataIndex: "body",
      key: "body",
    },
    // {
    //   title: 'Column 2',
    //   dataIndex: 'address',
    //   key: '2',
    //   width: 150,
    // },
    // {
    //   title: 'Column 3',
    //   dataIndex: 'address',
    //   key: '3',
    //   width: 150,
    // },
    // {
    //   title: 'Column 4',
    //   dataIndex: 'address',
    //   key: '4',
    //   width: 150,
    // },
    // {
    //   title: 'Column 5',
    //   dataIndex: 'address',
    //   key: '5',
    //   width: 150,
    // },
    // {
    //   title: 'Column 6',
    //   dataIndex: 'address',
    //   key: '6',
    //   width: 150,
    // },
    // {
    //   title: 'Column 7',
    //   dataIndex: 'address',
    //   key: '7',
    //   width: 150,
    // },
    // { title: 'Column 8', dataIndex: 'address', key: '8' },
    {
      title: "Action",
      key: "operation",
      width: 100,
      render: () => <a>action</a>,
    },
  ];

  return (
    <Card_Content loading={testDataLoading} error={testError}>
      Home
      <Table columns={columns} dataSource={data} />
    </Card_Content>
  );
};

export default Home;
