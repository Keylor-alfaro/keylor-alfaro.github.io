
/* =========================================================
   EXPERIENCE DATA
========================================================= */

const experiences = {

    concentrix: {

        company: "CONCENTRIX COSTA RICA",

        role: "IT Support Specialist / Avalon Advisor I",

        date: "04/2025 – 12/2025",

        description:
            "My work typically started with understanding the user's issue and determining its impact and urgency. I then investigated the symptoms, performed the appropriate troubleshooting steps, and either restored the service or escalated the case with the relevant technical information. Throughout the process, I maintained accurate documentation and followed up until the issue reached the appropriate resolution.",

        scope: [
            "IT Support",
            "Incident Management"
            "Troubleshooting"
            "test"
        ],

        environment: [
            "Microsoft 365",
            "ServiceNow",
            "Business Applications",
            "Networking"
        ],

        metrics: [
            {
                value: "95%",
                label: "SLA / KPI"
            },
            {
                value: "90%+",
                label: "Customer Satisfaction"
            }
        ],

        focus: "Enterprise IT Support",

        responsibilities: [

            {
                title: "Incident Management",

                description:
                    "Investigated technical issues, analyzed symptoms, identified root causes, and applied structured troubleshooting to restore services."
            },

            {
                title: "Service Restoration",

                description:
                    "Prioritized incidents and applied corrective actions while working within established service levels."
            },

            {
                title: "Case Management",

                description:
                    "Documented incidents, troubleshooting steps, resolutions, and escalations through ServiceNow."
            },

            {
                title: "Collaboration",

                description:
                    "Coordinated with specialized teams to support timely resolution of technical issues and maintain effective case follow-up."
            }

        ]

    },


    global: {

        company: "GLOBAL PACKING GROUP",

        role: "Technical Support Specialist",

        date: "06/2021 – 08/2024",

        description:
            "Provided on-site and remote IT support across hardware, software, Microsoft 365, Active Directory, Windows Server, printers, networks, and business applications, assisting end users and maintaining operational continuity.",

        scope: [
            "Technical Support",
            "Systems Administration",
            "Infrastructure"
        ],

        environment: [
            "Microsoft 365",
            "Active Directory",
            "Windows Server",
            "Networking",
            "Hardware",
            "Softland ERP",
            "Backup & Recovery"
        ],

        metrics: [
            {
                value: "On-site",
                label: "IT Support"
            },

            {
                value: "Remote",
                label: "IT Support"
            }
        ],

        focus: "Systems & Infrastructure",

        responsibilities: [

            {
                title: "Technical Troubleshooting",

                description:
                    "Diagnosed and resolved hardware, software, network, ERP, and system issues by analyzing symptoms and applying structured technical solutions."
            },

            {
                title: "Systems & Infrastructure",

                description:
                    "Configured workstations and equipment, performed maintenance, and provided technical support for business applications and IT infrastructure."
            },

            {
                title: "Backup & Asset Management",

                description:
                    "Performed backup and recovery procedures, managed IT asset inventory, and supported equipment and technology deployments."
            },

            {
                title: "User Support",

                description:
                    "Assisted users with Microsoft 365, Active Directory, Windows Server, printers, networks, and business systems."
            }

        ]

    },


    sonda: {

        company: "SONDA COSTA RICA",

        role: "Helpdesk Agent / Incident Manager",

        date: "02/2021 – 06/2021",

        description:
            "Managed 1st and 2nd-level IT incidents and service requests, performing initial triage, prioritization, troubleshooting, documentation, escalation, and timely resolution within defined SLAs.",

        scope: [
            "Helpdesk",
            "Incident Management",
            "Service Desk"
        ],

        environment: [
            "Incident Triage",
            "Troubleshooting",
            "Ticket Management",
            "Escalation",
            "SLA Management"
        ],

        metrics: [
            {
                value: "95%",
                label: "Customer Satisfaction"
            },

            {
                value: "1st / 2nd",
                label: "Level Support"
            }
        ],

        focus: "Service Desk & Incident Management",

        responsibilities: [

            {
                title: "Incident Triage",

                description:
                    "Performed initial incident triage, prioritized support requests, and applied troubleshooting procedures to restore services within established SLAs."
            },

            {
                title: "Issue Documentation",

                description:
                    "Investigated and documented technical issues while maintaining accurate ticket records and support information."
            },

            {
                title: "Escalation",

                description:
                    "Coordinated escalations with corporate IT teams to support effective problem resolution."
            },

            {
                title: "Customer Support",

                description:
                    "Achieved 95% customer satisfaction through effective problem solving, clear communication, timely decision-making, and consistent follow-up."
            }

        ]

    }

};



/* =========================================================
   EXPERIENCE ELEMENTS
========================================================= */

const experienceButtons =
    document.querySelectorAll(".experience-nav-item");

const experiencePanel =
    document.querySelector(".experience-showcase");

const companyElement =
    document.querySelector(".experience-company");

const roleElement =
    document.querySelector(".showcase-company h3");

const dateElement =
    document.querySelector(".showcase-date");

const descriptionElement =
    document.querySelector(".showcase-description");

const scopeElement =
    document.querySelector(".experience-scope");

const environmentElement =
    document.querySelector(".environment-tags");

const metricsElement =
    document.querySelector(".showcase-metrics");

