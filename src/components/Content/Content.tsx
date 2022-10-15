import { Tabs } from 'antd';
import { useRef, useState } from 'react';
import './Content.scss';
import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import { Tab } from 'rc-tabs/lib/interface';
import Request from '../Request/Request';
import Response from '../Response/Response';

const initialItems: Tab[] = [];

const Content = () => {
  const [activeKey, setActiveKey] = useState('');
  const [items, setItems] = useState(initialItems);
  const newTabIndex = useRef(0);

  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey);
  };

  const add = () => {
    // eslint-disable-next-line no-plusplus
    const newActiveKey = `newTab${newTabIndex.current++}`;
    const newPanes = [...items];
    newPanes.push({
      label: 'New',
      children: (
        <div className="request-response-container">
          <Request />
          <Response />
        </div>
      ),
      key: newActiveKey,
    });
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey: string) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = items.filter((item) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const onEdit = (
    targetKey: React.MouseEvent | React.KeyboardEvent | string,
    action: 'add' | 'remove'
  ) => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey.toString());
    }
  };

  const addMoreIcon = (
    <div className="addMoreIcon">
      <span>New Request</span>
      <PlusOutlined />
    </div>
  );

  return (
    <div className="content">
      <Tabs
        type="editable-card"
        onChange={onChange}
        activeKey={activeKey}
        onEdit={onEdit}
        items={items}
        moreIcon={<DownOutlined />}
        addIcon={addMoreIcon}
      />
    </div>
  );
};

export default Content;
