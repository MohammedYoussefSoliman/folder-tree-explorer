import Accordion from "../Accordion/Accordion";
import "./AsideExplorer.css";
import { SideItem } from "../../types/common.types";
import { Icon } from "../Icon";

type AsideExplorerProps = {
  sideItems: SideItem;
};

export default function AsideExplorer({ sideItems }: AsideExplorerProps) {
  return (
    <div className="aside--wrapper">
      <Accordion
        trigger={
          sideItems.type === "folder" ? (
            ({ open }) => (
              <div className="folder--name">
                <Icon
                  name={open ? "SquareMinus" : "SquarePlus"}
                  size={16}
                  color="#f4e80a"
                />

                <span className="label">{sideItems.name}</span>
              </div>
            )
          ) : (
            <div className="file--name">
              <span
                onClick={() => console.log(sideItems.name)}
                className="label"
              >
                {sideItems.name}
              </span>
            </div>
          )
        }
      >
        {sideItems.type === "folder" &&
          sideItems.data &&
          sideItems.data.map((item) => {
            return <AsideExplorer sideItems={item} />;
          })}
      </Accordion>
    </div>
  );
}
