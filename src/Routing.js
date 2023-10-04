import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormPage from './Components/FormPage'
import ResultPage from './Components/ResultPage'
import InputProvider from './ContextApi/InputProvider'

const Routing = () => {
    return (
        <BrowserRouter>
            <InputProvider>
                <Routes>
                    <Route path='/' element={<FormPage />} />
                    <Route path='/generate-img' element={<ResultPage />} />
                </Routes>
            </InputProvider>
        </BrowserRouter>
    )
}

export default Routing