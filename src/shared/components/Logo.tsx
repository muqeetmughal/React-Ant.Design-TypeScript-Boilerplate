import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../redux/hooks'

const Logo = () => {

    const { theme } = useAppSelector((state) => state.theme)
    return (
        <>
            <div className="logo" style={{ color: theme === "dark" ? "white" : "#001529" , marginLeft : "10px", fontSize:"20px"}}>
                <Link to={"/"}>
                {process.env.REACT_APP_NAME}
                </Link>
            </div>
        </>
    )
}

export default Logo