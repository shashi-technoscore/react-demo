import * as React from "react";
import { UserCard } from "./UserCard";

import { BrowserRouter as Router, Route } from "react-router-dom";

const List = ({ match, history }) => (
  console.log("ROUTE>>", match),
  <div className="containerUser">
    <ul className="userCardlist">
      {userData.map(card => (
        <UserCard
          key={card.id}
          isSelected={match.params.id === card.id}
          history={history}
          {...card}
        />
      ))}
    </ul>
  </div>
);

export const UserCardList = () => (
  <Router>
    <Route path={["/react-demo/:id", "/react-demo"]} component={List} />
  </Router>
);

const userData = [

  {
    id: "c",
    name: "User 1",
  },

  {
    id: "f",
    name: "User 2",
  },

  {
    id: "a",
    name: "User 3",
  },

  {
    id: "g",
    name: "User 3",
  },

  {
    id: "d",
    name: "User 4",
  },

  {
    id: "h",
    name: "User 5",
  },

  {
    id: "e",
    name: "User 6",
  },

  {
    id: "b",
    name: "User 6",
  }
];
