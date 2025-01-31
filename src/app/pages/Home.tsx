import React from "react";
import {Container, Typography, Button, Card, CardContent} from "@mui/material";
import {useTheme} from "@mui/material/styles";

export default function Home() {
    const theme = useTheme();

    return (
        <Container maxWidth="md" sx={{textAlign: "left", mt: 5, bgcolor: theme.palette.background.default}}>
            <Card sx={{p: 4, boxShadow: 4, bgcolor: theme.palette.background.paper}}>
                <CardContent>
                    <Typography variant="h3" gutterBottom color={theme.palette.primary.dark}>
                        Understanding Liver Necrosis
                    </Typography>

                    <Typography variant="h5" gutterBottom color={theme.palette.secondary.dark}>
                        What is Liver Necrosis?
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Liver necrosis occurs when liver cells die due to prolonged damage from toxins, infections, or
                        chronic conditions such as hepatitis or excessive alcohol consumption. The liver is essential
                        for detoxification, metabolism, and overall bodily function, making its health critical.
                    </Typography>

                    <Typography variant="h5" gutterBottom color={theme.palette.secondary.dark}>
                        The Four Stages of Liver Necrosis
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Liver necrosis progresses through four stages:
                    </Typography>
                    {['Initial inflammation and mild scarring, often with few symptoms.',
                        'Worsening damage, with increasing liver stiffness and decreased function.',
                        'Advanced fibrosis leading to significant liver dysfunction.',
                        'Cirrhosis and potential liver failure, requiring immediate medical attention.']
                        .map((text, index) => (
                            <Typography key={index} variant="body1" paragraph>
                                <strong>Stage {index + 1}:</strong> {text}
                            </Typography>
                        ))}

                    <Typography variant="h5" gutterBottom color={theme.palette.secondary.dark}>
                        Why is Early Detection Important?
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Many symptoms of liver necrosis, such as fatigue, nausea, and jaundice, appear late in the
                        disease. By the time noticeable symptoms arise, significant damage may have already occurred.
                        Regular screenings help detect issues early, allowing for better treatment options and improved
                        health outcomes.
                    </Typography>

                    <Typography variant="h5" gutterBottom color={theme.palette.secondary.dark}>
                        Frequently Asked Questions
                    </Typography>
                    {[{
                        q: 'What type of necrosis happens in the liver?',
                        a: 'Centrilobular necrosis occurs within the centrilobular tissue of the hepatic lobule around the central vein. Focal necrosis happens in clustered or scattered hepatocytes. Piecemeal necrosis, or interface hepatitis, involves inflammation between the portal tract and the periportal zone. Coagulative necrosis results from ischemia or infarction due to lack of blood supply.'
                    },
                        {
                            q: 'What causes centrilobular necrosis?',
                            a: 'This type of necrosis is primarily caused by liver toxins such as certain drugs and alcohol.'
                        },
                        {
                            q: 'What causes hepatic necrosis?',
                            a: 'Hepatic necrosis can result from acetaminophen overdose, prescription medications, herbal supplements, hepatitis viruses, toxins, autoimmune diseases, cancer, or damage to other organs.'
                        },
                        {
                            q: 'Can liver necrosis be reversed?',
                            a: 'The liver has a unique ability to regenerate itself. In many cases, if caught early and properly treated, liver necrosis can be reversed.'
                        },
                        {
                            q: 'Is liver necrosis serious?',
                            a: 'Liver necrosis is serious if left untreated. However, early intervention can lead to recovery in some cases where cell regeneration is possible.'
                        }].map((item, index) => (
                        <div key={index}>
                            <Typography variant="subtitle1" gutterBottom color={theme.palette.primary.dark}>
                                {item.q}
                            </Typography>
                            <Typography variant="body2" paragraph>
                                {item.a}
                            </Typography>
                        </div>
                    ))}

                    <Button
                        variant="contained"
                        color="primary"
                        href="/check-stage"
                        sx={{mt: 3, py: 2, px: 4, fontSize: "1.2rem", width: "100%"}}
                    >
                        Check Your Stage
                    </Button>
                </CardContent>
            </Card>
        </Container>
    );
}
