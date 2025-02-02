import React from "react";
import { Container, Typography, Card, CardContent, LinearProgress, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useApiResponse } from "../ContexProvider";

interface ApiResponse {
    Accuracy?: number;
    Description?: string;
    Stage?: number;
    StageName?: string;
}

const Result: React.FC = () => {
    const theme = useTheme();
    const { apiResponse } = useApiResponse() as { apiResponse?: ApiResponse };

    return (
        <Container maxWidth="md" sx={{ textAlign: "left", mt: 5, bgcolor: theme.palette.background.default }}>
            <Card sx={{ p: 4, boxShadow: 4, bgcolor: theme.palette.background.paper }}>
                <CardContent>
                    <Typography variant="h3" gutterBottom color={theme.palette.primary.dark}>
                        {apiResponse?.StageName || "Liver Disease Stage"}
                    </Typography>

                    <Box sx={{ mt: 3 }}>
                        <Typography variant="h5" gutterBottom color={theme.palette.secondary.dark}>
                            Description
                        </Typography>
                        <Typography variant="body1" >
                            {apiResponse?.Description || "No description available."}
                        </Typography>
                    </Box>

                    <Box sx={{ mt: 3 }}>
                        <Typography variant="h5" gutterBottom color={theme.palette.secondary.dark}>
                            Accuracy
                        </Typography>
                        <Typography variant="body1" >
                            {apiResponse?.Accuracy ? `${apiResponse.Accuracy}%` : "N/A"}
                        </Typography>
                        {apiResponse?.Accuracy !== undefined && (
                            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                <LinearProgress
                                    variant="determinate"
                                    value={apiResponse.Accuracy}
                                    sx={{ width: '100%', height: 10, borderRadius: 5 }}
                                />
                            </Box>
                        )}
                    </Box>

                    <Box sx={{ mt: 3 }}>
                        <Typography variant="h5" gutterBottom color={theme.palette.secondary.dark}>
                            Stage
                        </Typography>
                        <Typography variant="body1" >
                            {apiResponse?.Stage ? `Stage ${apiResponse.Stage}` : "Unknown Stage"}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Result;