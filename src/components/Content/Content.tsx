import "./Content.scss";
import { Tabs } from "antd";
import { useState } from "react";
import { DownOutlined, PlusOutlined } from "@ant-design/icons";
import RequestResponse from "../RequestResponse/RequestResponse";
import RequestLabel from "../RequestLabel/RequestLabel";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { addTab, removeTab } from "../../store/features/Tabs/tabsSlice";

const Content = () => {
  const dispatch = useDispatch();
  const [activeKey, setActiveKey] = useState("");
  const allTabs = useSelector((state: RootState) => state.tabs.allTabs);

  const allItems = allTabs.map((_, index) => {
    return {
      label: <RequestLabel index={index} />,
      children: <RequestResponse index={index} />,
      key: `newTab${index}`,
    };
  });

  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey);
  };

  const add = () => {
    dispatch(addTab());
    setActiveKey(`newTab${allTabs.length}`);
  };

  const remove = (targetKey: string) => {
    dispatch(removeTab(targetKey));
    setActiveKey(`newTab${allTabs.length - 2}`);
  };

  const onEdit = (
    targetKey: React.MouseEvent | React.KeyboardEvent | string,
    action: "add" | "remove"
  ) => {
    if (action === "add") {
      add();
    } else {
      remove(targetKey.toString());
    }
  };

  const addMoreIcon = (
    <div className="addMoreIcon">
      <span>Add Request</span>
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
        items={allItems}
        moreIcon={<DownOutlined />}
        addIcon={addMoreIcon}
      />
    </div>
  );
};

export default Content;
