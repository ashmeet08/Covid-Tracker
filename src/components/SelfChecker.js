import React from 'react'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Radio, MenuItem, TextField } from '@material-ui/core'
import TextError from './TextError'
import './Form.css'

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    age: Yup.string().required('Required'),
    gender: Yup.string().required('Required'),
    livinglocation: Yup.string().required('Required'),
    workinglocation: Yup.string().required('Required'),
    smoke: Yup.string().required('Required'),
    travelHistory: Yup.string().required('Required'),
    travelLocation: Yup.string().required('Required'),
    travelDomestic: Yup.string().required('Required'),
    travelDomesticLocation: Yup.string().required('Required'),
    contactPeople: Yup.string().required('Required'),
    suspectPeople: Yup.string().required('Required'),
    temperature: Yup.string().required('Required'),
    symptoms: Yup.string().required('Required'),
    complications: Yup.string().required('Required'),
    underlyingConditions: Yup.string().required('Required')

})

function SelfChecker() {
    function ifNeeded(data) {
        var score = 0;
        if (data.livinglocation !== "Living Alone") {
          score++;
        }
        if (data.workinglocation !== "None of the above") {
          score++;
        }
        if (data.smoke !== "No") {
          score++;
        }
        if (data.travelHistory !== "No") {
          score++;
          if (data.travelLocation !== "Other Country") {
            score += 2;
          }
        }
        if (data.travelDomestic !== "No") {
          score += 3;
        }
        if (data.contactPeople !== "No") {
          score++;
        }
        if (data.suspectPeople !== "No") {
          score++;
        }
        if (data.symptoms.length !== 0) {
          score++;
        }
        if (data.complications.length !== 0) {
          score++;
        }
        if (data.underlyingConditions.length !== 0) {
          score++;
        }
        switch (data.temperature) {
          case "Medium":
            score++;
            break;
          case "High":
            score++;
            break;
          case "VHigh":
            score++;
            break;
          default:
        }
      
        if (score > 9) {
          return "High Based on your Self Assessment, we recommend you to: Seek medical attention immediately. Please visit a Physician as there may be a requirement for further care. Laboratory Tests including Covid19 test and Imaging may be needed as per your Physician's advice. Monitor your symptoms and isolate yourself.";
        }
      
        if (score <= 9 && score >= 5) {
          return "Medium RiskBased on your Self Assessment, we recommend you to: Consult a Physician at the earliest. Start Home Isolation immediately.   Laboratory Tests including Covid 19 test and Imaging options are based on physician\'s advice.   Monitor your symptoms and get medical attention if your situation worsens. ";
        }
      
        if (score >= 0 && score <= 4) {
          return "Low Risk, Based on your Self Assessment, we recommend you to:Stay at home and take care of yourself. Laboratory Tests and Imaging options are based on physician's advice. Monitor your symptoms and get medical attention if your health worsens.";
        }
        console.log(score);
      }
    return (
        <Formik
            initialValues={{
                name: "",
                age: "",
                gender: "",
                livinglocation: "",
                workinglocation: "",
                smoke: "",
                travelHistory: "",
                travelLocation: "",
                travelDomestic: "",
                travelDomesticLocation: "",
                contactPeople: "",
                suspectPeople: "",
                temperature: "",
                symptoms: "",
                complications: "",
                underlyingConditions: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(data, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                console.log("submit: ", data);
                setSubmitting(false);
                resetForm();
                ifNeeded(data)
            }}
        /*//initialValues={formValues || initialValues}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
        validateOnMount
    //validateOnChange={false}
//validateOnBlur={false}*/
        >
            {({ values, isSubmitting }) => (
                <div>

                    <div className='bg-img'>
                        <body>
                            <Form className='survey-form'>
                                <div
                                    style={{
                                        background: '#98ccd3',
                                        padding: '5%',
                                        fontFamily: '"Arial", Monaco, monospace'
                                    }}><center><h1
                                        style={{
                                            background: '#98ccd3',
                                            color: 'black',
                                            padding: '1rem',
                                            display: 'inline-block',
                                            fontFamily: '"Arial", Monaco, monospace'
                                        }}>Self Assisment Questionaire</h1></center>

                                    <div className='form-control'>
                                        <label htmlFor="name">1) What is your name?</label><br />

                                        <Field type='text' id='name' name='name' placeholder='Enter your name' className='textbox' as={TextField} />

                                        <ErrorMessage name='name' component={TextError} />
                                    </div>

                                    <div className='form-control '>
                                        <label htmlFor="age">2) How old are you?</label><br />
                                        <Field type='text' id='age' name='age' placeholder='Enter your age' className='textbox' as={TextField} />
                                        <ErrorMessage name='age' component={TextError} />
                                    </div>

                                    <div className='form-control '>
                                        <label htmlFor="gender">3) Please select your gender:-</label><br />
                                        <ErrorMessage name='gender' component={TextError} />


                                        <Field type='radio' value="Female" name='gender' as={Radio} />
                                        <span>Female</span><br />

                                        <Field type='radio' value="Male" name='gender' as={Radio} />
                                        <span>Male</span><br />

                                        <Field type='radio' value="Others" name='gender' as={Radio} />
                                        <span>Others</span><br />

                                    </div>

                                    <div className='form-control'>
                                        <label htmlFor="livinglocation">4) What is your current living condition?</label><br />
                                        <ErrorMessage name='livinglocation' component={TextError} />

                                        <Field type='radio' id='livinglocation' name='livinglocation' value='Living Alone' as={Radio} />
                                        <span> Living Alone</span><br />

                                        <Field type='radio' id='livinglocation' name='livinglocation' value='Living with Family' as={Radio} />
                                        <span> Living With Family</span>
                                    </div>


                                    <div className='form-control'>
                                        <label htmlFor="workinglocation">5) Where do you work? (current nature & location of job)</label><br />
                                        <ErrorMessage name='workinglocation' component={TextError} />

                                        <Field type='radio' id='workinglocation' name='workinglocation' value='Medical/Healthcare field' as={Radio} />
                                        <span> Medical/Healthcare field</span><br />

                                        <Field type='radio' id='workinglocation' name='workinglocation' value='Community facility(school,day care center,university,old age home etc)' as={Radio} />
                                        <span> Community facility(school,day care center,university,old age home etc)</span><br />

                                        <Field type='radio' id='workinglocation' name='workinglocation' value='None of the above' as={Radio} />
                                        <span> None of the above</span>

                                    </div>

                                    <div className='form-control'>
                                        <label htmlFor="smoke">6) Do you smoke?</label><br />
                                        <ErrorMessage name='smoke' component={TextError} />

                                        <Field type='radio' id='smoke' name='smoke' value='Yes' as={Radio} />
                                        <span>Yes</span><br />

                                        <Field type='radio' id='smoke' name='smoke' value='No' as={Radio} />
                                        <span>No</span>
                                    </div>

                                    <div className='form-control'>
                                        <label htmlFor="travelHistory">7) Have you been travelling internationally in the past month ?</label><br />
                                        <ErrorMessage name='travelHistory' component={TextError} />

                                        <Field type='radio' id='travelHistory' name='travelHistory' value='Yes' as={Radio} />
                                        <span>Yes</span><br />

                                        <Field type='radio' id='travelHistory' name='travelHistory' value='No' as={Radio} />
                                        <span>No</span>
                                    </div>

                                    <div className="form-control">
                                        <label className="label" htmlFor="travelLocation">
                                            8) if yes, was it to or from one of these places?
                                    </label>
                                        <ErrorMessage name="travelLoaction" component={TextError} />
                                        <Field
                                            name="travelLocation"
                                            id="travelLocation"
                                            className="select"
                                            as={TextField}
                                            select
                                        >
                                            <MenuItem value="China">China</MenuItem>
                                            <MenuItem value="europe">Europe</MenuItem>
                                            <MenuItem value="Iran">Iran</MenuItem>
                                            <MenuItem value="U.S">U.S</MenuItem>
                                            <MenuItem value="South Korea">South Korea</MenuItem>
                                            <MenuItem value="Japan">Japan</MenuItem>
                                            <MenuItem value="Other Country">Other Country</MenuItem>
                                        </Field>
                                    </div>

                                    <div className='form-control'>
                                        <label htmlFor="travelDomestic">9) Have you been travelling domestically in the past couple of month ?</label><br />
                                        <ErrorMessage name='travelDomestic' component={TextError} />
                                        <Field type='radio' id='travelDomestic' name='travelDomestic' value='Yes' as={Radio} />
                                        <span>Yes</span><br />

                                        <Field type='radio' id='travelDomestic' name='travelDomestic' value='No' as={Radio} />
                                        <span>No</span>
                                    </div>

                                    <div className="form-control">
                                        <label className="label" htmlFor="travelDomesticLocation">
                                            10) if yes, was it to or from one of these places?
                                    </label>
                                        <ErrorMessage name="travelLocation" component={TextError} />
                                        <Field
                                            name="travelDomesticLocation"
                                            id="travelDomesticLocation"
                                            className="select"
                                            as={TextField}
                                            select
                                        >
                                            <MenuItem value="Rajasthan">Rajasthan</MenuItem>
                                            <MenuItem value="Karnatak">Karnatak</MenuItem>
                                            <MenuItem value="Gujarat">Gujarat</MenuItem>
                                            <MenuItem value="Haryana">Haryana</MenuItem>
                                            <MenuItem value="Kerala">Kerala</MenuItem>
                                            <MenuItem value="Punjab">Punjab</MenuItem>
                                            <MenuItem value="Delhi">Delhi</MenuItem>
                                            <MenuItem value="Maharatra">Maharastra</MenuItem>
                                            <MenuItem value="Telangana">Telangana</MenuItem>
                                            <MenuItem
                                                value="Not the one listed"
                                                label="Not the one listed"
                                            />
                                        </Field>
                                    </div>

                                    <div className='form-control'>
                                        <label htmlFor="contactPeople">11) Have you had a close contact with a confirmed case ?</label><br />
                                        <ErrorMessage name='contactPeople' component={TextError} />
                                        <Field type='radio' id='contactPeople' name='contactPeople' value='Yes' as={Radio} />
                                        <span>Yes</span><br />

                                        <Field type='radio' id='contactPeople' name='contactPeople' value='No' as={Radio} />
                                        <span>No</span>
                                    </div>

                                    <div className='form-control'>
                                        <label htmlFor="suspectPeople">12) Have you had a close contact with a suspected case ?</label><br />
                                        <ErrorMessage name='suspectPeople' component={TextError} />
                                        <Field type='radio' id='suspectPeople' name='suspectPeople' value='Yes' as={Radio} />
                                        <span>Yes</span><br />
                                        <Field type='radio' id='suspectPeople' name='suspectPeople' value='No' as={Radio} />
                                        <span>No</span><br />
                                        <Field type='radio' id='suspectPeople' name='suspectPeople' value='Do not Know' as={Radio} />
                                        <span>Do not Know</span>
                                    </div>

                                    <div className="form-control">
                                        <label className="label" htmlFor="temperature">
                                            <span>
                                                13) Please let us know your current body temperature in degree
                                                Fahrenheit (Normal body temperature)?
                    </span>
                                        </label>
                                        <ErrorMessage name="temperature" component={TextError} />
                                        <Field
                                            name="temperature"
                                            id="temperature"
                                            className="select"
                                            as={TextField}
                                            select
                                        >
                                            <MenuItem value="Normal">Normal (96°F-98.6°F)</MenuItem>
                                            <MenuItem value="Mild">Mild Fever (98.6°F-100°F)</MenuItem>
                                            <MenuItem value="Medium">
                                                Medium Fever (101°F-102°F)
                                    </MenuItem>
                                            <MenuItem value="High">High Fever (103°F-104°F)</MenuItem>
                                            <MenuItem value="VHigh">Very High Fever (104°F)</MenuItem>
                                            <MenuItem value="Unknown">Don’t know</MenuItem>
                                        </Field>
                                    </div>

                                    <div className="form-control">
                                        <label className="label" htmlFor="symptoms">
                                            <span>14)
                                            Are you experiencing any of the symptoms below (select all
                                            those applicable)
                    </span>
                                        </label>
                                        <ErrorMessage name="symptoms" component={TextError} />
                                        <Field
                                            name="symptoms"
                                            id="symptoms"
                                            className="select"
                                            as={TextField}
                                            select
                                        >
                                            <MenuItem value="Tired">
                                                Fatigue/ Tiredness/ Weakness
                    </MenuItem>
                                            <MenuItem value="Cold">
                                                Chills/ Sneezing/ Sore Throat
                    </MenuItem>
                                            <MenuItem value="Pain">Limb Pain</MenuItem>
                                            <MenuItem value="Cough">Persistent Cough</MenuItem>
                                            <MenuItem value="None">NONE</MenuItem>
                                        </Field>
                                    </div>

                                    <div className="form-control">
                                        <label className="label" htmlFor="complications">
                                            <span>15)
                                            Do you have a history of any of these complications
                                            (select all those applicable)
                    </span>
                                        </label>
                                        <ErrorMessage name="complications" component={TextError} />
                                        <Field
                                            name="complications"
                                            id="complications"
                                            className="select"
                                            as={TextField}
                                            select
                                        >
                                            <MenuItem value="Lung" selected>Chronic lung disease</MenuItem>
                                            <MenuItem value="Diabetes">Diabetes</MenuItem>
                                            <MenuItem value="Heart">Heart disease</MenuItem>
                                            <MenuItem value="Obesity">Obesity</MenuItem>
                                            <MenuItem value="None">None of the listed</MenuItem>
                                        </Field>
                                    </div>


                                    <div className='form-control'>
                                        <label htmlFor="underlyingConditions">16) Are you currently taking any of the following? (you take or get immunosuppresives
                                after an organ transplant, in the therapy of an autoimmune disease, or during chemotherapy.)?</label><br />
                                        <ErrorMessage name='underlyingConditions' component={TextError} />
                                        <Field type='radio' id='underlyingConditions' name='underlyingConditions' value='Steriods' as={Radio} />
                                        <span>Steriods</span><br />

                                        <Field type='radio' id='underlyingConditions' name='underlyingConditions' value='Immunnosuppressants' as={Radio} />
                                        <span>Immunnosuppressants</span><br />

                                        <Field type='radio' id='underlyingConditions' name='underlyingConditions' value='None of the above' as={Radio} />
                                        <span>None of the above</span><br />
                                    </div>
                                    <center>
                                        <button type='submit' disabled={isSubmitting}>SUBMIT</button>
                                    </center>
                                </div>
                            </Form>

                        </body>


                    </div>

                </div>

            )}
        </Formik>


    )
}

export default SelfChecker
