import React, { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Button ,Container,Card , CardBody , Col , Row } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Icon from './components/Icon';

import './App.css';

const itemArray = new Array(9).fill("empty")

function App() {

  const [isCross,setIsCross] = useState(false)
  const [winMessage , setWinMessage] = useState("")
  
  const reloadGame = ()=>{
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty" , 0, 9)
  }
  const checkIsWinner = ()=>{
    //Checking Winner
    if( itemArray[0]===itemArray[1] &&
      itemArray[0]===itemArray[2] &&
      itemArray[0] !== "empty"){
        setWinMessage(`${itemArray[0]} wins`)
      }
      else if(
        itemArray[3]===itemArray[4] &&
        itemArray[3]===itemArray[5] &&
        itemArray[3] !== "empty"
      ){
        setWinMessage(`${itemArray[3]} wins`)
      }
      else if(
        itemArray[6]===itemArray[7] &&
        itemArray[6]===itemArray[8] &&
        itemArray[6] !== "empty"
      ){
        setWinMessage(`${itemArray[6]} wins`)
      }
      else if(
        itemArray[0]===itemArray[3] &&
        itemArray[0]===itemArray[6] &&
        itemArray[0] !== "empty"
      ){
        setWinMessage(`${itemArray[0]} wins`)
      }
      else if(
        itemArray[1]===itemArray[4] &&
        itemArray[1]===itemArray[7] &&
        itemArray[1] !== "empty"
      ){
        setWinMessage(`${itemArray[1]} wins`)
      }
      else if(
        itemArray[2]===itemArray[5] &&
        itemArray[2]===itemArray[8] &&
        itemArray[2] !== "empty"
      ){
        setWinMessage(`${itemArray[2]} wins`)
      }
      else if(
        itemArray[0]===itemArray[4] &&
        itemArray[0]===itemArray[8] &&
        itemArray[0] !== "empty"
      ){
        setWinMessage(`${itemArray[0]} wins`)
      }
      else if(
        itemArray[2]===itemArray[4] &&
        itemArray[2]===itemArray[6] &&
        itemArray[2] !== "empty"
      ){
        setWinMessage(`${itemArray[0]} wins`)
      }
  }
  const changeItem = itemNumber =>{
    if(winMessage){
      return toast(winMessage,{ type: "success"});
    }
    if(itemArray[itemNumber]==="empty"){
      itemArray[itemNumber] = isCross ? "cross" : "circle"
      setIsCross(!isCross)
    }else{
      return toast("already filled" , {type : "error"})
    }
    checkIsWinner();
  }

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
        {winMessage ? (
          <div className="mb-2 mt-2">
            <h1 className="text-success text-center text-uppercase">
              {winMessage}
            </h1>
            <Button color="success" block onClick={reloadGame} >Reload the Game</Button>
          </div>
        ) : (
          <h1 className="text-center text-warning">
          {isCross ? "its Cross turn" : "its Circle turn" }
          </h1>
        ) }
          <div className="grid">
            {itemArray.map((item,index)=>(
              <Card 
              color="warning"
              key={index}
              onClick={()=>changeItem(index)}>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
