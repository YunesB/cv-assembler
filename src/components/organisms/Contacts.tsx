import { ChangeEvent, FC, useMemo, useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { TContact, TContactType } from "../../projectTypes/general.types";
import {
  COMMON_INPUT_CLASSES,
  COMMON_LINK_CLASSES,
  INITIAL_CONTACTS,
  LINK_TYPE,
  MAIL_TYPE,
  MEDIUM_SIZE,
  PHONE_TYPE,
  STRING_TYPE
} from "../../utils/constants";
import { CheckIcon, CloseIcon, DeleteIcon, PlusIcon } from "../../utils/icons";
import { Icon } from "../atoms/Icon";
import { IconButton } from "../atoms/IconButton";
import { ContactTypeSelector } from "../molecules/ContactTypeSelector";

const EMPTY_CONTACT_FIELD: TContact = {
  type: STRING_TYPE,
  value: "Contact data",
  id: ""
};

const getStaticDataContainer = ({ type, value }: TContact) => {
  switch (type) {
    case LINK_TYPE:
      return (
        <a
          href={value}
          target="_blank"
          rel="noreferrer"
          className={`${COMMON_LINK_CLASSES}`}
        >
          {value}
        </a>
      );
    case MAIL_TYPE:
      return (
        <a href={`mailto:${value}`} className={`${COMMON_LINK_CLASSES}`}>
          {value}
        </a>
      );
    case PHONE_TYPE:
      return (
        <a href={`callto:${value}`} className={`${COMMON_LINK_CLASSES}`}>
          {value}
        </a>
      );
    default:
      return <span>{value}</span>;
  }
};

type TProps = {
  data: TContact;
  onDelete: (id: string) => void;
};

const ContactItem: FC<TProps> = ({ data, onDelete }) => {
  const { type, value, id } = data;

  const [isEdited, setEdited] = useState(false);
  const [currentType, setCurrentType] = useState(type);
  const [initialValues, setInitialValues] = useState(value);
  const [inputValue, setInputValue] = useState(value);

  const StaticContainer = useMemo(
    () => getStaticDataContainer({ ...data, value: inputValue }),
    [data, inputValue]
  );

  const handleCancel = () => {
    setInputValue(initialValues);
    setEdited(false);
  };

  const handleConfirm = () => {
    setInitialValues(inputValue);
    setEdited(false);
  };

  const handleTypeChange = (type: TContactType) => {
    setCurrentType(type);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  if (isEdited) {
    return (
      <li className="mt-5 flex items-center justify-between space-x-2">
        <ContactTypeSelector type={currentType} changeType={handleTypeChange} />
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className={`bg-transparent ${COMMON_INPUT_CLASSES}`}
        />
        <span className="flex space-x-2">
          <IconButton src={CheckIcon} onClick={handleConfirm} />
          <IconButton src={CloseIcon} onClick={handleCancel} />
          <IconButton src={DeleteIcon} onClick={() => onDelete(id)} />
        </span>
      </li>
    );
  }

  return (
    <li
      className="h-[32px] mt-5 hover:opacity-60 transition-all cursor-pointer flex items-center"
      onClick={() => setEdited(true)}
    >
      {StaticContainer}
    </li>
  );
};

const AddButton: FC<{ onAdd: () => void }> = ({ onAdd }) => {
  return (
    <button
      type="button"
      className="w-full flex spacy-y-2 items-center justify-center h-[25px] hover:bg-blue-50"
      onClick={onAdd}
    >
      <Icon src={PlusIcon} size={MEDIUM_SIZE} />
    </button>
  );
};

export const Contacts: FC = () => {
  const [contacts, setContacts] = useState(INITIAL_CONTACTS);

  const handleDelete = (id: string) => {
    const filteredData = contacts.filter((c) => c.id !== id);
    setContacts(filteredData);
  };

  const handleAddLine = () => {
    setContacts([...contacts, { ...EMPTY_CONTACT_FIELD, id: uuidv4() }]);
  };

  return (
    <ul className="border-t-2 border-white space-y-2 pt-4">
      {contacts.map((data, index) => (
        <ContactItem data={data} key={data.id} onDelete={handleDelete} />
      ))}

      <AddButton onAdd={handleAddLine} />
    </ul>
  );
};
