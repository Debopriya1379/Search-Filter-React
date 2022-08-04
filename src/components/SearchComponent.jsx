import React, { useState } from 'react';
import {FaSistrix} from 'react-icons/fa';
import {BiX} from 'react-icons/bi';
import styled from 'styled-components';

function SearchComponent({data}) {

    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = (e)=>{
        const searchWord = e.target.value;
        console.log(searchWord)
        const newFilter = data.filter((value)=>{
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        })
        if(searchWord === ""){
            setFilteredData([]);
        }else{
            setFilteredData(newFilter);
        }
    }

    return (
        <Container>
            <div className="search_input">
                <input type="text" onChange={handleFilter}/>
                <button> {filteredData.length === 0 ? <FaSistrix/>:<BiX/>}</button>
            </div>
            {filteredData && <div className="search_result">
                {filteredData.map((data)=>{
                    return(
                        <p className='rows'>{data.title}</p>
                    )
                })}
            </div>}
        </Container>
    )
}

export default SearchComponent

const Container = styled.div`
    position: absolute;
    top: 4rem;
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    .search_input{
        display: grid;
        grid-template-columns: 5fr 1fr;
        height: 50px;
        input{
            border: none;
            display: flex;
            align-items: center;
            padding: 0 1rem;
            &:focus{
                outline: none;
            }
        }
        button{
            border: none;
            background-color: white;
            svg{
                height: 1rem;
                cursor: pointer;
            }
        }
    }
    .search_result{
        color: #e4e1e1;
        background-color: #2e52ad;
        overflow: hidden;
        overflow-y: auto;
        &::-webkit-scrollbar{
            display: none;
        }
        .rows{
            height: 20px;
            border: 1px solid white;
            margin: 4px 2px;
            padding: 0 6px;
        }
    }
`