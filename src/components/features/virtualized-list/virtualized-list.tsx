import { useState } from "react";

const VirtualizedList = ({
  items,
  withVirtualization,
}: {
  items: string[];
  withVirtualization: boolean;
}) => {
  const [scrollTop, setScrollTop] = useState(0);

  const CONTAINER_HEIGHT = 400;
  const ITEM_HEIGHT = 50;
  const BUFFER_SIZE = 10;

  const TOTAL_ITEMS = items.length;

  const startIndex = Math.floor(scrollTop / ITEM_HEIGHT);
  const endIndex = Math.min(
    startIndex + Math.ceil(CONTAINER_HEIGHT / ITEM_HEIGHT),
    items.length
  );

  const bufferedStartIndex = Math.max(0, startIndex - BUFFER_SIZE);
  const bufferedEndIndex = Math.min(items.length, endIndex + BUFFER_SIZE);

  const VISIBLE_ITEMS = items.slice(bufferedStartIndex, bufferedEndIndex);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  return (
    <div
      className=" h-[400px] overflow-y-auto w-[500px]"
      onScroll={handleScroll}
    >
      {withVirtualization ? (
        <div
          className="flex relative flex-col gap-2"
          style={{
            height: `${TOTAL_ITEMS * ITEM_HEIGHT}px`,
          }}
        >
          {VISIBLE_ITEMS.map((item, index) => {
            const actualIndex = bufferedStartIndex + index;
            return (
              <ListItem
                key={item}
                item={item}
                style={{
                  position: "absolute",
                  top: `${actualIndex * ITEM_HEIGHT}px`,
                  height: `${ITEM_HEIGHT}px`,
                }}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex relative flex-col gap-2">
          {items.map((item) => {
            return <ListItem key={item} item={item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default VirtualizedList;

const ListItem = ({
  item,
  style,
}: {
  item: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div className=" w-full" style={style}>
      <div className="bg-blue-600 w-full p-2 rounded-sm">{item}</div>
    </div>
  );
};
