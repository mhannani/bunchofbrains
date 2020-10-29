import React from 'react';
import Div from '../chunks/Div';
class About extends React.Component {
    render() {
        return (
            <Div className="container-fluid about">
                <h2 className={'text-center'}>About</h2>
                <div className={'text-center mt-5'}>
                    <p>Bunchofbrains.com is web app chat service that links people who
                        have triumphed over mental illnesses such as depression,
                        anxiety or PTSD. Or found better ways to cope with it.
                    </p>
                    <p>
                        So anyone who struggles with life’s challenges can get tips
                        and advices, anytime, anywhere from people who had experienced
                        the same challenges and overcome it.
                    </p>
                    <p>
                        Our web app namelessly and safely associates genuine individuals
                        with a successful experience to audience members in one-on-one talk.
                    </p>
                    <p>
                        Any individual who needs to pick a mind about his mental illness
                        successful experience can rapidly contact a specific audience
                        through our organization. We have several audience members who
                        originate from varying backgrounds and have differing encounters.
                    </p></div>
                <h2 className={'text-center mt-5'}>How does it work?</h2>
                <div className={'text-center my-5'}>
                    <p>
                        The process is straight forward, you choose a user to have a conversation
                        with over audio or video in complete anonymity.
                    </p>
                    <p>
                        Our users are people who has defeated their mental illnesses and are
                        willing to share their experience.
                    </p>
                    <p>
                        Join our community today! You will be amazed that you’re not alone
                        and there is better ways to live life to the fullest.
                    </p>
                </div>
            </Div>
        )
    }
}

export default About