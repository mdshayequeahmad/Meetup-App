import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
    return (
        <MeetupList meetups={props.meetups} />
    )
};

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//     return {
//         props : {
//             meetups: DUMMY_MEETUPS
//         }
//     };
// };

export async function getStaticProps() {

    const client = await MongoClient.connect('mongodb+srv://test:Wd0ssQNZBMDpbY4V@cluster0.qxxfufo.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db;

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            }))
        },
        revalidate: 10
    };
};

export default HomePage;