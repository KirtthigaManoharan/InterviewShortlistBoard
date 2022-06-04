import React, { useState, useEffect } from "react";
import axios from "axios";

import Board from "./Board/index";
import Header from "./Header";
import NavBar from "./NavBar";
import BoardMeta from "./BoardMeta";

const ShortlistingBoard = () => {
  const [originalDataSet, setOriginalDataSet] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [initialData, setInitialData] = useState({});

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "column") {
      const newColumnOrder = Array.from(initialData.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);
      setInitialData((prevState) => ({
        ...prevState,
        columnOrder: newColumnOrder,
      }));
      setOriginalDataSet((prevState) => ({
        ...prevState,
        columnOrder: newColumnOrder,
      }));
      return;
    }

    const home = initialData.columns[source.droppableId];
    const foreign = initialData.columns[destination.droppableId];

    if (home === foreign) {
      const newUserListIds = Array.from(home.taskIds);
      newUserListIds.splice(source.index, 1);
      newUserListIds.splice(destination.index, 0, draggableId);

      const newHome = {
        ...home,
        taskIds: newUserListIds,
      };

      const latestRecord = {
        ...initialData,
        columns: {
          ...initialData.columns,
          [newHome.id]: newHome,
        },
      };

      setInitialData(latestRecord);
      setOriginalDataSet(latestRecord);
      return;
    }

    // moving from one list to another
    const homeTaskIds = Array.from(home.taskIds);
    homeTaskIds.splice(source.index, 1);
    const newHome = {
      ...home,
      taskIds: homeTaskIds,
    };

    const foreignTaskIds = Array.from(foreign.taskIds);
    foreignTaskIds.splice(destination.index, 0, draggableId);
    const newForeign = {
      ...foreign,
      taskIds: foreignTaskIds,
    };

    const latestRecord = {
      ...initialData,
      columns: {
        ...initialData.columns,
        [newHome.id]: newHome,
        [newForeign.id]: newForeign,
      },
    };
    setInitialData(latestRecord);
    setOriginalDataSet(latestRecord);
  };

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=60")
      .then((response) => {
        let { data } = response || {};
        let fetchingData = {};
        data.results.map((d, index) => {
          Object.assign(fetchingData, {
            [`task-${index + 1}`]: {
              id: `task-${index + 1}`,
              content: `${d.name.title} ${d.name.first} ${d.name.last}`,
            },
          });
        });
        const latestRecord = {
          tasks: fetchingData,
          columns: {
            "column-1": {
              id: "column-1",
              title: "Open",
              taskIds: [
                "task-1",
                "task-2",
                "task-3",
                "task-4",
                "task-5",
                "task-6",
                "task-7",
                "task-8",
                "task-9",
                "task-10",
              ],
            },
            "column-2": {
              id: "column-2",
              title: "Contacted",
              taskIds: [
                "task-11",
                "task-12",
                "task-13",
                "task-14",
                "task-15",
                "task-16",
                "task-17",
                "task-18",
                "task-19",
                "task-20",
              ],
            },
            "column-3": {
              id: "column-3",
              title: "Written Test",
              taskIds: [
                "task-21",
                "task-22",
                "task-23",
                "task-24",
                "task-25",
                "task-26",
                "task-27",
                "task-28",
                "task-29",
                "task-30",
              ],
            },
            "column-4": {
              id: "column-4",
              title: "Technical Round",
              taskIds: [
                "task-31",
                "task-32",
                "task-33",
                "task-34",
                "task-35",
                "task-36",
                "task-37",
                "task-38",
                "task-39",
                "task-40",
              ],
            },
            "column-5": {
              id: "column-5",
              title: "Culture Fit Round",
              taskIds: [
                "task-41",
                "task-42",
                "task-43",
                "task-44",
                "task-45",
                "task-46",
                "task-47",
                "task-48",
                "task-49",
                "task-50",
              ],
            },
            "column-6": {
              id: "column-6",
              title: "Shortlisted",
              taskIds: [
                "task-51",
                "task-52",
                "task-53",
                "task-54",
                "task-55",
                "task-56",
                "task-57",
                "task-58",
                "task-59",
                "task-60",
              ],
            },
          },
          columnOrder: [
            "column-1",
            "column-2",
            "column-3",
            "column-4",
            "column-5",
            "column-6",
          ],
        };
        setInitialData(latestRecord);
        setOriginalDataSet(latestRecord);
      })
      .catch((err) => console.log({ err }));
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setInitialData(originalDataSet);
    } else {
      let fetchingData = [];
      if (Object.keys(originalDataSet).length > 0) {
        Object.entries(originalDataSet.tasks).forEach(([key, value]) => {
          return (
            value.content.toLowerCase().includes(searchTerm.toLowerCase()) &&
            fetchingData.push(key)
          );
        });
        let columnsLocal = {};
        Object.entries(originalDataSet.columns).forEach(([key, value]) => {
          let newUsersList = [];
          value.taskIds.map((task) => {
            if (fetchingData.includes(task)) {
              newUsersList.push(task);
            }
          });
          Object.assign(columnsLocal, {
            [key]: {
              id: value.id,
              title: value.title,
              taskIds: newUsersList,
            },
          });
        });
        setInitialData((prevState) => ({
          ...prevState,
          columns: columnsLocal,
        }));
      }
    }
  }, [searchTerm]);

  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="shortlisting-board-container">
      <div className="navbar-container">
        <NavBar />
      </div>

      <div className="sectional-container">
        <Header handleInput={handleInput} />
        <BoardMeta />
        <Board initialData={initialData} onDragEnd={onDragEnd} />
      </div>
    </div>
  );
};

export default ShortlistingBoard;
