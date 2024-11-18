import { GetItem } from "../types";
import TodoItem from "./TodoItem";
import Paper from "../layouts/Paper";

export interface ListProps {
  isLoading: boolean;
  data: GetItem[];
  title: string;
  onClick: () => void;
  onDeleteTodo: (id: number) => void;
  onEditTodo: (todo: GetItem) => void;
  bgColor: string;
  selectedBgColor: string;
  onPastClick: (id: number) => Promise<void>;
  onPresentClick: (id: number) => Promise<void>;
  onFutureClick: (id: number) => Promise<void>;
}

const List = ({
  isLoading,
  data,
  title,
  onClick,
  onDeleteTodo,
  onEditTodo,
  bgColor,
  selectedBgColor,
  onPastClick,
  onPresentClick,
  onFutureClick,
}: ListProps) => {
  return (
    <Paper onClick={onClick} title={title} bgColor={bgColor}>
      {isLoading ? (
        <div className="flex justify-center items-center h-full pt-4 pb-2">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-zinc-800"></div>
        </div>
      ) : data.length > 0 ? (
        data.map((data, index) => (
          <TodoItem
            key={data.id}
            data={data}
            index={index}
            onDeleteTodo={onDeleteTodo}
            onEditTodo={onEditTodo}
            selectedBgColor={selectedBgColor}
            onPastClick={onPastClick}
            onPresentClick={onPresentClick}
            onFutureClick={onFutureClick}
          />
        ))
      ) : (
        <div className="flex justify-center items-center h-full pt-4 pb-2">
          <p className="text-base">This List is still Empty.</p>
        </div>
      )}
    </Paper>
  );
};

export default List;
