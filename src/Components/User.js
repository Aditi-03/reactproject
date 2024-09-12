const User=(props)=>{
    const {name}= props;
    return (<div className="userCard">
        <h2>Name: {name}</h2>
        <h2>Location: Ambikapur, Chhatisgarh</h2>
    </div>
    );
}
export default User;