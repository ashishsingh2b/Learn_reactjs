import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'

const Shop = () => {
  const dispatch = useDispatch()
  const { buyCake } = bindActionCreators(actionCreators, dispatch);

  return (
    <div>
      <h2>Banking Transection</h2>
      <br />
      <button className='btn btn-primary' onClick={()=>{dispatch(actionCreators.depositeMoney(100))}}>+</button>
      Deposite/Withdraw Your Balance
      <button className='btn btn-primary' onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>

method 2
      <button className='btn btn-primary' onClick={()=>{depositeMoney(100)}}>+</button>
      Deposite/Withdraw Your Balance
      <button className='btn btn-primary' onClick={()=>{withdrawMoney(100)}}>-</button>


    </div>
  )
}

export default Shop
