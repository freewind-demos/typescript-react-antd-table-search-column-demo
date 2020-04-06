import {SearchOutlined} from '@ant-design/icons';
import {Button, Input, Table} from 'antd';
import {ColumnType, FilterDropdownProps} from 'antd/lib/table/interface';
import React, {useRef} from 'react'

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
  const searchInputRef = useRef<Input | null>(null)
  return <div>
    <Table
      columns={[
        {
          title: 'Name',
          dataIndex: 'name',
          render: (text: string) => text,
          filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => {
            console.log("### filterDropdown", {setSelectedKeys, selectedKeys, confirm, clearFilters})
            return <div style={{padding: 8}}>
              <Input
                ref={searchInputRef}
                placeholder={'Search'}
                value={selectedKeys[0]}
                onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                onPressEnter={confirm}
                style={{width: 188, marginBottom: 8, display: 'block'}}
              />
              <Button
                type="primary"
                onClick={confirm}
                icon={<SearchOutlined/>}
                size="small"
                style={{width: 90, marginRight: 8}}
              >
                Search
              </Button>
              <Button size="small" style={{width: 90}} onClick={clearFilters}>
                Reset
              </Button>
            </div>
          },
          filterIcon: filtered => <SearchOutlined style={{color: filtered ? '#1890ff' : undefined}}/>,
          onFilter: (value, record) => {
            console.log('### onFilter:', {value, record})
            return record.name
              .toString()
              .toLowerCase()
              .includes(value.toString().toLowerCase())
          },
          onFilterDropdownVisibleChange: (visible) => {
            console.log("### onFilterDropdownVisibleChange", {visible});
            if (visible) {
              setTimeout(() => searchInputRef.current?.select());
            }
          },
        },

        new class implements ColumnType<Data> {
          title = 'Name'
          dataIndex = 'name'
          render = (text: string) => text
          searchInput: Input | null = null;

          filterDropdown = ({setSelectedKeys, selectedKeys, confirm, clearFilters}: FilterDropdownProps) => {
            console.log("### filterDropdown", {this: this, setSelectedKeys, selectedKeys, confirm, clearFilters})
            return <div style={{padding: 8}}>
              <Input
                ref={node => {
                  console.log("### ref", {node})
                  this.searchInput = node
                  console.log("### this", this);
                }
                }
                placeholder={'Search'}
                value={selectedKeys[0]}
                onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                onPressEnter={confirm}
                style={{width: 188, marginBottom: 8, display: 'block'}}
              />
              <Button
                type="primary"
                onClick={confirm}
                icon={<SearchOutlined/>}
                size="small"
                style={{width: 90, marginRight: 8}}
              >
                Search
              </Button>
              <Button size="small" style={{width: 90}} onClick={clearFilters}>
                Reset
              </Button>
            </div>
          };

          filterIcon = (filtered: boolean) => {
            return <SearchOutlined style={{color: filtered ? '#1890ff' : undefined}}/>
          }

          onFilter = (value: string | number | boolean, record: Data) => {
            console.log('### onFilter:', {value, record})
            return record.name
              .toString()
              .toLowerCase()
              .includes(value.toString().toLowerCase())
          }

          onFilterDropdownVisibleChange = (visible: boolean) => {
            console.log("### onFilterDropdownVisibleChange", {visible});
            if (visible) {
              setTimeout(() => {
                console.log("### onFilterDropdownVisibleChange.setTime", {this: this, visible});
                this.searchInput?.select()
              });
            }
          }
        }
      ]}
      dataSource={data}
    />
  </div>
};
