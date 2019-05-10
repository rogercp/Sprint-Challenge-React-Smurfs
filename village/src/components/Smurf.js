import React from 'react';




const Smurf =props=> {

  // onDelete =id=>{
  //   console.log(id)
  //     this.props.deleteSmurf(id);

  // }

 
  return (
    <div className="Smurf" style={{padding:"20px"}}>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button 
      // onClick={()=>this.onDelete(this.props.id)}
      >delete</button>
    </div>
  );
};


Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

