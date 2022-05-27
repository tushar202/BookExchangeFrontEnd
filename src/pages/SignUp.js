import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Box,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Input,
    Button, ButtonGroup,
    VStack,
    StackDivider,
    Stack
} from '@chakra-ui/react'

const SignUp = () => {
    const SignupSchema = Yup.object().shape({
        firstName: Yup.string().required('Required').trim(),
        lastName: Yup.string().required('Required').trim(),
        email: Yup.string().email('invalid Email').required('required').trim(),
        password: Yup.string().min(4, 'password must be more than 4 characters').required('Required').trim(),
        locality: Yup.string().required('dalo be').trim(),
        state: Yup.string().required('dalo be').trim(),
        city: Yup.string().required('dalo be').trim(),
        district: Yup.string().required('dalo be').trim(),
        pincode: Yup.number().min(100000, 'Enter a valid pincode'),
        mobileNumber: Yup.number().min(1000000000, 'Enter a valid Phonenumber')
    })
    return (
        <Stack direction={['column','row']} spacing={10}>
        <Box my={5} ml='25%' w='50%' border='1px' py={2} px={5} borderRadius='lg' spacing='10px'>

            <h1>Sign Up</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    locality: '',
                    state: '',
                    city: '',
                    district: '',
                    pincode: '',
                    mobileNumber: '',

                }}
                validationSchema={SignupSchema}
                onSubmit={async (values) => {

                    const resp = await axios.post('http://localhost:3000/signup', values)
                    // console.log(resp)
                    if (1) {
                        <Alert status='success'>
                            <AlertIcon />
                            Data uploaded to the server. Fire on!
                        </Alert>
                    } else {
                        <Alert status='error'>
                            <AlertIcon />
                            There was an error processing your request
                        </Alert>
                    }
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                    <VStack divider={<StackDivider borderColor='gray.200' />} spacing={4}> 
                        <Field name='firstName' id="firstName">
                            {({ field }) => (
                                <FormControl isInvalid={errors.firstName} isRequired>
                                    <FormLabel htmlFor="firstName">First Name</FormLabel>
                                    <Input  {...field} placeholder="Jane" />
                                    {errors.firstName && touched.firstName ? (
                                        <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                                    ) : null}
                                </FormControl>
                            )}

                        </Field>

                        <Field name='lastName' id='lastName'>
                            {({ field }) => (
                                <FormControl isInvalid={errors.lastName} isRequired>
                                    <FormLabel htmlFor="lastName">Last Name</FormLabel>
                                    <Input {...field} placeholder="Doe" />
                                    {errors.lastName && touched.lastName ? (
                                        <FormErrorMessage>{errors.lastName}</FormErrorMessage>
                                    ) : null}
                                </FormControl>
                            )}
                        </Field>
                        <Field id="email"
                            name="email" >
                            {({ field }) => (
                                <FormControl isInvalid={errors.email} isRequired>
                                    <FormLabel htmlFor="email" >Email</FormLabel>
                                    <Input
                                        {...field} placeholder="jane@acme.com" type="email"
                                    />
                                    <FormErrorMessage>{errors.email && touched.email ? (
                                        <FormErrorMessage>{errors.email}</FormErrorMessage>
                                    ) : null}</FormErrorMessage>

                                </FormControl>
                            )}

                        </Field>
                        <Field id="password"
                            name="password"
                        >
                            {({ field }) => (
                                <FormControl isInvalid={errors.password} isRequired>
                                    <FormLabel htmlFor='password'>password</FormLabel>
                                    <Input {...field} type="password" />
                                    <FormErrorMessage>
                                        {errors.password && touched.password ? (
                                            <div>{errors.password}</div>
                                        ) : null}
                                    </FormErrorMessage>
                                </FormControl>
                            )}


                        </Field>
                        <Field id='state' name='state' >
                            {({ field }) => (
                                <FormControl isRequired isInvalid={errors.state} >
                                    <FormLabel htmlFor="state" >State</FormLabel>
                                    <Input
                                        type="text"
                                        display='block'

                                    />
                                    {errors.state && touched.state ? (
                                        <div>{errors.state}</div>
                                    ) : null}
                                </FormControl>
                            )}

                        </Field>
                        <Field id="district"
                            name="district">
                            {({ field }) => (
                                <FormControl isRequired isInvalid={errors.district} >
                                    <FormLabel htmlFor="district">Disctrict</FormLabel>
                                    <Input

                                        placeholder="west singhbhum"
                                        type="text"
                                    />
                                    {errors.district && touched.district ? (
                                        <div>{errors.district}</div>
                                    ) : null}
                                </FormControl>
                            )}
                        </Field>
                        <Field id="locality"
                            name="locality">
                            {({ field }) => (
                                <FormControl isRequired isInvalid={errors.locality} >
                                    <FormLabel htmlFor="locality">Locality</FormLabel>
                                    <Input

                                        placeholder="nimdih"
                                        type="text"
                                    />
                                    {errors.locality && touched.locality ? (
                                        <div>{errors.locality}</div>
                                    ) : null}
                                </FormControl>
                            )}
                        </Field>
                        <Field id="pincode"
                            name="pincode" >
                            {({ field }) => (
                                <FormControl isInvalid={errors.pincode} isRequired>
                                    <FormLabel htmlFor="pincode">Pincode</FormLabel>
                                    <Input
                                        {...field}
                                        placeholder="570008"
                                        type="number"
                                    />
                                    {errors.pincode && touched.pincode ? (
                                        <div>{errors.pincode}</div>
                                    ) : null}
                                </FormControl>
                            )}
                        </Field>
                        <Field id="mobileNumber"
                            name="mobileNumber">
                            {({ field }) => (
                                <FormControl isInvalid={errors.mobileNumber} isRequired>
                                    <FormLabel htmlFor="mobileNumber">mobileNumber</FormLabel>
                                    <Input
                                        {...field}
                                        type="number"
                                    />
                                    {errors.mobileNumber && touched.mobileNumber ? (
                                        <div>{errors.mobileNumber}</div>
                                    ) : null}
                                </FormControl>
                            )}

                        </Field>
                        <Field id="city"
                            name="city">
                            {({ field }) => (
                                <FormControl isInvalid={errors.city} isRequired>
                                    <FormLabel htmlFor="city">City</FormLabel>
                                    <Input
                                        {...field}
                                        placeholder="Chaibasa"
                                        type="text"
                                    />
                                    {errors.city && touched.city ? (
                                        <div>{errors.city}</div>
                                    ) : null}
                                </FormControl>

                            )}
                        </Field>








                        <Button colorScheme='whatsapp' type='submit'>Submit</Button>
                        </VStack>
                    </Form>
                )}

            </Formik>
        </Box>
        </Stack>
    )
}

export default SignUp

