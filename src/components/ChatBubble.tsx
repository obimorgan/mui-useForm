import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import ListItem from 'material-ui/List/ListItem';
import React, { useState } from 'react';
import { IConversation, IConversationList } from '../interface';

export const ChatBubble = () => {

    const [conversations, setConversatations] = useState<IConversationList[]>([
    ])

    // {
    //     conversations?.map((conversation: any, index: any) => {
    //         <ListItem key={index}>
    //             <ListItemText primary={`${conversation.user}, ${conversation.message}`}></ListItemText>
    //         </ListItem>
    //     })
    // }
    return (
        <>
            <Container>
                <Paper elevation={5}>
                    <Box p={3} mt={2}>
                        <Typography variant='h5' gutterBottom>
                            Good chat!
                        </Typography>
                        <Grid item></Grid>
                    </Box>
                </Paper>
            </Container>
        </>
    )
}
