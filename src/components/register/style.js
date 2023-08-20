import { styled } from "styled-components";

const Wrapper = styled.section`
  
  .bg-img {
    background-image: url("https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9naW58ZW58MHx8MHx8fDA%3D&w=1000&q=80");
    min-height: 1000px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .container {
    position: absolute;
    margin: 20px;
    max-width: 300px;
    padding: 16px;
    background-color: #f1f1f1;
    opacity: .9;
    border-radius: 5px;
  }
  
  input[type=text], input[type=password] {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    border: none;
    background: #f1f1f1;
  }
  
  input[type=text]:focus, input[type=password]:focus {
    background-color: #ddd;
    outline: none;
  }

  .btn {
    background-color: #04AA6D;
    color: white;
    padding: 16px 20px;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
  }
  
  .btn:hover {
    opacity: 1;
  }
`
export default Wrapper