import React, { useState, useContext,useEffect } from 'react'
import axios from 'axios';

import './summary.css';

import jsPDF from 'jspdf';

import html2canvas from 'html2canvas';

import pdfimage from '../../../images/image5.png';


function Summary() {
    const [allProductSummery, setallProductSummery] = useState([]);

    


        //This useEffect function used to get all user's data
        useEffect(() => {
            async function getDetails() {
                try {
                    const result = await (await axios.get("http://localhost:5000/productSummary")).data.data
                    console.log(result)
                    setallProductSummery(result);
                } catch (err) {
                    console.log(err.message)
                }
            }
           
            getDetails();
        },[])


       const printDocument =() =>  {  
            const input = document.getElementById('viewtable');  
            html2canvas(input)  
              .then((canvas) => {  
                var imgWidth = 200;  
                var pageHeight = 290;  
                var imgHeight = canvas.height * imgWidth / canvas.width;  
                var heightLeft = imgHeight;  
                const imgData = canvas.toDataURL('image/png');  
                const pdf = new jsPDF('p', 'mm', 'a4')  
                var position = 0;  
                var heightLeft = imgHeight;  
                pdf.addImage(imgData, 'JPEG', 4, position, imgWidth, imgHeight);  
                pdf.save("download.pdf");  
              });  
          }

    return (
        
    
        <div className="content" style={{marginTop:"2%"}}>
            

        <button onClick={printDocument} id = "button1" ><img src={pdfimage} id="img5"/>&nbsp; Generate PDF</button>
        <div id="viewtable">
            <h2  style={{'textAlign':'center'}}>
                PRODUCT DETAILS

            </h2>
            <table id = "table1"  style={{marginTop:"3%"}}>
                <thead>
                    <tr>
                        <th style={{'textAlign':'center'}}>Product Id</th>
                        <th style={{'textAlign':'center'}}>Title</th>
                        <th style={{'textAlign':'center'}}>Price</th>
                        <th style={{'textAlign':'center'}}>Description</th>
                        <th style={{'textAlign':'center'}}>Content</th>
                        <th style={{'textAlign':'center'}}>Category</th> 
                        <th style={{'textAlign':'center'}}>Sold</th>


                    </tr>
                </thead>
                <tbody>
                    {allProductSummery.map((product)=>{
                        return <tr>
                        <td>{product.product_id}</td>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{product.description} </td>
                        <td>{product.content} </td>
                         <td>{product.category} </td> 
                        <td>{product.sold} </td>

                        </tr>
                    })}
                    
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default Summary