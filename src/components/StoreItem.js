import React from "react";
import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import FormatCurrency from "./FormatCurrency";
import  "./Storeltem.css"
const StoreItem = ({ id, name, price, imgUrl }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        style={{ height: "250px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span id="text" className="fs-9">{name}</span>
           
         
          <span id="singap" className="ms-2">{FormatCurrency(price) } 
          <div><del>30.60 US$</del></div>
           </span>
        </Card.Title>
        <div style={{display:"flex"}}>
          {quantity === 0 ? (
            <Button style={{background:"none", border:"none"}}  onClick={() => increaseCartQuantity(id)}>
              <button class="">
                
                 <div class="button3" >
                     <div class="button3-wrapper">
                       <div class="text3">Add To Cart</div>
                       
                       
                        <span class="icon">
                         <svg
                             xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                             class="bi bi-cart2"
                            viewBox="0 0 16 16"
                           >
                          <path
                           d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                               ></path>
                          </svg>
                               </span>
                             </div>
                  </div>

 
           
 

               </button>
              
             
            </Button>
          ) : (
            <div
             
              className="d-flex align-items-center flex-colum"
              style={{ gap: "0.5rem" ,display:"flex"}}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "0.5rem" }}
              >
                <Button className="add"   onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div >
                  <span className="fs-5">{quantity} in cart</span>
                </div>
                <Button className="add"   onClick={() => increaseCartQuantity(id)}>+</Button>
                
              </div>
              <Button
              style={{marginLeft:"120px"}}
                variant="none"
                size="sm"
                onClick={() => removeFromCart(id)}
              >
                <button class="button">
                   <span>Remove
                    </span>
                       <span>
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-miterlimit="2" stroke-linejoin="round" fill-rule="evenodd" clip-rule="evenodd"><path fill-rule="nonzero" d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 7.425 2.717-2.718c.146-.146.339-.219.531-.219.404 0 .75.325.75.75 0 .193-.073.384-.219.531l-2.717 2.717 2.727 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.384-.073-.53-.219l-2.729-2.728-2.728 2.728c-.146.146-.338.219-.53.219-.401 0-.751-.323-.751-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"></path></svg>
                          </span>
                </button>
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
