import {Table} from 'antd';
import React from 'react'
import {tableColumnTextFilterConfig} from './tableUtils';

type Data = {
  key: string,
  name: string
}

const data: Data[] = [
  {
    key: '1',
    name: 'John Brown',
  },
  {
    key: '2',
    name: 'Jim Green',
  },
  {
    key: '3',
    name: 'Joe Black',
  },
]


export default function Hello() {
  return <div>
    <Table
      columns={[
        {
          title: 'Name',
          dataIndex: 'name',
          render: (text: string) => text,
          ...tableColumnTextFilterConfig<Data>(),
          onFilter: (value, record) => {
            return record.name
              .toString()
              .toLowerCase()
              .includes(value.toString().toLowerCase())
          },
        },
      ]}
      dataSource={data}
    />
  </div>
};
