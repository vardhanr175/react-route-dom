import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import BlogsList from "./components/BlogList"
import About from "./components/About"
import Contact from "./components/Contact"

const App = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" Component={BlogsList} />
            <Route path="/about" Component={About} />
            <Route path="/contact" Component={Contact} />
        </Routes>

    </BrowserRouter>
)

export default App