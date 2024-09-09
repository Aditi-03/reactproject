
const DummyCard=(props)=>{
    const {dummyData}= props;
    // const {resName,cuisine,rating,eta,image}=dummyData;
    const {avgRating,id}=dummyData;
return (
    <div className="resCard">
     
        <h4>{avgRating}</h4>
        <h4>{id}</h4>
    </div>
);
};

 export default DummyCard;