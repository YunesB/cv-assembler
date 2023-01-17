import { FC, useState } from "react";
import { DragDropContext, Draggable, DropResult } from "react-beautiful-dnd";

import { v4 as uuidv4 } from "uuid";

import { AddSectionButtons } from "./components/atoms/AddSectionButtons";
import { StrictModeDroppable } from "./components/molecules/StrictDroppable";
import { Section } from "./components/organisms/Section";
import { TSection } from "./projectTypes/general.types";
import {
  DATED_SECTION_TYPE,
  INITIAL_SECTIONS,
  SKILLS_SECTION_TYPE
} from "./utils/constants";

const EMPTY_TABLE_SECTION: TSection = {
  name: "section",
  title: "SECTION",
  type: DATED_SECTION_TYPE,
  id: "",
  data: []
};

const EMPTY_SKILL_SECTION: TSection = {
  name: "section",
  title: "SECTION",
  type: SKILLS_SECTION_TYPE,
  id: "",
  data: []
};

const App: FC = () => {
  const [sections, setSections] = useState<TSection[]>(INITIAL_SECTIONS);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const newItems = [...sections];
    const [removed] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, removed);
    setSections(newItems);
  };

  const handleAddTableSection = () => {
    setSections([...sections, { ...EMPTY_TABLE_SECTION, id: uuidv4() }]);
  };

  const handleAddSkillsSection = () => {
    setSections([...sections, { ...EMPTY_SKILL_SECTION, id: uuidv4() }]);
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
                className={`space-y-6 min-h-[400px]  mx-auto ${
                  snapshot.isDraggingOver ? "" : ""
                }`}
              >
                {sections.map(({ name, title, type, data }, index) => (
                  <Draggable key={name} draggableId={name} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`${snapshot.isDragging ? "opacity-75" : ""}`}
                      >
                        <Section title={title} type={type} data={data} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </StrictModeDroppable>
        </DragDropContext>
        <AddSectionButtons
          addTable={handleAddTableSection}
          addSkills={handleAddSkillsSection}
          className="mx-auto"
        />
      </div>
      <div className="bg-black w-[100vw] h-[100vh] fixed inset-0 z-0" />
    </>
  );
};

export default App;
