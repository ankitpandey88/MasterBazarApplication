import React, { useState } from 'react'
import PersonalInfoForm from './PersonalInfoForm'
import AddressForm from './AddressInfoForm'
import EducationForm from './EducationForm'
import ProfessionalForm from './ProfessionalForm'

function Form() {
    const [formData, setFormData] = useState({})
    const [currentForm, setCurrentForm] = useState(0)
    const takeInput = (e) => {
        const {name, value} = e.target
        setFormData(prev => ({...prev, [name]: value}))
    }
  return (
    <div className='d-flex align-items-center justify-content-center' style={{minHeight: "100vh"}}>
        {currentForm===0 && <PersonalInfoForm setCurrentForm={setCurrentForm} takeInput={takeInput} formData={formData} />}
        {currentForm===1 && <AddressForm setCurrentForm={setCurrentForm} takeInput={takeInput} formData={formData} />}
        {currentForm===2 && <EducationForm setCurrentForm={setCurrentForm} takeInput={takeInput} formData={formData} />}
        {currentForm===3 && <ProfessionalForm setCurrentForm={setCurrentForm} takeInput={takeInput} formData={formData} />}
    </div>
  )
}

export default Form