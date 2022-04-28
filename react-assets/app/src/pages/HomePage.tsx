import React, { useEffect, useReducer, useContext, useRef } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '& header': {
      color: 'purple',
    },
    '& li': {
      fontSize: '1.7rem',
      margin: 10,
    },
  },
}));

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface ITodoItem {
  Id: number;
  Description: string;
  Completed: boolean;
}

interface IAction {
  type: string;
  payload?: {};
}

const ADD = 'Add_Entity';
const DELETE = 'Delete_Entity';
const UPDATE = 'Update_Entity';
const RESET = 'Reset_Entity';

const appReducer = (state: ITodoItem[], action: IAction) => {
  console.log(state, action);
  switch (action.type) {
    case ADD:
      const item: ITodoItem = {
        Id: Date.now(),
        Description: '',
        Completed: false,
      };
      return [...state, item];

    case DELETE:
      return state.filter((item) => item.Id !== action.payload);

    case UPDATE:
      return state.map((item) => {
        if (item.Id === action.payload) {
          const element: ITodoItem = {
            ...item,
            Completed: !item.Completed,
          };
          return element;
        }
        return item;
      });

    case RESET:
      const newState = action.payload as ITodoItem[];
      return newState;

    default:
      return state;
  }
};

const Context = React.createContext([] as any);

const HomePage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header>
        <h1>React Playground with Material UI and Typescript</h1>
      </header>
      <section>
        <ol type="I">
          <li>
            <a href="/">Dashboard</a>
          </li>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/welcome">Welcome</a>
          </li>
          <li>
            <a href="/carousel">Carousel</a>
          </li>
          <li>
            <a href="/grid">Grid (Material UI)</a>
          </li>
          <li>
            <a href="/grid2">Grid 2 (Material UI)</a>
          </li>
          <li>
            <a href="/grid3">Grid 3 (Material UI)</a>
          </li>
          <li>
            <a href="/card">Card (Material UI)</a>
          </li>
          <li>
            <a href="/playground1">Playground Javascript</a>
          </li>
          <li>
            <a href="/playground2">Playground TypeScript</a>
          </li>

          <li>
            <a href="/provider">Provider</a>
          </li>
          <li>
            <a href="/playground">Steppers (...)</a>
          </li>
          <li>
            <a href="/drawer">Drawer (...)</a>
          </li>
          <li>
            <a href="/timeline">Timeline (...)</a>
          </li>
          <li>
            <a href="/context-hook">Context Hook (...)</a>
          </li>
        </ol>
      </section>
    </div>
  );
};

interface ITodoListProps {
  items: ITodoItem[];
}

const TodoList: React.FC<ITodoListProps> = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <TodoListItem key={item.Id} {...item} />
      ))}
    </>
  );
};

const TodoListItem: React.FC<ITodoItem> = ({ Id, Description, Completed }) => {
  const dispatch = useContext(Context);
  return (
    <div key={Id}>
      <input
        type="checkbox"
        defaultChecked={Completed}
        onChange={() => dispatch({ type: UPDATE, payload: Id })}
      ></input>
      <input
        type="text"
        defaultValue={Description}
        onChange={() => dispatch({ type: UPDATE, payload: Id })}
      />
      <button onClick={() => dispatch({ type: DELETE, payload: Id })}>Delete</button>
    </div>
  );
};

export default HomePage;
