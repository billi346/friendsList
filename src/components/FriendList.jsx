import React from "react";

const FriendList = ({ friends }) => {
  return (
    <ul className="friendsList">
      {friends.map((friend) => (
        <li key={friend.id} className="friendItem">
          <span className={friend.isOnline ? "online" : "offline"}></span>
          <img src={friend.avatar} alt={friend.name} width={200} />
          <p>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
// import React from "react";

// const Statistics = ({ data }) => {
//   return (
//     <ul className="dataList">
//       {data.map((item) => (
//         <li key={item.id} className="dataItem">
//           <p>{item.label}</p>
//           <p>{item.percentage}%</p>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default Statistics;
