import { FC, useState } from "react";
import { DragDropContext, Draggable, DropResult } from "react-beautiful-dnd";

import { StrictModeDroppable } from "./components/molecules/StrictDroppable";
import { Section } from "./components/organisms/Section";

const SECTIONS = [
  {
    name: "experience",
    title: "Experience"
  },
  {
    name: "education",
    title: "Education"
  }
];

const App: FC = () => {
  const [sections, setSections] = useState(SECTIONS);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const newItems = [...sections];
    const [removed] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, removed);
    setSections(newItems);
  };

  return (
    <>
      <div className="max-w-[980px] w-full h-full p-10 relative z-10 m-auto">
        <DragDropContext onDragEnd={onDragEnd}>
          <StrictModeDroppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={`space-y-6 min-h-[400px] ${
                  snapshot.isDraggingOver ? "" : ""
                }`}
              >
                {sections.map(({ name, title }, index) => (
                  <Draggable key={name} draggableId={name} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`${
                          snapshot.isDragging ? "opacity-75" : ""
                        } max-w-[90%]`}
                      >
                        <Section title={title} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </StrictModeDroppable>
        </DragDropContext>
      </div>
      <div className="bg-black w-[100vw] h-[100vh] fixed inset-0 z-0" />
    </>
  );
};

export default App;
