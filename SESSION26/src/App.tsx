import { RouterProvider } from "react-router-dom";
import { routers } from "./routers/router";
import React from 'react'

export default function App() {
  return (
    <div>
      REACT ROUTER
      <RouterProvider router={routers}></RouterProvider>

    </div>
  )
}
