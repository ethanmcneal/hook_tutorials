import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Clock from './Clock'
import CardContainer from '../style_components/CardContainer'
import Button from '../style_components/Button'

const Home = () => {

    const [test, setTest] = useState([])
    const [showClock, setShowClock] = useState(false)

    useEffect(()=>{
        getTest()
    },[])
    const getTest = async() => {
        try { 
        let res = await axios.get('/api/api_test')
        setTest(res.data.hello)
        console.log(res.data.hello)
            
        } catch (error) {
            alert(error)
            
        }
    }
    return(
        <div>
        
        <h1>Home Page Here {`${test}`}</h1>
        <Button onClick={() => setShowClock(!showClock)}>{showClock ? 'Hide Clock' : 'Show Clock'}</Button>

        {showClock && 
        <CardContainer>

        <Clock date={new Date()} />
        
        </CardContainer> }
        </div>
    )
}

// class component

// class Home extends React.Component {


//     render(){
//         return (
//             <div>
//                 <h1>Home Page here</h1>
//             </div>
//         )
//     }
// }
export default Home