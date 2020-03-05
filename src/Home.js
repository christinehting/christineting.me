import React, { Component } from "react";
import {
    NavLink
} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div class="pos-center w-max-750">
                <div class="text-justify p-text p-indent">
                    <h1 class="heading">Hello! My name is Christine Ting, and I am:</h1>
                    <ol>
                        <li>An experienced full stack web developer with a burgeoning interest and growing skill set in data engineering and data science.</li>
                        <li>Driven by a thirst for knowledge about the human condition, and the desire to find creative solutions that bring about positive social impact.</li>
                        <li>Interested in working with socially-concious organizations to bring about improvements in areas such as: education, food security and civic empowerment.</li>
                    </ol>
                    <p class="heading3">The types of projects I have helped to deliver and maintain include:</p>
                    <ul class="ul-2-col">
                        <li>Enterprise-level web applications</li>
                        <li>Cloud-based microservices</li>
                        <li>Data engineering and visualization</li>
                        <li>Custom WordPress plugins</li>
                        <li>Mobile video games</li>
                        <li>Single page static websites</li>
                    </ul>
                    <p class="heading3">I also have experience in the following areas when it comes to non-technical aspects of software development:</p>
                    <ul class="ul-2-col">
                        <li>Agile team management and mentoring</li>
                        <li>Team building and cultivation</li>
                        <li>Technical leadership to executive team</li>
                        <li>Cross-functional team communication</li>
                        <li>Process development and management</li>
                        <li>Project management</li>
                        <li>Partner support and liaison</li>
                        <li>User education and outreach</li>
                    </ul>
                    <p class="heading3">You can find more details on my <NavLink to="/resume">resume</NavLink>.</p>
                    <p><span class="heading4">Outside of work,</span> I love to rest and I love to play even more. I currently live in beautiful San Diego, CA with my amazing partner, Kathryn, and our two cats. When I'm not participating in software development or community building, you'll likely find me checking out the latest foodie spots with my friends and family, doing aerial photography and videography with my DJI Mavic Pro, experimenting in the kitchen with various food projects (and subsequently devouring said food), attending live music or comedy shows, exploring nature and the world at large, studying philosophy and human nature through books, podcasts and movies, and trying my best to live a lifestyle that promotes longevity and vitality through sleep, nutrition and fitness. </p>

                    <p class="heading3">You can learn more about my interests here:</p>
                    <div class="flex-grid-thirds pos-center text-center">
                        <div class="col acc-card">Software &amp; Data Engineering</div>
                        <div class="col acc-card">Drone Photography &amp; Piloting</div>
                        <div class="col acc-card">Culinary Projects &amp; Experiments</div>
                    </div>

                    <p class="heading3">Let's connect!</p>
                    <div class="flex-grid-quarters pos-center text-center">
                        <div class="col acc-card">Email</div>
                        <div class="col acc-card">LinkedIn</div>
                        <div class="col acc-card">GitHub</div>
                        <div class="col acc-card">Instagram</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;