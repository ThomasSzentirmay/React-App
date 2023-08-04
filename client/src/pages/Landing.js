import { useState } from 'react';

function Landing() {

    // const students = ['Erin', 'Thomas', 'Liam', 'Jeremy'];
    const [studentName, setStudentName] = useState('');
    const [students, setStudents] = useState(['Erin', 'Thomas', 'Liam', 'Jeremy']);

    const handleNameInput = (event) => {
        setStudentName(event.target.value);
    }

    const addStudent = () => {
        setStudents([...students, studentName]);
        setStudentName('');
    }

    return (
        <main>
            <h1>Landing</h1>
            <p>Welcome to our React starter site</p>

            <h3>Student List:</h3>
            {students.map((student, i) => (
                <p key={i}>{student}</p>
            ))}

            <input onChange={handleNameInput} value={studentName} type='text' placeholder='Type student name' />
            <button onClick={addStudent}>Add Student</button>
        </main>
    )
}

export default Landing;