import "./RequestLabel.scss";
import { Input } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { setName } from "../../store/features/Tabs/tabsSlice";

interface IRequestLabelProps {
  index: number;
}

const RequestLabel = ({ index }: IRequestLabelProps) => {
  const dispatch = useDispatch();
  const allTabs = useSelector((state: RootState) => state.tabs.allTabs);
  const name = allTabs[index].name;
  return (
    <div className="request-label">
      <Input
        value={name}
        onKeyDown={(e) => e.stopPropagation()}
        onChange={(e) =>
          dispatch(
            setName({
              index: index,
              value: e.target.value,
            })
          )
        }
      />
    </div>
  );
};

export default RequestLabel;
