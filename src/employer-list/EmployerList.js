import React from 'react'
import './EmployerList.scss'

function EmployerList() {
    //States
    
    const [employers,setEmployer] = React.useState([])
    const [nameValue,setNameValue] = React.useState('')
    const [surnameValue,setSurnameValue] = React.useState('')
    const [salaryValue,setSalaryValue] = React.useState('')
    let [employerId,setEmployerId] = React.useState(0)
    // Functions
    const getInputNameValue = React.useCallback( (event) => {
        setNameValue(event.target.value)
    },[])

    const getInputSurnameValue = React.useCallback( (event) => {
        setSurnameValue(event.target.value)
    },[])

    const getInputSalaryValue = React.useCallback( (event) => {
        setSalaryValue(event.target.value)
    },[])
   
    const deleteRow = React.useCallback((index) => {
        let newList = employers.filter(item => (item.id !== index))
        setEmployer(newList)
        console.log(newList);
    },[])           
   
    const addEmployer = (event) => {
        event.preventDefault();
        if(nameValue === '' || surnameValue === '' || salaryValue === '')
        {
            alert('Please fill all inputs')
        }
        else{

            const employer = {
                id:employerId+=1,
                name:nameValue,
                surname:surnameValue,
                salary:salaryValue
             }
             employers.push(employer)
            setEmployer(employers)
            setEmployerId(employerId)

        }
      
      
        
    }

  return (
    <>
                                        {/* Input Area Start */}
            <section id='InputArea'>
               <form onSubmit={addEmployer}>
               <div className='input-title'>
                    <h1>Employer List</h1>
                    
                </div>
                <div className='inputs'>
                    <div className='epmloyer-name'>
                        <label>Name</label>
                        <input onBlur={getInputNameValue}/>
                    </div>
                    <div className='epmloyer-surname'>
                        <label>Surname</label>
                        <input onBlur={getInputSurnameValue}/>
                    </div>
                    <div className='epmloyer-salary'>
                        <label>Salary</label>
                        <input  onBlur={getInputSalaryValue}/>
                    </div>
                </div>

                <div className='add-employer-button'>
                    <button type='submit'>add</button>
                </div>
               </form>
            </section>
                                                {/* Input Area End */}

                                                {/* Employer Table Section Start */}
       <section id='EmployerTableSection'>
       <table className = 'employer-table'>
            <thead>
                <tr>
                    <th>Delete</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {employers.map((item,index) => (
                    <tr key={index}>
                        <td id={index}><button onClick={() => deleteRow(index)}>Delete</button></td>
                        <td id={index}>{item.name}</td>
                        <td id={index} >{item.surname}</td>
                        <td id={index}>{item.salary}</td>
                        {console.log(index)}
                    </tr>
                ))}
            </tbody>
        </table>
       </section>
                                            {/* Employer Table Section Start */}
    </>
  )
}

export default EmployerList