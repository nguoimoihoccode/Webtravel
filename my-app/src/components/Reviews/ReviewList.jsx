import Reviews from "./Reviews";
import React from "react";


const reviewsList = [
    {
        imgUrl: 'https://i.pinimg.com/564x/3b/89/62/3b896220eb736a5fcc37d13b571d1e2f.jpg',
        username: 'Meo meo',

        description:
            'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
    },
    {
        imgUrl: 'https://i.pinimg.com/564x/64/72/47/64724726c3c56ce83aae58464fcce29b.jpg',
        username: 'Gau gau',

        description:
            'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
    },
    {
        imgUrl: 'https://i.pinimg.com/564x/88/ac/40/88ac40c62d39e15d99cbf585f0d5b1f7.jpg',
        username: 'Big Mouse',

        description:
            'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
    },
    {
        imgUrl: 'https://i.pinimg.com/736x/d8/49/9a/d8499a907f9130134548061d9de6098c.jpg',
        username: 'Penguin',

        description:
            'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
    },
]

const ReviewList = () => {
    return (
        <Reviews reviewsList={reviewsList} />
    )

}

export default ReviewList;