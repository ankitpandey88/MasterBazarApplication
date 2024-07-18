

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const PersonalInfo = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState(null); 
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');

    const [permanentAddress, setPermanentAddress] = useState('');
    const [currentAddress, setCurrentAddress] = useState('');

    const [highSchoolQualification, setHighSchoolQualification] = useState('');
    const [yearOfPassing, setYearOfPassing] = useState(null); // Year of Passing s
    const [collegeUniversity, setCollegeUniversity] = useState('');
    const [graduationStatus, setGraduationStatus] = useState('');
    
    const [lastCompany, setLastCompany] = useState('');
    const [designation, setDesignation] = useState('');
    const [dateOfJoining, setDateOfJoining] = useState(null); // Date of Joining state
    const [noticePeriod, setNoticePeriod] = useState('');
    const [joinAvailability, setJoinAvailability] = useState('');
    const [lastCTC, setLastCTC] = useState('');
    const [expectedCTC, setExpectedCTC] = useState('');
    const [currentSalary, setCurrentSalary] = useState('');
    const [howGetSalary, setHowGetSalary] = useState('');
    const [hasSalarySlip, setHasSalarySlip] = useState(false);
    const [hasPFAccount, setHasPFAccount] = useState(false);
    const [pfDetails, setPfDetails] = useState('');
    const [hasRelevantDocuments, setHasRelevantDocuments] = useState('');
    const [resumeFile, setResumeFile] = useState(null);
    const [idFile, setIdFile] = useState(null);

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            firstName,
            lastName,
            dob,
            email,
            contactNumber,
            permanentAddress,
            currentAddress,
            highSchoolQualification,
            yearOfPassing,
            collegeUniversity,
            graduationStatus,
            lastCompany,
            designation,
            dateOfJoining,
            noticePeriod,
            joinAvailability,
            lastCTC,
            expectedCTC,
            currentSalary,
            howGetSalary,
            hasSalarySlip,
            hasPFAccount,
            pfDetails,
            hasRelevantDocuments,
            resumeFile,
            idFile
        });
        // Add your form submission logic here
        // Example: send data to backend or perform further actions
        resetForm();
    };

    // Function to reset form fields
    const resetForm = () => {
        setFirstName('');
        setLastName('');
        setDob(null);
        setEmail('');
        setContactNumber('');
        setPermanentAddress('');
        setCurrentAddress('');
        setHighSchoolQualification('');
        setYearOfPassing(null);
        setCollegeUniversity('');
        setGraduationStatus('');
        setLastCompany('');
        setDesignation('');
        setDateOfJoining(null);
        setNoticePeriod('');
        setJoinAvailability('');
        setLastCTC('');
        setExpectedCTC('');
        setCurrentSalary('');
        setHowGetSalary('');
        setHasSalarySlip(false);
        setHasPFAccount(false);
        setPfDetails('');
        setHasRelevantDocuments('');
        setResumeFile(null);
        setIdFile(null);
    };

    // Function to validate email using regex
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    return (
        <div className="container w-100">
            <div className="row justify-content-center">
                <div className="w-100">
                    <div className="card">
                        <div className="card-header bg-primary text-white">Personal Information</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>

                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="firstName">First Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="firstName"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="lastName"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="dob">Date of Birth</label>
                                        <DatePicker
                                            selected={dob}
                                            onChange={(date) => setDob(date)}
                                            peekNextMonth
                                            showMonthDropdown
                                            showYearDropdown
                                            dropdownMode="select"
                                            dateFormat="dd/MM/yyyy"
                                            className="form-control"
                                            placeholderText="Select Date of Birth"
                                            required
                                        />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                        {!validateEmail(email) && email.length > 0 && (
                                            <div className="text-danger">Please enter a valid email address.</div>
                                        )}
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="contactNumber">Contact Number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="contactNumber"
                                            value={contactNumber}
                                            onChange={(e) => {
                                                const re = /^[0-9\b]+$/;
                                                if (e.target.value === '' || re.test(e.target.value)) {
                                                    setContactNumber(e.target.value);
                                                }
                                            }}
                                            required
                                        />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="permanentAddress">Permanent Address</label>
                                        <textarea
                                            className="form-control"
                                            id="permanentAddress"
                                            rows="3"
                                            value={permanentAddress}
                                            onChange={(e) => setPermanentAddress(e.target.value)}
                                            required
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="currentAddress">Current Address</label>
                                        <textarea
                                            className="form-control"
                                            id="currentAddress"
                                            rows="3"
                                            value={currentAddress}
                                            onChange={(e) => setCurrentAddress(e.target.value)}
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="highSchoolQualification">High School Qualification</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="highSchoolQualification"
                                            value={highSchoolQualification}
                                            onChange={(e) => setHighSchoolQualification(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="yearOfPassing">Year of Passing</label>
                                        <DatePicker
                                            selected={yearOfPassing}
                                            onChange={(date) => setYearOfPassing(date)}
                                            peekNextMonth
                                            showMonthDropdown
                                            showYearDropdown
                                            dropdownMode="select"
                                            dateFormat="yyyy"
                                            className="form-control"
                                            placeholderText="Select Year of Passing"
                                            required
                                        />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="collegeUniversity">College / University</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="collegeUniversity"
                                            value={collegeUniversity}
                                            onChange={(e) => setCollegeUniversity(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label>Graduation Status</label>
                                        <div>
                                            <div className="form-check">
                                                <input
                                                    type="radio"
                                                    className="form-check-input"
                                                    name="graduationStatus"
                                                    value="passed"
                                                    checked={graduationStatus === 'passed'}
                                                    onChange={(e) => setGraduationStatus(e.target.value)}
                                                    required
                                                />
                                                <label className="form-check-label ml-2">Passed</label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    type="radio"
                                                    className="form-check-input"
                                                    name="graduationStatus"
                                                    value="pursuing"
                                                    checked={graduationStatus === 'pursuing'}
                                                    onChange={(e) => setGraduationStatus(e.target.value)}
                                                    required
                                                />
                                                <label className="form-check-label ml-2">Pursuing</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="lastCompany">Last Company</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="lastCompany"
                                            value={lastCompany}
                                            onChange={(e) => setLastCompany(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="designation">Designation</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="designation"
                                            value={designation}
                                            onChange={(e) => setDesignation(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="dateOfJoining">Date of Joining</label>
                                        <DatePicker
                                            selected={dateOfJoining}
                                            onChange={(date) => setDateOfJoining(date)}
                                            peekNextMonth
                                            showMonthDropdown
                                            showYearDropdown
                                            dropdownMode="select"
                                            dateFormat="dd/MM/yyyy"
                                            className="form-control"
                                            placeholderText="Select Date of Joining"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="noticePeriod">Notice Period</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="noticePeriod"
                                            value={noticePeriod}
                                            onChange={(e) => setNoticePeriod(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="joinAvailability">Join Availability</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="joinAvailability"
                                            value={joinAvailability}
                                            onChange={(e) => setJoinAvailability(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="lastCTC">Last CTC</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="lastCTC"
                                            value={lastCTC}
                                            onChange={(e) => setLastCTC(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="expectedCTC">Expected CTC</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="expectedCTC"
                                            value={expectedCTC}
                                            onChange={(e) => setExpectedCTC(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="currentSalary">Current Salary</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="currentSalary"
                                            value={currentSalary}
                                            onChange={(e) => setCurrentSalary(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="howGetSalary">How do you get your salary?</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="howGetSalary"
                                            value={howGetSalary}
                                            onChange={(e) => setHowGetSalary(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="hasSalarySlip"
                                                checked={hasSalarySlip}
                                                onChange={(e) => setHasSalarySlip(e.target.checked)}
                                            />
                                            <label className="form-check-label" htmlFor="hasSalarySlip">Salary Slip</label>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="hasPFAccount"
                                                checked={hasPFAccount}
                                                onChange={(e) => setHasPFAccount(e.target.checked)}
                                            />
                                            <label className="form-check-label" htmlFor="hasPFAccount">PF Account</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="pfDetails">PF Details (if applicable)</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="pfDetails"
                                        value={pfDetails}
                                        onChange={(e) => setPfDetails(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="hasRelevantDocuments">Do you have relevant documents?</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="hasRelevantDocuments"
                                        value={hasRelevantDocuments}
                                        onChange={(e) => setHasRelevantDocuments(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="form-row ">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="resumeFile">Resume (PDF)</label>
                                        <input
                                            type="file"
                                            className="form-control-file"
                                            id="resumeFile"
                                            onChange={(e) => setResumeFile(e.target.files[0])}
                                            accept=".pdf"
                                            required
                                        />
                                    </div>
                                    <div className="form-group col-md-12" style={{marginTop:"10px"}}>
                                        <label htmlFor="idFile">ID Proof (PDF)</label>
                                        <input
                                            type="file"
                                            className="form-control-file"
                                            id="idFile"
                                            onChange={(e) => setIdFile(e.target.files[0])}
                                            accept=".pdf"
                                            required
                                        />
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// export default PersonalInfo;
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const PersonalInfo = () => {
//     const [step, setStep] = useState(1);

//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [dob, setDob] = useState(null);
//     const [email, setEmail] = useState('');
//     const [contactNumber, setContactNumber] = useState('');
//     const [permanentAddress, setPermanentAddress] = useState('');
//     const [currentAddress, setCurrentAddress] = useState('');
//     const [highSchoolQualification, setHighSchoolQualification] = useState('');
//     const [yearOfPassing, setYearOfPassing] = useState(null);
//     const [collegeUniversity, setCollegeUniversity] = useState('');
//     const [graduationStatus, setGraduationStatus] = useState('');
//     const [lastCompany, setLastCompany] = useState('');
//     const [designation, setDesignation] = useState('');
//     const [dateOfJoining, setDateOfJoining] = useState(null);
//     const [noticePeriod, setNoticePeriod] = useState('');
//     const [joinAvailability, setJoinAvailability] = useState('');
//     const [lastCTC, setLastCTC] = useState('');
//     const [expectedCTC, setExpectedCTC] = useState('');
//     const [currentSalary, setCurrentSalary] = useState('');
//     const [howGetSalary, setHowGetSalary] = useState('');
//     const [hasSalarySlip, setHasSalarySlip] = useState(false);
//     const [hasPFAccount, setHasPFAccount] = useState(false);
//     const [pfDetails, setPfDetails] = useState('');
//     const [hasRelevantDocuments, setHasRelevantDocuments] = useState('');
//     const [resumeFile, setResumeFile] = useState(null);
//     const [idFile, setIdFile] = useState(null);

//     const nextStep = () => {
//         setStep(step + 1);
//     };

//     const prevStep = () => {
//         setStep(step - 1);
//     };

    
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log({
//             firstName,
//             lastName,
//             dob,
//             email,
//             contactNumber,
//             permanentAddress,
//             currentAddress,
//             highSchoolQualification,
//             yearOfPassing,
//             collegeUniversity,
//             graduationStatus,
//             lastCompany,
//             designation,
//             dateOfJoining,
//             noticePeriod,
//             joinAvailability,
//             lastCTC,
//             expectedCTC,
//             currentSalary,
//             howGetSalary,
//             hasSalarySlip,
//             hasPFAccount,
//             pfDetails,
//             hasRelevantDocuments,
//             resumeFile,
//             idFile
//         });
      
//         resetForm();
//     };

   
//     const resetForm = () => {
//         setFirstName('');
//         setLastName('');
//         setDob(null);
//         setEmail('');
//         setContactNumber('');
//         setPermanentAddress('');
//         setCurrentAddress('');
//         setHighSchoolQualification('');
//         setYearOfPassing(null);
//         setCollegeUniversity('');
//         setGraduationStatus('');
//         setLastCompany('');
//         setDesignation('');
//         setDateOfJoining(null);
//         setNoticePeriod('');
//         setJoinAvailability('');
//         setLastCTC('');
//         setExpectedCTC('');
//         setCurrentSalary('');
//         setHowGetSalary('');
//         setHasSalarySlip(false);
//         setHasPFAccount(false);
//         setPfDetails('');
//         setHasRelevantDocuments('');
//         setResumeFile(null);
//         setIdFile(null);
//         setStep(1); 
//     };

   
//     const validateEmail = (email) => {
//         const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return re.test(String(email).toLowerCase());
//     };

 
//     const renderStepForm = () => {
//         switch (step) {
//             case 1:
//                 return (
//                     <div>
//                         <div className="form-row">
//                             <div className="form-group col-md-12">
//                                 <label htmlFor="firstName">First Name</label>
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     id="firstName"
//                                     value={firstName}
//                                     onChange={(e) => setFirstName(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="form-group col-md-12">
//                                 <label htmlFor="lastName">Last Name</label>
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     id="lastName"
//                                     value={lastName}
//                                     onChange={(e) => setLastName(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                         </div>
//                         <div className="form-row">
//                             <div className="form-group col-md-12">
//                                 <label htmlFor="dob">Date of Birth</label>
//                                 <DatePicker
//                                     selected={dob}
//                                     onChange={(date) => setDob(date)}
//                                     peekNextMonth
//                                     showMonthDropdown
//                                     showYearDropdown
//                                     dropdownMode="select"
//                                     dateFormat="dd/MM/yyyy"
//                                     className="form-control"
//                                     placeholderText="Select Date of Birth"
//                                     required
//                                 />
//                             </div>
//                             <div className="form-group col-md-12">
//                                 <label htmlFor="email">Email</label>
//                                 <input
//                                     type="email"
//                                     className="form-control"
//                                     id="email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     required
//                                 />
//                                 {!validateEmail(email) && email.length > 0 && (
//                                     <div className="text-danger">Please enter a valid email address.</div>
//                                 )}
//                             </div>
//                         </div>
//                         <div className="form-row">
//                             <div className="form-group col-md-12">
//                                 <label htmlFor="contactNumber">Contact Number</label>
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     id="contactNumber"
//                                     value={contactNumber}
//                                     onChange={(e) => {
//                                         const re = /^[0-9\b]+$/;
//                                         if (e.target.value === '' || re.test(e.target.value)) {
//                                             setContactNumber(e.target.value);
//                                         }
//                                     }}
//                                     required
//                                 />
//                             </div>
//                             <div className="form-group col-md-12">
//                                 <label htmlFor="permanentAddress">Permanent Address</label>
//                                 <textarea
//                                     className="form-control"
//                                     id="permanentAddress"
//                                     rows="3"
//                                     value={permanentAddress}
//                                     onChange={(e) => setPermanentAddress(e.target.value)}
//                                     required
//                                 ></textarea>
//                             </div>
//                         </div>
//                         <button className="btn btn-primary" onClick={nextStep}>Next</button>
//                     </div>
//                 );
//             case 2:
//                 return (
//                     <div>
//                         <div className="form-row">
//                             <div className="form-group col-md-12">
//                                 <label htmlFor="currentAddress">Current Address</label>
//                                 <textarea
//                                     className="form-control"
//                                     id="currentAddress"
//                                     rows="3"
//                                     value={currentAddress}
//                                     onChange={(e) => setCurrentAddress(e.target.value)}
//                                     required
//                                 ></textarea>
//                             </div>
//                             <div className="form-group col-md-12">
//                                 <label htmlFor="highSchoolQualification">High School Qualification</label>
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     id="highSchoolQualification"
//                                     value={highSchoolQualification}
//                                     onChange={(e) => setHighSchoolQualification(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                         </div>
//                         <div className="form-row">
//                             <div className="form-group col-md-12">
//                                 <label htmlFor="yearOfPassing">Year of Passing</label>
//                                 <DatePicker
//                                     selected={yearOfPassing}
//                                     onChange={(date) => setYearOfPassing(date)}
//                                     peekNextMonth
//                                     showMonthDropdown
//                                     showYearDropdown
//                                     dropdownMode="select"
//                                     dateFormat="yyyy"
//                                     className="form-control"
//                                     placeholderText="Select Year of Passing"
//                                     required
//                                 />
//                             </div>
//                             <div className="form-group col-md-12">
//                                 <label htmlFor="collegeUniversity">College / University</label>
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     id="collegeUniversity"
//                                     value={collegeUniversity}
//                                     onChange={(e) => setCollegeUniversity(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                         </div>
//                         <div className="form-row">
//                             <div className="form-group col-md-12">
//                                 <label>Graduation Status</label>
//                                 <div>
//                                     <div className="form-check">
//                                         <input
//                                             type="radio"
//                                             className="form-check-input"
//                                             name="graduationStatus"
//                                             value="passed"
//                                             checked={graduationStatus === 'passed'}
//                                             onChange={(e) => setGraduationStatus(e.target.value)}
//                                             required
//                                         />
//                                         <label className="form-check-label ml-2">Passed</label>
//                                     </div>
//                                     <div className="form-check">
//                                         <input
//                                             type="radio"
//                                             className="form-check-input"
//                                             name="graduationStatus"
//                                             value="pursuing"
//                                             checked={graduationStatus === 'pursuing'}
//                                             onChange={(e) => setGraduationStatus(e.target.value)}
//                                         />
//                                         <label className="form-check-label ml-2">Pursuing</label>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <button className="btn btn-secondary mr-2" onClick={prevStep}>Previous</button>
//                         <button className="btn btn-primary" onClick={nextStep}>Next</button>
//                     </div>
//                 );
//             case 3:
//                 return (
//                     <div>
//                         <div className="form-row">
//                             <div className="form-group col-md-12">
//                                 <label htmlFor="lastCompany">Last Company</label>
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     id="lastCompany"
//                                     value={lastCompany}
//                                     onChange={(e) => setLastCompany(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="form-group col-md-12">
//                                 <label htmlFor="designation">Designation</label>
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     id="designation"
//                                     value={designation}
//                                     onChange={(e) => setDesignation(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                         </div>
//                         <div className="form-row">
//                             <div className="form-group col-md-12">
//                                 <label htmlFor="dateOfJoining">Date of Joining</label>
//                                 <DatePicker
//                                     selected={dateOfJoining}
//                                     onChange={(date) => setDateOfJoining(date)}
//                                     peekNextMonth
//                                     showMonthDropdown
//                                     showYearDropdown
//                                     dropdownMode="select"
//                                     dateFormat="dd/MM/yyyy"
//                                     className="form-control"
//                                     placeholderText="Select Date of Joining"
//                                     required
//                                 />
//                             </div>
//                             <div className="form-group col-md-12">
//                                 <label htmlFor="noticePeriod">Notice Period</label>
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     id="noticePeriod"
//                                     value={noticePeriod}
//                                     onChange={(e) => setNoticePeriod(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                         </div>
//                         <div className="form-row">
//                             <div className="form-group col-md-12">
//                                 <label htmlFor="joinAvailability">Join Availability</label>
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     id="joinAvailability"
//                                     value={joinAvailability}
//                                     onChange={(e) => setJoinAvailability(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="form-group col-md-12">
//                                 <label htmlFor="lastCTC">Last CTC</label>
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     id="lastCTC"
//                                     value={lastCTC}
//                                     onChange={(e) => setLastCTC(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                         </div>
//                         <div className="form-row">
//                             <div className="form-group col-md-12">
//                                 <label htmlFor="expectedCTC">Expected CTC</label>
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     id="expectedCTC"
//                                     value={expectedCTC}
//                                     onChange={(e) => setExpectedCTC(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="form-group col-md-12">
//                                 <label htmlFor="currentSalary">Current Salary</label>
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     id="currentSalary"
//                                     value={currentSalary}
//                                     onChange={(e) => setCurrentSalary(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                         </div>
//                         <div className="form-row">
//                             <div className="form-group col-md-12">
//                                 <label htmlFor="howGetSalary">How do you get your salary?</label>
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     id="howGetSalary"
//                                     value={howGetSalary}
//                                     onChange={(e) => setHowGetSalary(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                         </div>
//                         <button className="btn btn-secondary mr-2" onClick={prevStep}>Previous</button>
//                         <button className="btn btn-primary" onClick={nextStep}>Next</button>
//                     </div>
//                 );
//             case 4:
//                 return (
//                     <div>
//                         <div className="form-row">
//                             <div className="form-group col-md-12">
//                                 <label>Do you have a salary slip?</label>
//                                 <div>
//                                     <div className="form-check">
//                                         <input
//                                             type="checkbox"
//                                             className="form-check-input"
//                                             id="hasSalarySlip"
//                                             checked={hasSalarySlip}
//                                             onChange={(e) => setHasSalarySlip(e.target.checked)}
//                                         />
//                                         <label className="form-check-label ml-2" htmlFor="hasSalarySlip">
//                                             Yes
//                                         </label>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="form-group col-md-12">
//                                 <label>Do you have a PF account?</label>
//                                 <div>
//                                     <div className="form-check">
//                                         <input
//                                             type="checkbox"
//                                             className="form-check-input"
//                                             id="hasPFAccount"
//                                             checked={hasPFAccount}
//                                             onChange={(e) => setHasPFAccount(e.target.checked)}
//                                         />
//                                         <label className="form-check-label ml-2" htmlFor="hasPFAccount">
//                                             Yes
//                                         </label>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="form-row">
//                             <div className="form-group col-md-12">
//                                 <label htmlFor="pfDetails">PF Account Details (if applicable)</label>
//                                 <textarea
//                                     className="form-control"
//                                     id="pfDetails"
//                                     rows="3"
//                                     value={pfDetails}
//                                     onChange={(e) => setPfDetails(e.target.value)}
//                                 ></textarea>
//                             </div>
//                             <div className="form-group col-md-12">
//                                 <label htmlFor="hasRelevantDocuments">Do you have relevant documents?</label>
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     id="hasRelevantDocuments"
//                                     value={hasRelevantDocuments}
//                                     onChange={(e) => setHasRelevantDocuments(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                         </div>
//                         <div className="form-row">
//                             <div className="form-group col-md-12">
//                                 <label htmlFor="resumeFile">Upload Resume (if applicable)</label>
//                                 <input
//                                     type="file"
//                                     className="form-control-file"
//                                     id="resumeFile"
//                                     onChange={(e) => setResumeFile(e.target.files[0])}
//                                 />
//                             </div>
//                             <div className="form-group col-md-12" style={{marginTop: '10px'}}>
//                                 <label htmlFor="idFile">Upload ID Proof (if applicable)</label>
//                                 <input
//                                     type="file"
//                                     className="form-control-file"
//                                     id="idFile"
//                                     onChange={(e) => setIdFile(e.target.files[0])}
//                                 />
//                             </div>
//                         </div>
//                            <div style={{ marginLeft: '100px' }}>
//                           <button className="btn btn-secondary mr-2" onClick={prevStep}>Previous</button>
//                           <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
//                          </div>
//                         {/* <button className="btn btn-secondary mr-2" onClick={prevStep} style={{marginLeft:'100px'}}>Previous</button>
//                         <button className="btn btn-primary" onClick={handleSubmit}>Submit</button> */}
//                     </div>
//                 );
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="container w-100">
//             <div className="row justify-content-center">
//                 <div className="w-100">
//                     <div className="card">
//                         <div className="card-header bg-primary text-white">Personal Information</div>
//                         <div className="card-body">
//                             <form onSubmit={handleSubmit}>
//                                 {renderStepForm()}
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

export default PersonalInfo;