const responsibilitiesElement =
    document.querySelector(".responsibility-grid");

const focusElement =
    document.querySelector(".role-focus");



/* =========================================================
   LOAD EXPERIENCE
========================================================= */

function loadExperience(experienceKey) {

    const experience = experiences[experienceKey];

    if (!experience) {
        return;
    }


    /*
       Start transition
    */

    experiencePanel.classList.add("is-changing");


    setTimeout(() => {


        /*
           Basic information
        */

        companyElement.textContent =
            experience.company;

        roleElement.textContent =
            experience.role;

        dateElement.textContent =
            experience.date;

        descriptionElement.textContent =
            experience.description;



        /*
           Focus areas
        */

        scopeElement.innerHTML =
            experience.scope
                .map(item => `<span>${item}</span>`)
                .join("");



        /*
           Technical environment
        */

        environmentElement.innerHTML =
            experience.environment
                .map(item => `<span>${item}</span>`)
                .join("");



        /*
           Performance metrics
        */

        metricsElement.innerHTML =
            experience.metrics
                .map(metric => `
                    <div class="showcase-metric">

                        <strong>
                            ${metric.value}
                        </strong>

                        <span>
                            ${metric.label}
                        </span>

                    </div>
                `)
                .join("");



        /*
           Responsibilities
        */

        responsibilitiesElement.innerHTML =
            experience.responsibilities
                .map((item, index) => `
                    <div class="responsibility-card">

                        <span class="responsibility-number">
                            ${String(index + 1).padStart(2, "0")}
                        </span>

                        <h5>
                            ${item.title}
                        </h5>

                        <p>
                            ${item.description}
                        </p>

                    </div>
                `)
                .join("");



        /*
           Role focus
        */

        focusElement.innerHTML = `
            <span>
                ${experience.focus}
            </span>
        `;



        /*
           Finish transition
        */

        experiencePanel.classList.remove("is-changing");

    }, 180);



    /*
       Update active timeline item
    */

    experienceButtons.forEach(button => {

        const isActive =
            button.dataset.experience === experienceKey;

        button.classList.toggle(
            "active",
            isActive
        );

        button.setAttribute(
            "aria-selected",
            isActive
        );

    });

}



/* =========================================================
   EXPERIENCE EVENTS
========================================================= */

experienceButtons.forEach(button => {

    button.addEventListener("click", () => {

        const experienceKey =
            button.dataset.experience;

        loadExperience(experienceKey);

    });

});



/*
   Initial experience
*/

loadExperience("concentrix");



/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const mobileMenuButton =
    document.querySelector(".mobile-menu-button");

const navLinks =
    document.querySelector(".nav-links");


if (mobileMenuButton && navLinks) {

    mobileMenuButton.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle("open");

            const isOpen =
                navLinks.classList.contains("open");

            mobileMenuButton.setAttribute(
                "aria-expanded",
                isOpen
            );

        }
    );


    /*
       Close menu after clicking a link
    */

    navLinks
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    navLinks.classList.remove("open");

                    mobileMenuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });

}



/* =========================================================
   CLOSE MOBILE MENU WHEN RESIZING
========================================================= */

window.addEventListener("resize", () => {

    if (window.innerWidth > 768) {

        navLinks.classList.remove("open");

        mobileMenuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});



/* =========================================================
   TECHNICAL SKILLS INTERACTION
========================================================= */

const skillCategories =
    document.querySelectorAll(".skill-category");


skillCategories.forEach(category => {

    const trigger =
        category.querySelector(".skill-card-trigger");


    if (!trigger) {
        return;
    }


    trigger.addEventListener("click", () => {

        const isActive =
            category.classList.contains("active");


        /*
           Close all other cards
        */

        skillCategories.forEach(item => {

            item.classList.remove("active");

            const itemTrigger =
                item.querySelector(
                    ".skill-card-trigger"
                );

            if (itemTrigger) {

                itemTrigger.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });


        /*
           If the clicked card
           was closed, open it.
        */

        if (!isActive) {

            category.classList.add(
                "active"
            );

            trigger.setAttribute(
                "aria-expanded",
                "true"
            );

        }

    });

});

/* =========================================================
   EDUCATION INTERACTION
========================================================= */

const educationItems =
    document.querySelectorAll(".education-item");


educationItems.forEach(item => {

    const trigger =
        item.querySelector(
            ".education-card-trigger"
        );


    if (!trigger) {
        return;
    }


    trigger.addEventListener("click", () => {

        const isActive =
            item.classList.contains("active");


        /*
           Close all education cards
        */

        educationItems.forEach(otherItem => {

            otherItem.classList.remove(
                "active"
            );


            const otherTrigger =
                otherItem.querySelector(
                    ".education-card-trigger"
                );


            if (otherTrigger) {

                otherTrigger.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });


        /*
           Open selected card
        */

        if (!isActive) {

            item.classList.add(
                "active"
            );


            trigger.setAttribute(
                "aria-expanded",
                "true"
            );

        }

    });

});
/* =========================================================
   INITIAL TECHNICAL SKILLS
========================================================= */

if (skillCategories.length > 0) {

    const initialSkill =
        document.querySelector(
            ".skill-category.active"
        );


    if (initialSkill) {

        updateSkillDetail(
            initialSkill.dataset.skill
        );

    }

}
