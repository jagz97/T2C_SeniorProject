import React, { useState } from "react"
import { useOutletContext } from "react-router-dom"
import { getString, getDayDifference } from "../../utils/Date"

import { api } from "../../api/axios"
import useAuth from "../../hooks/useAuth"

import "./HotelPayment.css"

const CLEANING_FEE = 10
const TAX_FEE = 2

const HotelPayment = () => {

    const { 
        hotelDetail : { hotelData },
        arrivalDate,
        departureDate,
        roomAmount
    } = useOutletContext()
    
    const [ paymentSuccess, setPaymentSuccess ]= useState(false)
    const [ paymentError, setPaymentError ] = useState("")

    const { user } = useAuth()
    
    const roomId = Object.keys(hotelData.rooms)[0]
    const dailyPrice = Math.floor(hotelData.amount_per_night.value)
    const tripDays = getDayDifference(arrivalDate,departureDate)
    const arrival = getString(arrivalDate)
    const departure = getString(departureDate)
    const subTotal = dailyPrice * tripDays * roomAmount
    const paymentTotal = subTotal + CLEANING_FEE + TAX_FEE

    const invalidDate = (arrivalDate.getTime() >= departureDate.getTime()) || (arrivalDate.toString() === departureDate.toString())

    const handlePayment = async () => {
        try {
            const paymentData = {
                hotelName : hotelData.hotelName,
                descreption : roomId?  hotelData.rooms[roomId].description : " ",
                checkInDate : arrivalDate,
                roomQuantity : roomAmount,
                price : paymentTotal,
            }
            console.log("We will checkout with this:", paymentData)
            const headerOptions = {
                headers: {
                    Authorization: `${user.accesstoken}`,
                    "Content-Type": "application/json"
                }
            }

            const response = await api.post("/createCheckout", paymentData, headerOptions)
            window.location.href = response.data.sessionUrl
    
        } catch (error) {
            const errorMessage = error.response?.data?.message
            // if we get a an error response from server display it
            // otherwise we display error directly from axios library
            if(errorMessage) {
                console.log(errorMessage)
            }
            else {
                console.log(error.message)
            }
        }
    }
    return (
       <div className="container-payment">
            <div className="payment-card">
                <div className="payment-card-top">
                    <div className="payment-card-wrapper">
                        <p className="payment-hotel-name">
                            {hotelData.hotelName}
                        </p>
                        
                        {
                            !invalidDate
                            &&
                            <>
                                <div className="payment-card-details">
                                    <p className="payment-card-dates">{arrival} to {departure}</p>
                                </div>
                                <div className="payment-card-details">
                                    ({tripDays} {tripDays > 1 ? "Nights" : "Night" }, {roomAmount} {roomAmount > 1 ? "Rooms" : "Room"})
                                </div>
                            </>
                        }
                    </div>
                    <div className="payment-dailyprice">
                            ${dailyPrice} / night 
                    </div>
                </div>
                
                {

                    !invalidDate ?
                    <>
                        <div className="payment-card-body">
                            <div className="payment-card-item">
                                <div className="payment-card-category">Subtotal</div>
                                <div className="payment-card-price">${subTotal}.00</div>
                            </div>
                            <div className="payment-card-item">
                                <div className="payment-card-category">Cleaning Fee</div>
                                <div className="payment-card-price">${CLEANING_FEE}.00</div>
                            </div>
                            <div className="payment-card-item">
                                <div className="payment-card-category">Tax</div>
                                <div className="payment-card-price">${TAX_FEE}.00</div>
                            </div>
                        </div>
                        <div className="payment-card-footer">
                            <p className="payment-card-total">Total</p>
                            <p className="payment-total">${paymentTotal}.00</p>
                        </div>
                    </> 
                    :
                    <p className="error payment-date-error">Invalid Dates Selected!</p>
                }
                </div>
            <button className="payment-card-confirm" disabled={invalidDate} onClick={handlePayment}> Proceed to Checkout</button>
       </div>
    )
}

export default HotelPayment