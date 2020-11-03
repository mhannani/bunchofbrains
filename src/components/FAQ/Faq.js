import React from 'react'
import {NavLink} from "react-router-dom";
class Faq extends React.Component{
    render(){
        return(
            <div className="container faq">
                <div id="accordion" className={'mb-5'}>
                    <div className="card mb-2">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn" data-toggle="collapse" data-target="#collapseOne"
                                        aria-expanded="true" aria-controls="collapseOne">
                                    Q1- What is Bunchofbrains ?
                                </button>
                            </h5>
                        </div>

                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne"
                             data-parent="#accordion">
                            <div className="card-body">
                                Bunchofbrains is the largest online mental health community platform
                                worldwide. We change the way people get help with facing life's challenges
                                by providing convenient, discreet and easy access to people who have
                                overcome their mental health issues. Bunchofbrains connects people who
                                still struggle with their psychological wellbeing to others who had
                                experimented the same issues and found a successful way to reestablish
                                their normal lives available anytime, anywhere, through a computer,
                                tablet or smartphone.
                            </div>
                        </div>
                    </div>


                    <div className="card mb-2">
                        <div className="card-header" id="headingTwo">
                            <h5 className="mb-0">
                                <button className="btn" data-toggle="collapse" data-target="#collapseTwo"
                                        aria-expanded="true" aria-controls="collapseOne">
                                    Q2- Who will be helping me ?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                             data-parent="#accordion">
                            <div className="card-body">
                                After you sign up, you will find numerous volunteers who match your
                                experience, and the type of issues you are dealing with for an audio
                                or video chat, so you can pick their minds about their successful
                                experience.
                                We have found that we are able to provide a successful match most of
                                the time.
                            </div>
                        </div>
                    </div>


                    <div className="card mb-2">
                        <div className="card-header" id="headingThree">
                            <h5 className="mb-0">
                                <button className="btn" data-toggle="collapse" data-target="#collapseThree"
                                        aria-expanded="true" aria-controls="collapseOne">
                                    Q3- Is Bunchofbrains right for me ?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                             data-parent="#accordion">
                            <div className="card-body">
                                <div>
                                    Bunchofbrains may be right for you if you're looking to improve
                                    the quality of your life. Whenever there is anything that interferes
                                    with your happiness or prevents you from achieving your goals,
                                    we may be able to help. We also have various volunteers who had
                                    experienced a specific issues, such as stress, anxiety, relationships,
                                    parenting, depression, addictions, eating, sleeping, trauma, anger,
                                    family conflicts, LGBT matters, grief, religion, self-esteem and more.
                                </div>
                                <p>
                                    Bunchofbrains IS NOT THE RIGHT SOLUTION for you if any
                                    of the following is true:

                                </p>
                                <div className={'ml-5'}>

                                    <ul>
                                        <li>
                                            You have thoughts of hurting yourself or others
                                        </li>
                                        <li>
                                            You are a minor or you are under the care of a legal guardian
                                        </li>
                                        <li>
                                            You are in an urgent crisis or an emergency situation
                                        </li>
                                        <li>
                                            You have been diagnosed with a severe mental illness, or if you have
                                            been advised to be in psychological supervision or psychiatric care
                                        </li>
                                        <li>
                                            You were required to undergo therapy or counseling either by a court
                                            order or by any other authority
                                        </li>
                                        <li>
                                            You do not have a device that can connect to the Internet or you
                                            do not have a reliable Internet connection
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-2">
                        <div className="card-header" id="headingFour">
                            <h5 className="mb-0">
                                <button className="btn" data-toggle="collapse" data-target="#collapseFour"
                                        aria-expanded="true" aria-controls="collapseOne">
                                    Q4- Can bunchofbrains substitute for traditional face-to-face therapy ?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour"
                             data-parent="#accordion">
                            <div className="card-body">
                                The volunteers who help through Bunchofbrains are people who had experience with a
                                specific mental health issue and found a way to overcome it or cope with it. However,
                                while the service may have benefits, it's not capable of substituting for traditional
                                face-to-face therapy in every case. Please note that your provider won't be able to
                                make any official diagnosis, to fulfill any court order or prescribe medication or
                                tells you to change your medication.
                                <span className="text-danger font-weight-bold">
                                    Any advice you get from the volunteers must be discussed with
                                    your doctor before taking any action.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-2">
                        <div className="card-header" id="headingFive">
                            <h5 className="mb-0">
                                <button className="btn" data-toggle="collapse" data-target="#collapseFive"
                                        aria-expanded="true" aria-controls="collapseOne">
                                    Q5- How will I communicate with the volunteer ?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseFive" className="collapse" aria-labelledby="headingFive"
                             data-parent="#accordion">
                            <div className="card-body">
                                You can exchange in three ways:
                                <div className={'ml-5'}>
                                    <ul>
                                        <li>
                                            Exchanging messages
                                        </li>
                                        <li>
                                            Chatting live audio
                                        </li>
                                        <li>
                                            Video conferencing
                                        </li>
                                    </ul>
                                </div>
                                You can use different ways at different times as you wish, based on your needs,
                                availability, and convenience.
                            </div>
                        </div>
                    </div>


                    <div className="card mb-2">
                        <div className="card-header" id="headingSix">
                            <h5 className="mb-0">
                                <button className="btn" data-toggle="collapse" data-target="#collapseSix"
                                        aria-expanded="true" aria-controls="collapseOne">
                                    Q6- What is the role of Bunchofbrains.com ?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseSix" className="collapse" aria-labelledby="headingSix"
                             data-parent="#accordion">
                            <div className="card-body">
                                We are totally obsessed about securing your privacy and confidentiality.
                                We have built a state-of-the-art technology, operation, and infrastructure with
                                one thing in mind: protecting your privacy and safeguarding the information you provide.
                                Our privacy and confidentiality standards are by far more advanced than what is required
                                by law or regulations, so you can feel safe and comfortable.
                                <div className={'ml-5'}>
                                    <ul>
                                        <li>
                                            You don't need to identify yourself
                                        </li>
                                        <li>
                                            Everything you tell is protected by strict federal and state laws.
                                        </li>
                                        <li>
                                            We don't cooperate or work with any insurance companies or employers,
                                            so nothing needs to be shared, reported or filed with them.
                                        </li>
                                        <li>
                                            You can always click the "Shred" button next to each message that you've
                                            sent
                                            so it will no longer show in your account.
                                        </li>
                                        <li>
                                            All the messages between you and the volunteer are secured and encrypted
                                        </li>
                                        <li>
                                            Our browsing encryption system (SSL) follows modern best practices,
                                            providing
                                            world class online security and encryption.
                                        </li>
                                        <li>
                                            Our databases are encrypted and scrambled so they essentially become useless
                                            in the very unlikely event that they are being stolen or inappropriately
                                            used.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="card mb-2">
                        <div className="card-header" id="headingSeven">
                            <h5 className="mb-0">
                                <button className="btn" data-toggle="collapse" data-target="#collapseSeven"
                                        aria-expanded="true" aria-controls="collapseSeven">
                                    Q7- How is my privacy protected ?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven"
                             data-parent="#accordion">
                            <div className="card-body">
                                The service is provided by independent volunteers who exchange directly with you.
                                These providers are not employees of Bunchofbrains and the site doesn't oversee them
                                professionally. Our mission is to build, maintain, and support a platform that lets
                                users and volunteers communicate effectively, and to facilitate this channel so they
                                can get the most out of their interaction.
                                <span className="text-danger font-weight-bold">
                                    Any advice you get from the volunteers must be discussed with
                                    your doctor before taking any action.
                                </span>
                            </div>
                        </div>
                    </div>


                    <div className="card mb-2">
                        <div className="card-header" id="headingEight">
                            <h5 className="mb-0">
                                <button className="btn" data-toggle="collapse" data-target="#collapseEight"
                                        aria-expanded="true" aria-controls="collapseEight">
                                    Q8- How can I get started with Bunchofbrains ?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseEight" className="collapse" aria-labelledby="headingEight"
                             data-parent="#accordion">
                            <div className="card-body">
                                Click <NavLink to={"/"}>here</NavLink> to get started.
                            </div>
                        </div>
                    </div>

                    <div className="card mb-2">
                        <div className="card-header" id="headingNine">
                            <h5 className="mb-0">
                                <button className="btn" data-toggle="collapse" data-target="#collapseNine"
                                        aria-expanded="true" aria-controls="collapseNine">
                                    Q9- I'm a volunteer. How can I provide help using Bunchofbrains ?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseNine" className="collapse" aria-labelledby="headingNine"
                             data-parent="#accordion">
                            <div className="card-body">
                                Please start the application process by clicking <NavLink to={"/"}>here</NavLink>.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default Faq