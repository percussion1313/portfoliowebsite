import { Router } from 'express'
import { sendEmail } from '../utils/mail'

let router = Router(); 

router.post('/', (req,res, next) => {
    let messageBody = `Name: ${req.body.name}
                        Email: ${req.body.email}
                        Message: ${req.body.message}`;
                    
    sendEmail('peterjacobgrant@gmail.com','no-reply@me.com','New Contact Frorm Submission', messageBody)
    .then((response) =>{
        console.log('shit')
        res.sendStatus(201);
    }).catch((err) => {
        console.log('shit')
        next(err);
    })
})

export default router