import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// Importer la bibliothèque react-hook-form
import { useForm } from "react-hook-form"
//importer api/contact.js


import "./formlibrary.css";
// Définir le composant FormLibrary
export default function FormLibrary() {

    // Récupérer les fonctions register, handleSubmit et errors de useForm
    const { register, handleSubmit, formState: { errors } } = useForm()

    // Définir la fonction onSubmit qui sera appelée lorsque l'utilisateur soumettra le formulaire
    const onSubmit = async (data, event) => {
        let reponse = await fetch('./api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        // Vérifier si la réponse de l'API est ok et afficher un message de succès dans la console
        if (reponse.ok) {
            emailjs.sendForm('service_hvr9rbv', 'template_oito4k6',event.target , 'o4-SVD0_QKLwddTsZ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        }
    }
    

    // Retourner un formulaire qui utilise la fonction handleSubmit pour appeler la fonction onSubmit lorsque l'utilisateur soumettra le formulaire
    return <form className='form' noValidate onSubmit={handleSubmit(onSubmit)}>
        <h2>Ajoutez un commentaire</h2>
         {/* Champ de formulaire pour le nom  de type string et entre 3 et 20 caracteres*/}
        <label>
            Your name* :
            <input
                type="name"
                {...register('name', {
                    required: 'The name is required',
                    minLength: {
                        value: 3,
                        message: 'add more than 3 caracteres'
                    },
                    maxLength: {

                        value: 20,
                        message: 'add less that 20 caracteres'
                    }
                })} />
        </label>
        {/* Afficher un message d'erreur si le champ est invalide */}
        {errors.name &&
            <div className='erreur'>
                {errors.name.message}
            </div>
        }
{/* Champ de formulaire pour le couriel de type string et avec une regex pour verifier le format*/}
        <label>
            E-mail* :
            <input
                type="email"
                {...register('email', {
                    required: 'The E-mail is required',
                    pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                        message: 'Add your E-mail de type aaaa@aaa.aaa'
                    }
                })} />
        </label>
       {/* Afficher un message d'erreur si le champ est invalide */}
        {errors.email &&
            <div className='erreur'>
                {errors.email.message}
            </div>
        }
        {/* Champ de formulaire pour le sujet de message de type string et entre 2 et 40 caracteres*/}
        <label>
            Subject* :
            <input
                type="subject"
                {...register('subject', {
                    required: 'The subject is required',
                    minLength: {
                        value: 2,
                        message: 'add more that 2 caracteres'
                    },
                    maxLength: {

                        value: 40,
                        message: 'add less that 40 caracteres'
                    }

                })} />
        </label>
        {/* Afficher un message d'erreur si le champ est invalide */}
        {errors.subject &&
            <div className='erreur'>
                {errors.subject.message}
            </div>
        }
{/* Champ de formulaire pour le message de type string et entre 10 et 300 caracteres*/}
        <label>
            Your message* :
            <input
                type="yourmesssage"
                className="yourmessage"
                {...register('yourmessage', {
                    required: 'The message is required',
                    minLength: {
                        value: 10,
                        message: 'add more that 10 caracteres'
                    },
                    maxLength: {

                        value: 300,
                        message: 'add less that 300 caracteres'
                    }

                })} />
        </label>
        {/* Afficher un message d'erreur si le champ est invalide */}
        {errors.yourmessage &&
            <div className='erreur'>
                {errors.yourmessage.message}
            </div>
        }

        <input type="submit" value="Send" />
        
    </form>
}