//style imports
import {Container,ChooseExams,ButtonHolder} from './genericStyledComponents'
import styled from 'styled-components/macro'

//navigation imports
import {Link} from 'react-router-dom'


import axios from 'axios'
import {useEffect,useState} from 'react'

interface Periods{
    id:number,
    name:string,
    disciplines:[];
}
export default function Disciplines(){
    const [periods,setPeriods] = useState<Periods[]>([])

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/periods`)
        .then((response)=>{
            console.log(response.data)
            setPeriods(response.data)
            
        })
        .catch((error)=>{
            console.log(error)

        })
    },[])
    
    
    return (
        <Container>
            <ChooseExams >
                <p>Texto para escolher provas</p>
                
                <ButtonHolder>
                   
                    <button onClick={()=>console.log('fui clicado')}>
                        <Link to="/disciplines">
                            disciplinas
                         </Link>
                    </button>
                   
                    
                    {/* <Link> */}
                        <button onClick={()=>console.log('fui clicado')}>professores</button>
                    {/* </Link> */}
                    
                </ButtonHolder>
            </ChooseExams>
            
            <DisciplinesContainer>
               {periods?.map((item,index,arr)=>{
                   return(
                       <DisciplinesByPeriod key={item.id}>
                           <h1>{item.name}</h1>
                           

                       </DisciplinesByPeriod>
                   )
               })}
            </DisciplinesContainer>
        </Container>
    )



   
}

const DisciplinesContainer = styled.ul`

width: 400px;
min-height:300px;
height: auto;
border: 1px solid red;
`

const DisciplinesByPeriod = styled.li`
    width: 100%;
    min-height:100px ;
    height: auto;
`