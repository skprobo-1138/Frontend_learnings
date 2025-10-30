import "./UserCard.css";

// function UserCard(obj) {
//   return (
//     <div className="user-card">
//       <img
//         src="https://via.placeholder.com/120"
//         alt="User"
//         className="user-image"
//       />
//       <h2 className="user-name">{obj.name}</h2>
//       <p className="user-bio">
//         {obj.bio}
//       </p>
//       <button className="user-btn">Follow</button>
//     </div>
//   );
// }
function UserCard({ name, bio, age }) {
  return (
    <div className="user-card">
      <img
        src="https://via.placeholder.com/120"
        alt="User"
        className="user-image"
      />
      <h2 className="user-name">{name}</h2>
      <h2 >{age}</h2>
      <p className="user-bio">
        {bio}
      </p>
      <button className="user-btn">Follow</button>
    </div>
  );
}

export default UserCard;
