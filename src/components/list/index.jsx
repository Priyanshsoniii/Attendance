import React from 'react'
import { Link } from "react-router-dom";
import Wrapper from './style';

const List = () => {
  return (
    <Wrapper>
        <Link to = "/register"></Link>

        <table border="1" >
  <tr>
    <th>I</th>
    <th>II</th>  
    <th>III</th>
  </tr>

  <tr>
    <td>CS-I-A</td>
    <td>CS-I-B</td>
    <td>CS-I-C</td>
  </tr>
  <tr>
    <td>CS-II-A</td>
    <td>CS-II-B</td>
    <td>CS-II-C</td>
  </tr>
  <tr>
    <td>CS-III-A</td>
    <td>CS-III-B</td>
    <td>CS-III-C</td>
  </tr>
  {/* <tr>
    <td>CS-IV-A</td>
    <td>CS-IV-B</td>
    <td>CS-IV-C</td>
  </tr> */}
</table>
    </Wrapper>
  )
}

export default List
