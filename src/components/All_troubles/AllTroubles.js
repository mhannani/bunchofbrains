import React from "react";
import ButtonSlideEffect from "./ButtonsEffects/ButtonSlideEffect";
import ButtonCircleEffect from "./ButtonsEffects/ButtonCircleEffect"
import ButtonUnderlineEffect from "./ButtonsEffects/ButtonUnderlineEffect";
import ButtonTranslateEffect from "./ButtonsEffects/ButtonTranslateEffect";
import ButtonSpinEffect from "./ButtonsEffects/ButtonSpinEffect";
import ButtonTranslateReversedEffect from "./ButtonsEffects/ButtonTranslateReversedEffect"

const AllTroubles = ()=>{

    return(

        <div className={'container all_troubles'}>
            <div className={'row text-center'}>
                <ButtonSlideEffect text='Depression' to="/all-troubles/depression"/>
                <ButtonSlideEffect text='Anxiety' to="/all-troubles/anxiety"/>
                <ButtonSlideEffect text='Panic disorder' to="/all-troubles/panic-disorder"/>
                <ButtonSlideEffect text='Self esteem' to="/all-troubles/self-esteem"/>
            </div>

            <div className={'row text-center'}>
                <ButtonCircleEffect text='Addiction' to="/all-troubles/addiction"/>
                <ButtonCircleEffect text='Parenting' to="/all-troubles/parenting"/>
                <ButtonCircleEffect text='Brain health' to="/all-troubles/brain-health"/>
                <ButtonCircleEffect text='Cognitive development' to="/all-troubles/cognitive-development"/>
            </div>

            <div className={'row text-center'}>
                <ButtonUnderlineEffect text='Emotional abuse' to="/all-troubles/emotional-abuse"/>
                <ButtonUnderlineEffect text='Goal setting' to="/all-troubles/goal-setting"/>
            </div>

            <div className={'row text-center'}>
                <ButtonTranslateEffect text='Lowliness' to="/all-troubles/lowliness"/>
                <ButtonTranslateEffect text='Marital issues' to="/all-troubles/marital-issues"/>
                <ButtonTranslateEffect text='Motivation' to="/all-troubles/motivation"/>
            </div>

            <div className={'row text-center'}>
                <ButtonSpinEffect to={'/all-troubles/ocd'} text={'OCD'} tooltip={true}
                                  dataTip={"Obsessive Compulsive Disorder"}/>
                <ButtonSpinEffect to={'/all-troubles/phobias'} text={'Phobias'}/>
                <ButtonSpinEffect to={'/all-troubles/ptsd'} text={'PTSD'} tooltip={true}
                                  dataTip={"Post Traumatic Stress Disorder"}/>
                <ButtonSpinEffect to={'/all-troubles/relationship-issues'} text={'Relationship issues'}/>
            </div>

            <div className={'row text-center'}>
                <ButtonTranslateReversedEffect text='Schizophrenia' to="/all-troubles/schizophrenia"/>
                <ButtonTranslateReversedEffect text='Sexuality' to="/all-troubles/sexuality"/>
                <ButtonTranslateReversedEffect text='Bullying' to="/all-troubles/bullying"/>
                <ButtonTranslateReversedEffect text='Spirituality' to="/all-troubles/spirituality"/>
            </div>
        </div>
    )
}


export default AllTroubles;