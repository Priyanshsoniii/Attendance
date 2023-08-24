import { styled } from "styled-components";

const Wrapper = styled.form`
  .bg-img {
      background-image: url("https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9naW58ZW58MHx8MHx8fDA%3D&w=1000&q=80");
      width: 100%;
      display:flex;
      align-item:center;
      justified-content:center;
      background-repeat: no-repeat;
      background-size: cover;
      min-height: 100vh;
      height:100%;
    
      form{
      
            .container{
                        font-family:  'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        position: center;
                        margin: 20px;
                        max-width: 400px;
                        padding: 16px;
                        background-color: #f1f1f1;
                        opacity: .9;
                        border-radius: 5px;


                        input[type=text], input[type=password], input[type=email] {
                        width: 100%;
                        box-sizing: border-box;
                        padding: 10px;
                        margin: 5px 5px ;
                        border: 5px solid thick grey;
                        background: #f1f1f1;

                        input[type=text]:focus, input[type=password]:focus, input[type=email]:focus {
                          background-color: #ddd;
                          outline: none;
                          border: 5px solid thick grey;
                        }

                        .btn {
                          background-color: #04AA6D;
                          color: white;
                          padding: 16px 20px;
                          border: none;
                          border-radius:5px;
                          cursor: pointer;
                          width: 100%;
                          opacity: 0.9;
                        }

                        .btn:hover {
                          opacity: 1;
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
                    
                        .containerSignin {
                          p{
                            text-align : center;
                          }
                        }
              }
        }
    }

`
export default Wrapper