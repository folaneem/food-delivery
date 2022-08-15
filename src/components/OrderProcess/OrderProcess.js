import "./OrderProcess.css"
import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';
import menu from "../../images/menu.png"
import location from "../../images/location.png"
import order from "../../images/order.png"

function OrderProcess() {

    return(
        <div className="order-process">
          <h1>How our delivery service works</h1>
            <Carousel>
                <Carousel.Item>

                    <Carousel.Caption>
                        <img
                            className="d-flex-column"
                            src={menu}
                            alt="First slide"
                        />
                        <h3>Choose from our menu</h3>
                        <p>Order your desired delicacy from our menu</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                    <Carousel.Caption>
                        <img
                            className="d-flex-column"
                            src={location}
                            alt="Second slide"
                        />

                        <h3>Set delivery location</h3>
                        <p>Set location where you want your order delivered</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>


                    <Carousel.Caption>
                        <img
                            className="d-flex-column"
                            src={order}
                            alt="Third slide"
                        />
                            <h3>Order sent</h3>
                        <p>
                           Your order will be delivered to you within a short period of time
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )

}
export default OrderProcess