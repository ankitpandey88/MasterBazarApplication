import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import jsPDF from 'jspdf'

function ProfessionalForm({ takeInput, formData, setCurrentForm }) {

    const [resumeFile, setResumeFile] = useState(null);
    const [idFile, setIdFile] = useState(null);
    const formRef = useRef()

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formData);


        // Send email with PDF and attachments
        const serviceId = 'service_05fy30w';
        const templateId = 'template_ytqrl9b';
        const userId = 'MNw6gCpOD2lvEXGZG';

        const form = new FormData();
        form.append('from_name', formData.firstName + ' ' + formData.lastName);
        form.append('from_email', formData.email);
        form.append('message', 'Please find the attached PDF with my application details.');

        Object.keys(formData).forEach((key) => {
            form.append(key, formData[key]);
        });

        form.append('resume', resumeFile, 'application/pdf');
        form.append('id', idFile, 'application/pdf');
        emailjs.sendForm(serviceId, templateId, formRef.current, userId)
            .then((response) => {
                console.log('Email sent successfully!', response);
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    };

    const handleResumeChange = (e) => {
        setResumeFile(e.target.files[0]);
    };

    const handleIdChange = (e) => {
        setIdFile(e.target.files[0]);
    };

    return (
        <form onSubmit={onSubmit} ref={formRef} className='form w-50 mx-auto p-5 border border-dark rounded-3 d-flex flex-wrap'>
            <h3 className='mb-3 w-100'>Professional Information</h3>
            <fieldset className='w-50 p-2'>
                <label className='small ps-3'>Last Company</label>
                <input required className='rounded-pill shadow border p-2 px-3 m-2 w-100' type='text' name="lastCompany" placeholder='Last Company' onChange={takeInput} value={formData?.lastCompany} />
            </fieldset>
            <fieldset className='w-50 p-2'>
                <label className='small ps-3'>Designation</label>
                <select required className='rounded-pill shadow border p-2 px-3 m-2 w-100' name="designation" onChange={takeInput} value={formData?.designation}>
                    <option value="">Select</option>
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="Data Scientist">Data Scientist</option>
                    <option value="DevOps Engineer">DevOps Engineer</option>
                </select>
            </fieldset>
            <fieldset className='w-50 p-2'>
                <label className='small ps-3'>Date of Joining</label>
                <input required className='rounded-pill shadow border p-2 px-3 m-2 w-100' type='date' name="dateOfJoining" onChange={takeInput} value={formData?.dateOfJoining} />
            </fieldset>
            <fieldset className='w-50 p-2'>
                <label className='small ps-3'>Notice Period</label>
                <select required className='rounded-pill shadow border p-2 px-3 m-2 w-100' name="noticePeriod" onChange={takeInput} value={formData?.noticePeriod}>
                    <option value="">Select</option>
                    <option value="15 Days">15 Days</option>
                    <option value="30 Days">30 Days</option>
                    <option value="60 Days">60 Days</option>
                </select>
            </fieldset>
            <fieldset className='w-50 p-2'>
                <label className='small ps-3'>Join Availability</label>
                <select required className='rounded-pill shadow border p-2 px-3 m-2 w-100' name="joinAvailability" onChange={takeInput} value={formData?.joinAvailability}>
                    <option value="">Select</option>
                    <option value="Immediate">Immediate</option>
                    <option value="1 Week">1 Week</option>
                    <option value="2 Weeks">2 Weeks</option>
                </select>
            </fieldset>
            <fieldset className='w-50 p-2'>
                <label className='small ps-3'>Last CTC</label>
                <select required className='rounded-pill shadow border p-2 px-3 m-2 w-100' name="lastCTC" onChange={takeInput} value={formData?.lastCTC}>
                    <option value="">Select</option>
                    <option value="0-2 LPA">0-2 LPA</option>
                    <option value="2-5 LPA">2-5 LPA</option>
                    <option value="5-10 LPA">5-10 LPA</option>
                </select>
            </fieldset>
            <fieldset className='w-50 p-2'>
                <label className='small ps-3'>Expected CTC</label>
                <select required className='rounded-pill shadow border p-2 px-3 m-2 w-100' name="expectedCTC" onChange={takeInput} value={formData?.expectedCTC}>
                    <option value="">Select</option>
                    <option value="0-2 LPA">0-2 LPA</option>
                    <option value="2-5 LPA">2-5 LPA</option>
                    <option value="5-10 LPA">5-10 LPA</option>
                </select>
            </fieldset>
            <fieldset className='w-50 p-2'>
                <label className='small ps-3'>Current Salary</label>
                <input required className='rounded-pill shadow border p-2 px-3 m-2 w-100' type='text' name="currentSalary" placeholder='Current Salary' onChange={takeInput} value={formData?.currentSalary} />
            </fieldset>
            <fieldset className='w-50 p-2'>
                <label className='small ps-3'>How do you get your salary?</label>
                <div className='d-flex'>
                    <input required type='radio' name="howGetSalary" value="Bank" onChange={takeInput} checked={formData?.howGetSalary === "Bank"} />
                    <label className='small ps-3'>Bank</label>
                    <input required type='radio' name="howGetSalary" value="Cash" onChange={takeInput} checked={formData?.howGetSalary === "Cash"} />
                    <label className='small ps-3'>Cash</label>
                </div>
            </fieldset>
            <fieldset className='w-50 p-2'>
                <label className='small ps-3'>Do you have a salary slip?</label>
                <div className='d-flex'>
                    <input required type='radio' name="hasSalarySlip" value="Yes" onChange={takeInput} checked={formData?.hasSalarySlip === "Yes"} />
                    <label className='small ps-3'>Yes</label>
                    <input required type='radio' name="hasSalarySlip" value="No" onChange={takeInput} checked={formData?.hasSalarySlip === "No"} />
                    <label className='small ps-3'>No</label>
                </div>
            </fieldset>
            <fieldset className='w-50 p-2'>
                <label className='small ps-3'>Do you have a PF account?</label>
                <div className='d-flex'>
                    <input required type='radio' name="hasPFAccount" value="Yes" onChange={takeInput} checked={formData?.hasPFAccount === "Yes"} />
                    <label className='small ps-3'>Yes</label>
                    <input required type='radio' name="hasPFAccount" value="No" onChange={takeInput} checked={formData?.hasPFAccount === "No"} />
                    <label className='small ps-3'>No</label>
                </div>
                {formData?.hasPFAccount === "Yes" && (
                    <input required className='rounded-pill shadow border p-2 px-3 m-2 w-100' type='text' name="pfDetails" placeholder='PF Details' onChange={takeInput} value={formData?.pfDetails} />
                )}
            </fieldset>
            <fieldset className='w-50 p-2'>
                <label className='small ps-3'>Do you have relevant documents?</label>
                <select required className='rounded-pill shadow border p-2 px-3 m-2 w-100' name="hasRelevantDocuments" onChange={takeInput} value={formData?.hasRelevantDocuments}>
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </fieldset>
            <fieldset className='w-50 p-2'>
                <label className='small ps-3'>Resume File</label>
                <input required type='file' name="resumeFile" onChange={handleResumeChange} />
            </fieldset>
            <fieldset className='w-50 p-2'>
                <label className='small ps-3'>ID File</label>
                <input required type='file' name="idFile" onChange={handleIdChange} />
            </fieldset>


            <input type="hidden" name="currentAddress" value={formData?.currentAddress} />
            <input type="hidden" name="currentCity" value={formData?.currentCity} />
            <input type="hidden" name="currentState" value={formData?.currentState} />
            <input type="hidden" name="currentPincode" value={formData?.currentPincode} />
            <input type="hidden" name="permanentAddress" value={formData?.permanentAddress} />
            <input type="hidden" name="permanentCity" value={formData?.permanentCity} />
            <input type="hidden" name="permanentState" value={formData?.permanentState} />
            <input type="hidden" name="permanentPincode" value={formData?.permanentPincode} />
            <input type="hidden" name="highSchoolQualification" value={formData?.highSchoolQualification} />
            <input type="hidden" name="yearOfPassing" value={formData?.yearOfPassing} />
            <input type="hidden" name="collegeUniversity" value={formData?.collegeUniversity} />
            <input type="hidden" name="firstName" value={formData?.firstName} />
            <input type="hidden" name="lastName" value={formData?.lastName} />
            <input type="hidden" name="dob" value={formData?.dob} />
            <input type="hidden" name="email" value={formData?.email} />
            <input type="hidden" name="contactNumber" value={formData?.contactNumber} />

            <div className='w-100 d-flex'>
                <button onClick={() => setCurrentForm(prev => prev - 1)} type='button' className='btn btn-outline-dark w-25 me-auto'>Back</button>
                <button className='btn btn-outline-primary w-25 ms-auto'>Submit</button>
            </div>
        </form>
    )
}

export default ProfessionalForm