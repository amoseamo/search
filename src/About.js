import react from 'react'

class about extends react.Component
{
    render()
    {
        const{userset}=this.props;
        console.log(userset);
        const studentdetails=userset.map(e,index)=>{
            return(
                <div class="container">
                    <ul key={index}>
                        <li><span>ID:</span>{index+1}
                        <ul>
                            <li><span>name:</span>{e.name}</li>
                            <li><span>age:</span>{e.age}</li>
                            <li><span>department:</span>{e.department}</li>
                        </ul>
                        </li>
                    </ul>
                </div>
            )
        }
        return(
            <div class="container">
                <h3>classs Component</h3>
                <ul>{studentdetails}</ul>
            </div>
        )
    }
}
export default About;