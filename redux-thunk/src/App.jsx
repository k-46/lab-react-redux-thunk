import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { dataFetching, fetchDataFunction } from './redux/action'

function App() {

  const data = useSelector((store) => store.data)
  const dispatch = useDispatch()

  const getData = () => {
    dispatch(dataFetching())
  }

  return (
    <>
      {data?.map((el) => {
        return (
          <div key={el.id}>
            <h2>{el.name}</h2>
            <h4>{el.email}</h4>
            <hr />
          </div>
        )
      })}
      <button onClick={getData}>Get data</button>
    </>
  )
}

export default App
