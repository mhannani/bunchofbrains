import React, {useEffect} from 'react'
import $ from 'jquery';
import Section1 from "./FAQsSections/Section1";
import Section2 from "./FAQsSections/Section2";
import Section3 from "./FAQsSections/Section3";
import Section4 from "./FAQsSections/Section4";
import Section5 from "./FAQsSections/Section5";
import Section6 from "./FAQsSections/Section6";
import Section7 from "./FAQsSections/Section7";
import Section8 from "./FAQsSections/Section8";
import Section9 from "./FAQsSections/Section9";


const Faq = (props) => {
    useEffect(() => {
        document.title = props.title || "";

        $(document).ready(function () {
            // Add minus icon for collapse element which is open by default
            $(".collapse.show").each(function () {
                $(this).prev(".card-header").addClass("highlight");
            });

            // Highlight open collapsed element
            $(".card-header .btn").click(function () {
                $(".card-header").not($(this).parents()).removeClass("highlight");
                $(this).parents(".card-header").toggleClass("highlight");
            });
        });
    })

    return (

        <div className="container faq">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-title">FAQs</h1>
                    <div className="accordion" id="accordionExample">
                        <Section1/>
                        <Section2/>
                        <Section3/>
                        <Section4/>
                        <Section5/>
                        <Section6/>
                        <Section7/>
                        <Section8/>
                        <Section9/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Faq