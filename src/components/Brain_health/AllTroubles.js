import React, {useEffect} from "react";
import ButtonSlideEffect from "./ButtonsEffects/ButtonSlideEffect";

const AllTroubles = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })
    return(

        <div className={'container all_troubles'}>
            <div className={'row text-center'}>
                <ButtonSlideEffect text='Depression' to="/all-troubles/depression"/>
                <ButtonSlideEffect text='Anxiety' to="/all-troubles/anxiety"/>
                <ButtonSlideEffect text='Panic disorder' to="/all-troubles/panic-disorder"/>
                <ButtonSlideEffect text='Self esteem' to="/all-troubles/self-esteem"/>
            </div>

            <div className={'row text-center'}>
                <ButtonSlideEffect text='Addiction' to="/all-troubles/addiction"/>
                <ButtonSlideEffect text='Parenting' to="/all-troubles/parenting"/>
                <ButtonSlideEffect text='Brain health' to="/all-troubles/brain-health"/>
                <ButtonSlideEffect text='Cognitive development' to="/all-troubles/cognitive-development"/>
            </div>

            <div className={'row text-center'}>
                <ButtonSlideEffect text='Emotional abuse' to="/all-troubles/emotional-abuse"/>
                <ButtonSlideEffect text='Goal setting' to="/all-troubles/goal-setting"/>
                <ButtonSlideEffect text='Loneliness' to="/all-troubles/Loneliness"/>
                <ButtonSlideEffect text='Marital issues' to="/all-troubles/marital-issues"/>
            </div>

            <div className={'row text-center'}>
                <ButtonSlideEffect to={'/all-troubles/ocd'} text={'OCD'} tooltip={true}
                                   dataTip={"Obsessive Compulsive Disorder"}/>
                <ButtonSlideEffect to={'/all-troubles/phobias'} text={'Phobias'}/>
                <ButtonSlideEffect to={'/all-troubles/ptsd'} text={'PTSD'} tooltip={true}
                                   dataTip={"Post Traumatic Stress Disorder"}/>
                <ButtonSlideEffect text='Motivation' to="/all-troubles/motivation"/>
            </div>

            <div className={'row text-center'}>
                <ButtonSlideEffect text='Schizophrenia' to="/all-troubles/schizophrenia"/>
                <ButtonSlideEffect text='Sexuality' to="/all-troubles/sexuality"/>
                <ButtonSlideEffect text='Bullying' to="/all-troubles/bullying"/>
                <ButtonSlideEffect to={'/all-troubles/relationship-issues'} text={'Relationship issues'}/>
            </div>

            <div className={'row text-center'}>

                <ButtonSlideEffect text='Spirituality' to="/all-troubles/spirituality"/>
            </div>
        </div>
    )
}


export default AllTroubles;