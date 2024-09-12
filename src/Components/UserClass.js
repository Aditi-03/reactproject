import React from "react";
class UserClass extends React.Component{
    constructor(props) {
        super(props);
        // console.log(props);
        this.state={
            userInfo :{
                name:"A",
                ID:0
            },
        };
        
    }

    
    
     async componentDidMount(){
        const data= await fetch("https://api.github.com/users/Aditi03");
        const json= await data.json();
       
        this.setState({
            userInfo: json
        })
    }

    render()
    {   
         const {login,id}= this.state.userInfo;
         
        return (<div className="userCard">
        
        
        <h2>Name: {login}</h2>
        <h2>ID: {id}</h2>
    </div>
    )
}
}

export default UserClass;