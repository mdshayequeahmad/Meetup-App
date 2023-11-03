import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: "m1",
        title: "First Meetup",
        image: "https://study-eu.s3.amazonaws.com/uploads/image/path/46/wide_fullhd_webp_15317597976_b86a01bd5e_o.webp",
        address: "Apt. 304 94019 Keebler Mission, South Lavonnaton, DE 07940-8629",
        description: "This is a first meetup",
    },
    {
        id: "m2",
        title: "Second Meetup",
        image: "https://www.germany-visa.org/wp-content/uploads/2017/07/Living-in-Muenchen-Germany.jpg",
        address: "Apt. 891 46108 Ivan Tunnel, South Tanisha, AK 27199",
        description: "This is a second meetup",
    },
];

const HomePage = () => {
    return (
        <MeetupList meetups={DUMMY_MEETUPS} />
    )
};

export default HomePage;