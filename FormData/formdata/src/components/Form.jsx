import { useState } from 'react'
import styles from  './Form.module.css'



const Form = ()=>{

    const [formData,setformData] = useState({
        // name:"",
        // password:"",
        // username:"",
        confirmPassword:false 
    })

     const handleS =(e)=>{
     e.preventDefault()
    //  console.log(formData)
        localStorage.setItem('data',JSON.stringify(formData))

    }

    const onChangeF =(e)=>{
        e.preventDefault()
        // const {name,password,confirmPassword,email,username,date,resume} = e.target;
        // console.log(e.target.value)
    //  console.log(e.target.name)
     const inputName = e.target.name ;    
    //  console.log(inputName)

     if(e.target.type === "checkbox"){

        // console.log(e.target.value,e.target.checked)

        setformData({
            ...formData,
            [inputName]: e.target.checked 
        })
     }
     else if(e.target.type === "file"){
        setformData({
            ...formData,
            [inputName]: e.target.files
        })
     }

     else{      setformData({
                
            ...formData,
            [inputName]: e.target.value     
        })

     }
    }

    // console.log(inputName)







    return (
        <div>

        <h1>Form</h1>

        <form  onSubmit={handleS}  className={styles.form}>
            <div>
            <label>Name:</label>
            <input type="text" name="name" placeholder="Enter your name..." onChange={onChangeF}/>
            </div>
            
            <div>
            <label>Password:</label>
            
            <input type={formData.confirmPassword ? "text":"password"} name="password" placeholder="Enter your password..." onChange={onChangeF} />
            </div>
            <div>
            <label>Confirm Password:</label>
            
            <input type="checkbox" name="confirmPassword" placeholder="Confirm your password..." onChange={onChangeF} />
            </div>
            <div>
            <label>Email:</label>
            
            <input type="email" name="email" placeholder="Enter your email..." onChange={onChangeF} />
            </div>

            <div>
            <label>Gender:</label>
             <select name="gender" onChange={onChangeF}>
                 <option value="M">Male</option>
                 <option value="F">Female</option>

             </select>
            </div> 

        <div>
        <label>Gender1:</label>


        <input type="radio" name="genderR" value="Male" onChange={onChangeF} />Male 
        <input type="radio" name="genderR" value="Female" onChange={onChangeF} />Female


        </div>
        




            <div>
            <label>Username:</label>
            
            <input type="text" name="username" placeholder="Enter your username..."  onChange={onChangeF}/>
            </div>

            <div>
            <label>D.O.B :</label>
            
            <input type="date" name="date" placeholder="Enter your dob..." onChange={onChangeF}/>
            </div>
            <div>
            <label>Resume:</label>
            
            <input type="file" name="resume" placeholder="Submit your resume..." onChange={onChangeF} />
            </div>
           
           
           
            <input type="submit" />

        </form>


        </div>
    )
}

export {Form}