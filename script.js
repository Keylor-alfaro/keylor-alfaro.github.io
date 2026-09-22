
/* =========================================================
   EXPERIENCE DATA
========================================================= */

const experiences = {

    concentrix: {

        company: "CONCENTRIX COSTA RICA",

        role: "IT Support Specialist / Avalon Advisor I",

        date: "04/2025 – 12/2025",

        description:
            "Provided 1st and 2nd-level IT support, independently managing incidents and service requests across hardware, software, Microsoft 365, business applications, authentication, and network issues.",

        scope: [
            "IT Support",
            "Incident Management",
            "Troubleshooting"
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
   TECHNICAL SKILLS DATA
========================================================= */

const skillData = {

    microsoft: {

        number: "01",

        title: "Microsoft & IT",

        description:
            "Core technologies used to support users, manage Microsoft environments, troubleshoot technical issues, and restore services.",

        skills: [
            "Microsoft 365",
            "Active Directory",
            "Windows 10/11",
            "Windows Server",
            "ServiceNow"
        ]

    },


    infrastructure: {

        number: "02",

        title: "Infrastructure",

        description:
            "Infrastructure technologies used for hardware support, maintenance, device management, backups, and day-to-day IT operations.",

        skills: [
            "Hardware",
            "Printers",
            "Telephony",
            "Backup & Recovery",
            "IT Asset Management"
        ]

    },


    networking: {

        number: "03",

        title: "Networking",

        description:
            "Networking technologies and concepts used to troubleshoot connectivity, identify network issues, and support reliable IT services.",

        skills: [
            "TCP/IP",
            "LAN / WAN",
            "DNS / DHCP",
            "Wi-Fi",
            "VPN",
            "Network Security"
        ]

    },


    systems: {

        number: "04",

        title: "Systems & Applications",

        description:
            "Business systems and data technologies used to support enterprise applications, troubleshoot issues, and work with structured information.",

        skills: [
            "Softland ERP",
            "SAP ERP",
            "Oracle Database",
            "SQL",
            "Business Applications",
            "Software Center",
            "SharePoint"
        ]

    },


    operations: {

        number: "05",

        title: "Problem Solving & Operations",

        description:
            "Operational capabilities that support structured troubleshooting, incident resolution, service restoration, documentation, and escalation.",

        skills: [
            "1st / 2nd-Level Support",
            "Troubleshooting",
            "Root Cause Analysis",
            "Issue Resolution",
            "Incident Management",
            "ITIL",
            "SLA / KPI",
            "Service Requests",
            "Technical Documentation"
        ]

    }

};



/* =========================================================
   TECHNICAL SKILLS ELEMENTS
========================================================= */

const skillCategories =
    document.querySelectorAll(".skill-category");

const skillsDetail =
    document.querySelector("#skillsDetail");

const detailTitle =
    document.querySelector("#detailTitle");

const detailNumber =
    document.querySelector("#detailNumber");

const detailDescription =
    document.querySelector("#detailDescription");

const detailSkills =
    document.querySelector("#detailSkills");



/* =========================================================
   UPDATE SKILL DETAIL
========================================================= */

function updateSkillDetail(skillKey) {

    const data =
        skillData[skillKey];

    if (!data) {
        return;
    }


    /*
       Start transition
    */

    if (skillsDetail) {

        skillsDetail.classList.add(
            "is-changing"
        );

    }


    setTimeout(() => {

        if (!detailTitle ||
            !detailNumber ||
            !detailDescription ||
            !detailSkills) {

            return;

        }


        /*
           Update title
        */

        detailTitle.textContent =
            data.title;


        /*
           Update number
        */

        detailNumber.textContent =
            data.number;


        /*
           Update description
        */

        detailDescription.textContent =
            data.description;


        /*
           Clear previous skills
        */

        detailSkills.innerHTML = "";


        /*
           Create skill buttons
        */

        data.skills.forEach(skill => {

            const button =
                document.createElement("button");

            button.type = "button";

            button.textContent =
                skill;

            detailSkills.appendChild(
                button
            );

        });


        /*
           Finish transition
        */

        if (skillsDetail) {

            skillsDetail.classList.remove(
                "is-changing"
            );

        }

    }, 180);

}



/* =========================================================
   TECHNICAL SKILLS EVENTS
========================================================= */

skillCategories.forEach(category => {

    category.addEventListener(
        "click",
        () => {

            const skillKey =
                category.dataset.skill;


            /*
               Remove active state
               from all categories
            */

            skillCategories.forEach(item => {

                item.classList.remove(
                    "active"
                );

            });


            /*
               Activate selected category
            */

            category.classList.add(
                "active"
            );


            /*
               Update detail panel
            */

            updateSkillDetail(
                skillKey
            );

        }
    );

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
