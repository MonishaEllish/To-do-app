import type{NextPage}from 'next'
import TodoList from './components/TodoList'
import React from 'react'


const Home:NextPage =() =>{
  return(
    <><div>
      <TodoList />
    </div><section> <footer className="mt-4 text-center text-pink-500 font-bold">
      Prepared by Monisha Ellish
    </footer></section></>
  )
}

export default Home