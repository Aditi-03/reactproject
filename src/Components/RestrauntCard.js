const RestrauntCard=(props)=>{
    const {resData}= props;
    const {resName,cuisine,rating,eta,image}=resData;
return (
    <div className="resCard">
       
        <img className="resLogo" src={image} alt="logo"/>
        <h3> {resName}</h3>
        <h4> {cuisine}</h4>
        <h4> {rating}</h4>
        <h4> {eta}</h4>
    </div>
);
};
export default RestrauntCard;