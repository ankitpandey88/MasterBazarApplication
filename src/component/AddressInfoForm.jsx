import React from 'react'

function AddressForm({ takeInput, formData, setCurrentForm }) {

    const onSubmit = (e) => {
        e.preventDefault()
        setCurrentForm(2)
    }
    
    return (
        <form onSubmit={onSubmit} className='form w-50 mx-auto p-5 border border-dark rounded-3 d-flex flex-wrap'>
            <h3 className='mb-3 w-100'>Address Information</h3>
            <fieldset className='w-50 p-2'>
                <label className='small ps-3'>Current Address</label>
                <input required className='rounded-pill shadow border p-2 px-3 m-2 w-100' type='text' name="currentAddress" placeholder='Current Address' onChange={takeInput} value={formData?.currentAddress} />
            </fieldset>
            <fieldset className='w-50 p-2'>
                <label className='small ps-3'>Current City</label>
                <input required className='rounded-pill shadow border p-2 px-3 m-2 w-100' type='text' name="currentCity" placeholder='Current City' onChange={takeInput} value={formData?.currentCity} />
            </fieldset>
            <fieldset className='w-50 p-2'>
                <label className='small ps-3'>Current State</label>
                <input required className='rounded-pill shadow border p-2 px-3 m-2 w-100' type='text' name="currentState" placeholder='Current State' onChange={takeInput} value={formData?.currentState} />
            </fieldset>
            <fieldset className='w-50 p-2'>
                <label className='small ps-3'>Current Pincode</label>
                <input required className='rounded-pill shadow border p-2 px-3 m-2 w-100' type='number' maxLength={6} minLength={6} name="currentPincode" placeholder='Current Pincode' onChange={takeInput} value={formData?.currentPincode} />
            </fieldset>
            <fieldset className='w-50 p-2'>
                <label className='small ps-3'>Permanent Address</label>
                <input required className='rounded-pill shadow border p-2 px-3 m-2 w-100' type='text' name="permanentAddress" placeholder='Permanent Address' onChange={takeInput} value={formData?.permanentAddress} />
            </fieldset>
            <fieldset className='w-50 p-2'>
                <label className='small ps-3'>Permanent City</label>
                <input required className='rounded-pill shadow border p-2 px-3 m-2 w-100' type='text' name="permanentCity" placeholder='Permanent City' onChange={takeInput} value={formData?.permanentCity} />
            </fieldset>
            <fieldset className='w-50 p-2'>
                <label className='small ps-3'>Permanent State</label>
                <input required className='rounded-pill shadow border p-2 px-3 m-2 w-100' type='text' name="permanentState" placeholder='Permanent State' onChange={takeInput} value={formData?.permanentState} />
            </fieldset>
            <fieldset className='w-50 p-2'>
                <label className='small ps-3'>Permanent Pincode</label>
                <input required className='rounded-pill shadow border p-2 px-3 m-2 w-100' type='number' maxLength={6} minLength={6} name="permanentPincode" placeholder='Permanent Pincode' onChange={takeInput} value={formData?.permanentPincode} />
            </fieldset>

            <div className='w-100 d-flex'>
                <button onClick={()=>setCurrentForm(prev => prev-1)} type='button' className='btn btn-outline-dark w-25 me-auto'>Back</button>
                <button className='btn btn-outline-primary w-25 ms-auto'>Next</button>
            </div>
        </form>
    )
}

export default AddressForm