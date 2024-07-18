import React from 'react'

function EducationForm({ takeInput, formData, setCurrentForm }) {

    const onSubmit = (e) => {
        e.preventDefault()
        setCurrentForm(3)
    }
    
    return (
        <form onSubmit={onSubmit} className='form w-50 mx-auto p-5 border border-dark rounded-3 d-flex flex-wrap'>
            <h3 className='mb-3 w-100'>Education Information</h3>
            <fieldset className='w-50 p-2'>
                <label className='small ps-3'>High School Qualification</label>
                <input required className='rounded-pill shadow border p-2 px-3 m-2 w-100' type='text' name="highSchoolQualification" placeholder='High School Qualification' onChange={takeInput} value={formData?.highSchoolQualification} />
            </fieldset>
            <fieldset className='w-50 p-2'>
                <label className='small ps-3'>Year of Passing</label>
                <input required className='rounded-pill shadow border p-2 px-3 m-2 w-100' type='date' name="yearOfPassing" placeholder='Year of Passing' onChange={takeInput} value={formData?.yearOfPassing} />
            </fieldset>
            <fieldset className='w-50 p-2'>
                <label className='small ps-3'>College/University</label>
                <input required className='rounded-pill shadow border p-2 px-3 m-2 w-100' type='text' name="collegeUniversity" placeholder='College/University' onChange={takeInput} value={formData?.collegeUniversity} />
            </fieldset>
            <fieldset className='w-50 p-2'>
                <label className='small ps-3'>Graduation Status</label>
                <select required className='rounded-pill shadow border p-2 px-3 m-2 w-100' name="graduationStatus" onChange={takeInput} value={formData?.graduationStatus}>
                    <option value="">Select</option>
                    <option value="Pursuing">Pursuing</option>
                    <option value="Completed">Completed</option>
                </select>
            </fieldset>

            <div className='w-100 d-flex'>
                <button onClick={()=>setCurrentForm(prev => prev-1)} type='button' className='btn btn-outline-dark w-25 me-auto'>Back</button>
                <button className='btn btn-outline-primary w-25 ms-auto'>Next</button>
            </div>
        </form>
    )
}

export default EducationForm