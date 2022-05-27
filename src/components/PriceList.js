import React from 'react'
import { Box, HStack, VStack, Image, Heading, Stack, Text, StackDivider, Icon, Button, Spacer, Select } from '@chakra-ui/react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DeleteIcon from '@mui/icons-material/Delete';
import BoltIcon from '@mui/icons-material/Bolt';





const PriceList=({orignal_cost,saving,selling_cost,addressList})=>{
    return (
        <Box w='40%' >
                    <Stack divider={<StackDivider borderColor='gray.400' />}>
                        <Box h='100px' textAlign='center' alignContent='center' pt='5'><Heading>Final Price</Heading></Box>
                        <Box h='200px'>
                            <Stack pl='10' pt='20'>
                                <HStack spacing={-1} w='100%'>
                                    <Text fontSize='lg' fontWeight='semibold' pr='2'>Price:</Text>
                                    <Box w='10'></Box>
                                    <Icon as={CurrencyRupeeIcon} viewBox="0 0 25 15" boxSize='0.75em' />
                                    <Text fontSize='lg' fontWeight='semibold'>{orignal_cost}</Text>

                                </HStack>
                                <HStack spacing={-1} w='100%'>
                                    <Text fontSize='lg' fontWeight='semibold' pr='2'>Discount:</Text>
                                    <Box w='3'></Box>
                                    <Icon as={CurrencyRupeeIcon} viewBox="0 0 25 15" boxSize='0.75em' />
                                    <Text fontSize='lg' fontWeight='semibold'>{saving}</Text>

                                </HStack>

                                <Text></Text>
                            </Stack>
                        </Box>
                        <Box h='100px' pl='10'>
                            <HStack spacing={-1} w='100%'>
                                <Text fontSize='lg' fontWeight='semibold' pr='2'>Total Amount:</Text>
                                <Box w='3'></Box>
                                <Icon as={CurrencyRupeeIcon} viewBox="0 0 25 15" boxSize='0.75em' />
                                <Text fontSize='lg' fontWeight='semibold'>{selling_cost}</Text>

                            </HStack>
                            <Text>You'll save {saving} on this order!
                            </Text>
                        </Box>
                        <Box h='100px' pl='10'>
                            <HStack>
                                <Select placeholder='Select Address' size='md' w='30%' >
                                    {addressList.map((address)=>{
                                        return(
                                            <option value={address}>{address}</option>
                                        )
                                    })}
                                    
                                </Select>
                                <Button leftIcon={<BoltIcon />} colorScheme='teal' variant='solid'>
                                    Place order
                                </Button>   
                            </HStack>

                        </Box>
                    </Stack>
                </Box>
    )
}

export default PriceList