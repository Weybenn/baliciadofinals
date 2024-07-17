import React, {useEffect, useState} from 'react';
import axios from 'axios';


const ItemList = ({onEdit, onDelete}) => {
    const [items, setItems] = useState([]);
    useEffect( () => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await
            axios.get('http://localhost:8000/api/items/');
            setItems(response.data);
        } catch (error) {
            console.error('There was an error fetching the items!', error)
        }
    };

    return(
        <div>
            <h1>ITEMS:</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.first_name} <br/> 
                        {item.middle_name} <br/> 
                        {item.last_name} <br/> 
                        {item.nickname} <br/> 
                        {item.age} <br/> 
                        {item.religion} <br/> 
                        {item.contact_num} <br/> 
                        {item.email} <br/> 
                        {item.address} <br/> 
                        {item.code} <br/> 
                        {item.birthday} <br/> 
                        {item.birthplace} <br/> 
                        {item.gender} <br/> 
                        {item.citizenship} <br/> 
                        {item.civil_status} <br/> 
                        {item.course} <br/> 
                        {item.student_id} <br/>
                        {item.year_level} <br/> 
                        {item.school} <br/>
                        {item.mothers_name} <br/> 
                        {item.mothers_occupation} <br/> 
                        {item.mothers_contact} <br/>
                        {item.fathers_name} <br/>
                        {item.fathers_occupation} <br/>  
                        {item.fathers_contact} <br/> 

                        
                        <button className="edit-button" onClick={() => onEdit(item)}>
                            Edit
                        </button>
                        <button className="delete-button" onClick={() => onDelete(item.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );

};

export default ItemList;