import { useEffect } from "react";
import { getAllTypes } from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux"




const Types = () => {
  
    const dispatch = useDispatch();
    const types = useSelector((state)=> state.getAllTypes)
    //console.log(types)

    useEffect(()=>{
      dispatch(getAllTypes());
    },[dispatch]);
  
 
  return (
      <div>
        {/* <h2>Todos los tipos de pokemones</h2> */}
        {types.map((types) => (
          <div key={types.id}>
            <p>{types.nombre}</p>
          </div>
          
        ))} 
      </div>
    );
}  
  
  

         
         
         

export default Types;