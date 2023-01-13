import { FC } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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
  return (
    <>
      <div className="bg-black w-fll h-full p-10 relative z-10">
        <DragDropContext onDragEnd={() => console.log("1")}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={`space-y-6 ${
                  snapshot.isDraggingOver ? "bg-sky-500" : ""
                }`}
              >
                {SECTIONS.map(({ name, title }, index) => (
                  <Draggable key={name} draggableId={name} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`${snapshot.isDragging ? "opacity-75" : ""}`}
                      >
                        <Section title={title} />
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <div className="bg-black w-[100vw] h-[100vh] fixed inset-0 z-0" />
    </>
  );
};

export default App;
