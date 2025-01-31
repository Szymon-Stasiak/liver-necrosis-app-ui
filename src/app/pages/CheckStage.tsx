import * as React from 'react';
import {Box, Typography, Button, TextField, Container, Card, CardContent, Switch} from '@mui/material';
import {useTheme} from "@mui/material/styles";
import {useState} from "react";

export default function CheckStage() {
    const theme = useTheme();

    const [inputFields, setInputFields] = useState<string[]>(['', '', '', '']);
    const [isDetailed, setIsDetailed] = useState<boolean>(false);

    const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsDetailed(event.target.checked);

        if (event.target.checked) {
            setInputFields(['', '', '', '', '', '', '', '']); // 8 fields for Detailed
        } else {
            setInputFields(['', '', '', '']); // 4 fields for Basic
        }
    };

    const handleCheckClick = () => {
        console.log('Checking with data:', inputFields);
    };

    return (
        <Container maxWidth="md" sx={{textAlign: "left", mt: 5, bgcolor: theme.palette.background.default}}>
            <Card sx={{p: 4, boxShadow: 4, bgcolor: theme.palette.background.paper}}>
                <CardContent>
                    <Typography variant="h4" component="h2" sx={{marginBottom: 3}}>
                        What are your lab results?
                    </Typography>

                    <Box sx={{display: 'flex', justifyContent: 'center', marginBottom: 4}}>
                        <Typography variant="h6">Basic</Typography>
                        <Switch
                            checked={isDetailed} // If true, it's Detailed, else Basic
                            onChange={handleSwitchChange}
                            sx={{
                                '& .MuiSwitch-thumb': {
                                    backgroundColor: 'blue',
                                },
                                '& .MuiSwitch-track': {
                                    backgroundColor: 'lightblue',
                                },
                                '& .Mui-checked': {
                                    '& .MuiSwitch-thumb': {
                                        backgroundColor: 'green',
                                    },
                                    '& + .MuiSwitch-track': {},
                                },
                            }}
                        />
                        <Typography variant="h6">Detailed</Typography>
                    </Box>

                    <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
                        {inputFields.map((field, index) => (
                            <TextField
                                key={index}
                                label={`Field ${index + 1}`}
                                variant="outlined"
                                value={field}
                                onChange={(e) => {
                                    const newFields = [...inputFields];
                                    newFields[index] = e.target.value;
                                    setInputFields(newFields);
                                }}
                                fullWidth
                            />
                        ))}
                    </Box>

                    <Box sx={{marginTop: 4, display: 'flex', justifyContent: 'center'}}>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{padding: '12px 24px'}}
                            onClick={handleCheckClick}
                        >
                            Check your stage
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
}
