// import { react } from "react";

// const Result = ({ data }) => {

//     const total = (sub1, sub2, sub3) => {

//         var sum = parseInt(sub1) + parseInt(sub2) + parseInt(sub3)
//         return sum
//     }
//     const percentage = (sub1, sub2, sub3) => {
//         var percentage = (parseInt(sub1) + parseInt(sub2) + parseInt(sub3)) / 3
//         return percentage
//     }
//     const min = (sub1, sub2, sub3) => {

//         return Math.min(parseInt(sub1), parseInt(sub2), parseInt(sub3))
//     }
//     const max = (sub1, sub2, sub3) => {
//         return Math.max(parseInt(sub1), parseInt(sub2), parseInt(sub3))
//     }

//     return (
//         <div>

//             <table border={1}>
//                 <tr>
//                     <td>Name</td>
//                     <td>Sub 1</td>
//                     <td>Sub 2</td>
//                     <td>Sub 3</td>
//                     <td>Total</td>
//                     <td>Percentage</td>
//                     <td>Minimum</td>
//                     <td>Maximum</td>
//                 </tr>

//                 {
//                     data.map((test, index) => (
//                         <tr>
//                             <td>{test.name}</td>
//                             <td>{test.sub1}</td>
//                             <td>{test.sub2}</td>
//                             <td>{test.sub3}</td>
//                             <td>{total(test.sub1, test.sub2, test.sub3)}</td>
//                             <td>{percentage(test.sub1, test.sub2, test.sub3)}%</td>
//                             <td>{min(test.sub1, test.sub2, test.sub3)}</td>
//                             <td>{max(test.sub1,test.sub2, test.sub3)}</td>
//                         </tr>
//                     ))
//                 }

//             </table>


//         </div>
//     )

// }
// export default Result

import React,{useState} from 'react'

const Result = () => {

    const [data, setdata] = useState([{ name: 'Meet', s1: 88, s2: 90, s3: 80 }, { name: 'Het', s1: 88, s2: 70, s3: 88 }, { name: 'Jay', s1: 78, s2: 92, s3: 70 }])


    return (
        <div>
            <table border={1}>
                <tr>
                    <td>Name</td>
                    <td>Sub 1</td>
                    <td>Sub 2</td>
                    <td>Sub 3</td>
                    <td>Total</td>
                    <td>Percentage</td>
                    <td>Min</td>
                    <td>Max</td>

                </tr>

                {
                    data.map((test, index) => (
                        <tr>
                            <td>{test.name}</td>
                            <td>{test.s1}</td>
                            <td>{test.s2}</td>
                            <td>{test.s3}</td>
                            <td>{test.s1 + test.s2 + test.s3}</td>
                            <td>{(test.s1 + test.s2 + test.s3) /3}%</td>
                            <td>{Math.min(test.s1, test.s2, test.s3)}</td>
                            <td>{Math.max(test.s1, test.s2, test.s3)}</td>

                        </tr>
                    ))
                }


            </table>
        </div>
    )
}
  

export default Result
