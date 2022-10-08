import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-weight: bold;
    text-align: center;
    margin-top: 0px ;
`;

const Wrapper = styled.div`
    display: flex;
    margin: 20px 20vw;
    padding: 25px;
    justify-content: space-between;
    align-items: center;
    background-color: #262626;
    color: PeachPuff;
    font-weight: 500;
    font-size: 18px;
    word-wrap: break-word;
    border: 3px dashed PaleVioletRed;
`
const UserContainer = styled.div`
    
`

const UserItem = styled.div`
    display: flex;
    align-items: center;

`
const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
    margin-top: 12px;
    width: 100%;
    padding: 15px 20px;
    background-color: #32a19d;
    color: GhostWhite;
    font-weight: 900;
    font-size: 15px;
    cursor: pointer;
    border: none;
    border-radius: 10px;
`

const EmptyUser = styled.div`
    height: 45vh;
    weight: 50vw;
    margin-top: 17vh;
    aligh-items: center;
    justify-content: center;
    text-align: center;
    font-size: 35px;
    font-weight: bold;
    color: firebrick;
`

const ManageAllUsers = ({user}) => {

    const [AllUsers,setAllUsers] = useState();
  
    useEffect(()=>{
      const getAllUsers = async () => {
        const token = "Bearer " + user.acessToken;
        await axios({
          method: 'get',
          url: "http://localhost:5000/users/find_all",
          headers: {token}, 
        })
        .then((response) => {
          if((response.data).length===0) setAllUsers(null);
          else setAllUsers(response.data) 
        }, (error) => {
          console.log(error);
        });
      }
      getAllUsers();
    },[])

    const handleMakeAdmin = async (item) => {
        const result = window.confirm(`Do You Really Want To Make Admin: ${item.username}?`)
        if(!result) return;
        const token = "Bearer " + user.acessToken;
        const Username = item.username;
        await axios({
            method: 'put',
            url: "http://localhost:5000/users/admin/make",
            headers: {token},
            data: {
                userName: Username
            }
        }).then((response) => {
            alert(`Username: ${item.usename} Maiden Admin Sucessfully!`);
            window.location.reload(); 
          }, (error) => {
            console.log(error);
          });
    }

    return (
        <Fragment>
            <Title>All Users</Title>
            {AllUsers?
            <>
                {
                    AllUsers.map((item) => 
                        <Wrapper key={item._id}>
                            <UserContainer>
                                <UserItem>User Email: {item.email}</UserItem>
                                <UserItem>Username: {item.username}</UserItem>
                                <UserItem>Joined At: {item.createdAt.slice(0,10)}</UserItem>
                            </UserContainer>
                            <ButtonContainer>
                                <Button onClick={()=> handleMakeAdmin(item) }>Make Admin</Button>
                            </ButtonContainer>
                        </Wrapper>
                    )
                }
            </>
            
            :
            
            <>
                <EmptyUser> No User Available! </EmptyUser>
            </>
            }
            
        </Fragment>
    );
};

export default ManageAllUsers;