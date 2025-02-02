import * as React from 'react';
import {
    Box,
    Typography,
    Button,
    TextField,
    Container,
    Card,
    CardContent,
    Switch,
    MenuItem,
    Tooltip
} from '@mui/material';
import {useTheme} from "@mui/material/styles";
import {useState} from "react";
import {sendBasicRequest, sendDetailedRequest} from "../components/RequestSenders/RequestSenders";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../utils/ROUTES";
import {useApiResponse} from "../ContexProvider";

interface Field {
    label: string;
    type: "number" | "select";
    options?: number[];
}

export default function CheckStage() {
    const theme = useTheme();
    const [isDetailed, setIsDetailed] = useState<boolean>(false);
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    const { setApiResponse } = useApiResponse();



    const basicFields: Field[] = [
        {label: "Age [days]", type: "number"},
        {label: "Edema", type: "select", options: [0, 1, 2]},
        {label: "Bilirubin [mg/dl]", type: "number"},
        {label: "Albumin [gm/dl]", type: "number"},
        {label: "Platelets [ml/1000]", type: "number"},
        {label: "Prothrombin [s]", type: "number"}
    ];

    const detailedFields: Field[] = [
        {label: "Age [days]", type: "number"},
        {label: "Ascites", type: "select", options: [0, 1]},
        {label: "Hepatomegaly", type: "select", options: [0, 1, 2]},
        {label: "Spiders", type: "select", options: [0, 1]},
        {label: "Edema", type: "select", options: [0, 1, 2]},
        {label: "Bilirubin [mg/dl]", type: "number"},
        {label: "Cholesterol [mg/dl]", type: "number"},
        {label: "Albumin [gm/dl]", type: "number"},
        {label: "Copper [ug/day]", type: "number"},
        {label: "Platelets [ml/1000]", type: "number"},
        {label: "Prothrombin [s]", type: "number"}
    ];

    const fields: Field[] = isDetailed ? detailedFields : basicFields;
    const [inputValues, setInputValues] = useState<Record<string, string | number>>(
        () => Object.assign({}, ...fields.map((f: Field) => ({[f.label]: ""})))
    );
    const [errors, setErrors] = useState<Record<string, boolean>>(
        () => Object.assign({}, ...fields.map((f: Field) => ({[f.label]: false})))
    );

    const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsDetailed(event.target.checked);
        setInputValues(Object.assign({}, ...((event.target.checked ? detailedFields : basicFields).map((f: Field) => ({[f.label]: ""})))));
        setErrors(Object.assign({}, ...((event.target.checked ? detailedFields : basicFields).map((f: Field) => ({[f.label]: false})))));
    };

    const handleInputChange = (label: string, value: string | number) => {
        setInputValues(prev => ({...prev, [label]: value === "" ? "" : value}));
        setErrors(prev => ({...prev, [label]: value === ""}));

    };

    // @ts-ignore
    const isFormValid = Object.values(inputValues).every(value => value !== "");

    const handleCheckClick = () => {
        console.log('Checking with data:', inputValues);

        if(isDetailed) {
            sendDetailedRequest(inputValues).then((response) => {
                setApiResponse(response);
                navigate(ROUTES.RESULT);
            });
        }else {
            sendBasicRequest(inputValues).then((response) => {
                setApiResponse(response);
                navigate(ROUTES.RESULT);
            });
        }

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
                            checked={isDetailed}
                            onChange={handleSwitchChange}
                            sx={{
                                '& .MuiSwitch-thumb': {
                                    backgroundColor: 'secondary.main',
                                },
                                '& .MuiSwitch-track': {
                                    backgroundColor: 'lightblue',
                                },
                                '& .Mui-checked': {
                                    '& .MuiSwitch-thumb': {
                                        backgroundColor: 'primary.main',
                                    },
                                    '& + .MuiSwitch-track': {},
                                },
                            }}
                        />
                        <Typography variant="h6">Detailed</Typography>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
                        {fields.map((field, index) => (
                            field.type === "select" ? (
                                <TextField
                                    key={index}
                                    select
                                    label={field.label}
                                    value={inputValues[field.label]}
                                    onChange={(e) => handleInputChange(field.label, Number(e.target.value))}
                                    fullWidth
                                    error={errors[field.label]}
                                    helperText={errors[field.label] ? "This field is required" : ""}
                                >
                                    {field.options?.map(option => (
                                        <MenuItem key={option} value={option}>{option}</MenuItem>
                                    ))}
                                </TextField>
                            ) : (
                                <TextField
                                    key={index}
                                    label={field.label}
                                    type="number"
                                    variant="outlined"
                                    value={inputValues[field.label]}
                                    onChange={(e) => handleInputChange(field.label, e.target.value === "" ? "" : Number(e.target.value))}
                                    fullWidth
                                    error={errors[field.label]}
                                    helperText={errors[field.label] ? "This field is required" : ""}
                                />
                            )
                        ))}
                    </Box>

                    <Box onMouseEnter={() => {setIsHovered(true);}} onMouseLeave={() => {setIsHovered(false);}} sx={{marginTop: 4, display: 'flex', justifyContent: 'center'}}>
                        <Tooltip
                            title="All fields are required"
                            open={!isFormValid && isHovered}
                            arrow
                        >
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{mt: 3, py: 2, px: 4, fontSize: "1.2rem", width: "100%"}}
                                onClick={handleCheckClick}

                                disabled={!isFormValid}
                            >
                                Check your stage
                            </Button>
                        </Tooltip>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
}
