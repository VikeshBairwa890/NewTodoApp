import AddTodo from '@/components/add-todo'
import NavBar from '@/components/navbar'
import { Todos } from '@/components/todos';
import React from 'react'
import { RiTodoLine } from "react-icons/ri";

function page() {
  return (
    <main >
      <h2> <RiTodoLine  className='icons'/>TODO Next + TYPESCRIPT <RiTodoLine  className='icons'/></h2>
      <NavBar />
      <AddTodo/>
      <Todos />
    </main>
  )
}

export default page