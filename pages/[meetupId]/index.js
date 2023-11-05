import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
    return (
        <MeetupDetail
            image="https://www.germany-visa.org/wp-content/uploads/2017/07/Living-in-Muenchen-Germany.jpg"
            title="A First Meetup"
            address="Apt. 891 46108 Ivan Tunnel, South Tanisha, AK 27199"
            description="The Meetup description"
        />
    )
};

export async function getStaticPaths() {
    return {
        fallback: true,
        paths: [
            {
                params: {
                    meetupId: "m1",
                },
                params: {
                    meetupId: "m2",
                },
            }
        ]
    }
};

export async function getStaticProps(context) {

    const meetupId = context.params.meetupId;

    console.log(meetupId);

    return {
        props: {
            meetupData: {
                image: "https://www.germany-visa.org/wp-content/uploads/2017/07/Living-in-Muenchen-Germany.jpg",
                id: meetupId,
                title: "A First Meetup",
                address: "Apt. 891 46108 Ivan Tunnel, South Tanisha, AK 27199",
                description: "The Meetup description",
            }
        }
    };
};

export default MeetupDetails;