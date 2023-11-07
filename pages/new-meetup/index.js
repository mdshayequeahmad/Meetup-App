import { Fragment } from "react";
import Head from 'next/head';
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from 'next/router';

const NewMeetupPage = () => {
    const router = useRouter();

    const addMeetupHandler = async (enteredMeetupData) => {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        console.log(data);

        router.push('/');
    };

    return (
        <Fragment>
            <Head>
                <title>Add A New Meetup</title>
                <meta name="description" content='Add your own meetup' />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </Fragment>
    )
};

export default NewMeetupPage;