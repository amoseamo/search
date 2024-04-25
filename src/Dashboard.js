import React from "react";
import { Link } from "react-router-dom";
function Dashboard(){
    return(
       <div className="Wear-dash">
           <table className="style-table">
              <thead>
                <tr>
                    <th>Shirt Name</th>
                    <th>Delivery Time</th>
                    <th>Price Range</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                       <td>Long Sleeve</td>
                       <td>Next day</td>
                       <td>$299 - $999</td>
                    </tr>
                    <tr>
                        <td>Jeans</td>
                        <td>Next day</td>
                        <td>$ 499 - $ 1,499</td>
                    </tr>
                    <tr>
                       <td>Jackets</td>
                       <td>Three days</td>
                       <td>$2,999 - $6,999</td>
                    </tr>
                    <tr>
                        <td>Tone pants</td>
                        <td>Few days</td>
                        <td>$999 - $1,999</td>

                    </tr>
                    <tr>
                       <td>Suit Jackets</td>
                       <td>One week</td>
                       <td>$899 - $2,999</td>
                   </tr>
                </tbody>
           </table>
           <div className="mens-wear-flex-col-4">
           <Link to='/'>Home</Link>
           <Link to='/about1'>About</Link>
           </div>  
       </div> 
    )
}
export default Dashboard;