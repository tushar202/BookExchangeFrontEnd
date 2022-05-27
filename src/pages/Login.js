import React, { useState } from 'react'
// import Button from '@mui/material/Button';
import { Formik, Field, Form } from 'formik';
import { Stack, Box, VStack, FormControl, FormLabel, StackDivider, FormErrorMessage, Input, Button, Alert, AlertIcon } from '@chakra-ui/react'
import * as Yup from 'yup';
import axios from 'axios'



import { useNavigate } from 'react-router-dom';



const Login = () => {
    const LoginSchema = Yup.object().shape({
        email: Yup.string().email('invalid Email').required('required').trim(),
        password: Yup.string().min(4, 'password must be more than 4 characters').required('Required').trim(),
    })


    return (
        <Stack direction={['column', 'row']} spacing={10}>
            <Box my={5} ml='25%' w='50%' border='1px' py={2} px={5} borderRadius='lg' spacing='10px'>
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    validationSchema={LoginSchema}
                    onSubmit={async (values) => {

                        // const resp = await axios.post('http://localhost:3000/signup', values)
                        // console.log(resp)
                        console.log(values)
                        if (1) {
                    c
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
                        <Field name='email' id="email">
                            {({ field }) => (
                                <FormControl isInvalid={errors.email} isRequired>
                                    <FormLabel htmlFor="email">Email</FormLabel>
                                    <Input  {...field} placeholder="Jane" />
                                    {errors.email && touched.email ? (
                                        <FormErrorMessage>{errors.email}</FormErrorMessage>
                                    ) : null}
                                </FormControl>
                            )}

                        </Field>
                        <Field name='password' id="password">
                            {({ field }) => (
                                <FormControl isInvalid={errors.password} isRequired>
                                    <FormLabel htmlFor="password" type='password'>Password</FormLabel>
                                    <Input  {...field} placeholder="Jane" />
                                    {errors.password && touched.password ? (
                                        <FormErrorMessage>{errors.password}</FormErrorMessage>
                                    ) : null}
                                </FormControl>
                            )}

                        </Field>
                        <Button colorScheme='whatsapp' type='submit'>Submit</Button>
                    </VStack>
                </Form>
            )}
        </Formik>
            </Box >
        </Stack >

    );
}

export default Login

