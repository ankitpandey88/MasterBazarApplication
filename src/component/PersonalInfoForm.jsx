import React from 'react'

function PersonalInfoForm({ takeInput, formData, setCurrentForm }) {

    const onSubmit = (e) => {
        e.preventDefault()
        setCurrentForm(1)
    }
    
    return (
        <form onSubmit={onSubmit} className='form w-50 mx-auto p-5 border border-dark rounded-3 d-flex flex-wrap'>
            <h3 className='mb-3 w-100'>Personal Information</h3>
            <fieldset className='w-50 p-2'>
                <label className='small ps-3'>First Name</label>
                <input required className='rounded-pill shadow border p-2 px-3 m-2 w-100' type='text' name="firstName" placeholder='First Name' onChange={takeInput} value={formData?.firstName} />
            </fieldset>
            <fieldset className='w-50 p-2'>
                <label className='small ps-3'>Last Name</label>
                <input required className='rounded-pill shadow border p-2 px-3 m-2 w-100' type='text' name="lastName" placeholder='Last Name' onChange={takeInput} value={formData?.lastName} />
            </fieldset>
            <fieldset className='w-50 p-2'>
                <label className='small ps-3'>DOB</label>
                <input required className='rounded-pill shadow border p-2 px-3 m-2 w-100' type='date' name="dob"  onChange={takeInput} value={formData?.dob} />
            </fieldset>
            <fieldset className='w-50 p-2'>
                <label className='small ps-3'>Email</label>
                <input required className='rounded-pill shadow border p-2 px-3 m-2 w-100' type='email' name="email" placeholder='Email' onChange={takeInput} value={formData?.email} />
            </fieldset>
            <fieldset className='w-50 p-2'>
                <label className='small ps-3'>Mobile Number</label>
                <input required className='rounded-pill shadow border p-2 px-3 m-2 w-100' type='text' maxLength={10} minLength={10} name="contactNumber" placeholder='Mobile Number' onChange={takeInput} value={formData?.contactNumber} />
            </fieldset>

            <div className='w-100 d-flex'>
                <button className='btn btn-outline-primary w-25 ms-auto'>Next</button>
            </div>
        </form>
    )
}

export default PersonalInfoForm