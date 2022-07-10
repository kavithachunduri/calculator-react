import { useState } from "react"


function Calculator(){
      const [value1 , setValue1] = useState('');
      const [value2 , setValue2] = useState('');
      const [result , setResult] = useState(null);
      const [operator, setOperator] = useState(null);

      const answer =() =>{
        if (operator=== '+') {
            setResult(parseInt(value1) + parseInt(value2));
        }
        if (operator=== '-') {
            setResult(parseInt(value1) - parseInt(value2)) ;
        }
        if (operator=== '*') {
            setResult(parseInt(value1) * parseInt(value2)) ;
        }
        if (operator=== '/') {
            setResult(parseInt(value1) / parseInt(value2)) ;
        }
    //    if(value1 === "e"){
    //        setResult= () => {return " write  anumber"}
    //    }

      }
    return(

        <div className="container">
              <h1>Calc with React!</h1>
              
              <div className="add">

                <input type="text" name="value1" placeholder = "Enter a number"  value={value1} onChange={(e)=>setValue1(e.target.value)} onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }}/><br />

               <button  onClick={()=>setOperator('+')}>+</button>
               <button  onClick={()=>setOperator('-')}>-</button>
               <button  onClick={()=>setOperator('*')}>*</button>
               <button  onClick={()=>setOperator('/')}>/</button><br />

                 <input type="number" name="value2"  placeholder="Enter a number" value={value2} onChange={(e)=>setValue2(e.target.value)} onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }}/><br />
      </div>

            <button  className= "result"  onClick={answer}>Result</button>
                   
            <h3>The Results is : {result} </h3>
        </div>
    )

}
export default Calculator