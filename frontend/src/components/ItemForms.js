import React, { useEffect, useState } from 'react';
import axios from 'axios';


const ItemForms = ({item, onSuccess}) => {
    const[first_name, setFName] = useState('');
    const[middle_name, setMName] = useState('');
    const[last_name, setLName] = useState('');
    const[age, setAge] = useState('');
    const[contact_num, setCNum] = useState('');
    const[email, setEmail] = useState('');
    const[address, setAddress] = useState('');
    const[code, setCode] = useState('');
    const[birthday, setBirthdate] = useState('');
    const[birthplace, setBirthplace] = useState('');
    const[gender, setGender] = useState('');
    const[citizenship, setCitizenship] = useState('');
    const[civil_status, setCStatus] = useState('');
    const[course, setCourse] = useState('');
    const[year_level, setYear_level] = useState('');
    const[mothers_name, setMothers_name] = useState('');
    const[mothers_occupation, setMothers_occupation] = useState('');
    const[mothers_contact, setMothers_contact] = useState('');
    const[fathers_name, setFathers_name] = useState('');
    const[fathers_occupation, setFathers_occupation] = useState('');
    const[fathers_contact, setFathers_contact] = useState('');
    const[school, setSchool] = useState('');
    const[student_id, setStudent_id] = useState('');
    const[nickname, setNickname] = useState('');
    const[religion, setReligion] = useState('');









    useEffect(() => {
        if(item){
            setFName(item.first_name);
            setMName(item.middle_name);
            setLName(item.last_name);
            setNickname(item.nickname);
            setAge(item.age);
            setReligion(item.religion);
            setCNum(item.contact_num);
            setEmail(item.email);
            setAddress(item.address);
            setCode(item.code);
            setBirthdate(item.birthday);
            setBirthplace(item.birthplace);
            setGender(item.gender);
            setCitizenship(item.citizenship);
            setCStatus(item.civil_status);
            setCourse(item.course);
            setStudent_id(item.student_id);
            setYear_level(item.year_level);
            setSchool(item.school);
            setMothers_name(item.mothers_name);
            setMothers_occupation(item.mothers_occupation);
            setMothers_contact(item.mothers_contact);
            setFathers_name(item.fathers_name);
            setFathers_occupation(item.fathers_occupation);
            setFathers_contact(item.fathers_contact);
            
            
            






        }
    }, [item]);

    const handleSubmit = async(event) =>{
        event.preventDefault();
        const data = {first_name, middle_name, last_name, nickname, age,  religion, contact_num, email, address, code, birthday, birthplace, gender,
                        citizenship, civil_status, course, student_id, year_level, school, mothers_name, mothers_occupation, mothers_contact, 
                        fathers_name, fathers_occupation, fathers_contact, };
        try{
            if (item){
                await
                axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else{
                axios.post('http://localhost:8000/api/items/', data);
            }
            onSuccess();
        } catch(error) {
            console.error('There was an error submitting the form!', error);
        }
    };
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name:</label>
                <input type='text' value={first_name} onChange={(e) => setFName(e.target.value)}/>
            </div>
            <div>
                <label>Middle Name:</label>
                <textarea value={middle_name} onChange={(e) => setMName(e.target.value)}/>
            </div>
            <div>
                <label>Last Name:</label>
                <textarea value={last_name} onChange={(e) => setLName(e.target.value)}/>
            </div>
            <div>
                <label>Nickname:</label>
                <textarea value={nickname} onChange={(e) => setNickname(e.target.value)}/>
            </div>
            <div>
                <label>Age:</label>
                <textarea value={age} onChange={(e) => setAge(e.target.value)}/>
            </div>
            <div>
                <label>Religion:</label>
                <textarea value={religion} onChange={(e) => setReligion(e.target.value)}/>
            </div>
            <div>
                <label>Contact No.:</label>
                <textarea value={contact_num} onChange={(e) => setCNum(e.target.value)}/>
            </div>
            <div>
                <label>Email:</label>
                <textarea value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Address:</label>
                <textarea value={address} onChange={(e) => setAddress(e.target.value)}/>
            </div>
            <div>
                <label>Zip code:</label>
                <textarea value={code} onChange={(e) => setCode(e.target.value)}/>
            </div>
            <div>
                <label>Birthday:</label>
                <textarea value={birthday} onChange={(e) => setBirthdate(e.target.value)}/>
            </div>
            <div>
                <label>Place of Birth:</label>
                <textarea value={birthplace} onChange={(e) => setBirthplace(e.target.value)}/>
            </div>
            <div>
                <label>Gender:</label>
                <textarea value={gender} onChange={(e) => setGender(e.target.value)}/>
            </div>
            <div>
                <label>Citizenship:</label>
                <textarea value={citizenship} onChange={(e) => setCitizenship(e.target.value)}/>
            </div>
            <div>
                <label>Civil Status:</label>
                <textarea value={civil_status} onChange={(e) => setCStatus(e.target.value)}/>
            </div>
            <div>
                <label>Course:</label>
                <textarea value={course} onChange={(e) => setCourse(e.target.value)}/>
            </div>
            <div>
                <label>Student Id:</label>
                <textarea value={student_id} onChange={(e) => setStudent_id(e.target.value)}/>
            </div>
            <div>
                <label> Year Level:</label>
                <textarea value={year_level} onChange={(e) => setYear_level(e.target.value)}/>
            </div>
            <div>
                <label> Name of School:</label>
                <textarea value={school} onChange={(e) => setSchool(e.target.value)}/>
            </div>
            <div>
                <label> Mother's Name:</label>
                <textarea value={mothers_name} onChange={(e) => setMothers_name(e.target.value)}/>
            </div>
            <div>
                <label> Mother's Occupation:</label>
                <textarea value={mothers_occupation} onChange={(e) => setMothers_occupation(e.target.value)}/>
            </div>
            <div>
                <label> Mother's Contact Number:</label>
                <textarea value={mothers_contact} onChange={(e) => setMothers_contact(e.target.value)}/>
            </div>
            <div>
                <label> Father's Name:</label>
                <textarea value={fathers_name} onChange={(e) => setFathers_name(e.target.value)}/>
            </div>
            <div>
                <label> Father's Occupation:</label>
                <textarea value={fathers_occupation} onChange={(e) => setFathers_occupation(e.target.value)}/>
            </div>
            <div>
                <label> Father's Contact Number:</label>
                <textarea value={fathers_contact} onChange={(e) => setFathers_contact(e.target.value)}/>
            </div>
            
            
            

            <button type='submit'>Submit</button>
        </form>
    );
};
export default ItemForms