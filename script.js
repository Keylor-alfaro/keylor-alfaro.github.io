```javascript
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
                value: "3+",
                label: "Years of Experience"
            },

            {
                value: "IT",
                label: "Systems & Infrastructure"
            }
        ],

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
   DOM ELEMENTS
   ========================================================= */

const navigationItems =
    document.querySelectorAll(".experience-nav-item");

const companyElement =
    document.getElementById("experience-company");

const roleElement =
    document.getElementById("experience-role");

const dateElement =
    document.getElementById("experience-date");

const descriptionElement =
    document.getElementById("experience-description");

const scopeElement =
    document.getElementById("scope-tags");

const environmentElement =
    document.getElementById("environment-tags");

const metricsElement =
    document.getElementById("showcase-metrics");

const responsibilityElement =
    document.getElementById("responsibility-grid");

const showcaseElement =
    document.getElementById("experience-showcase");

const detailsPanel =
    document.getElementById("experience-details-panel");

const exploreButton =
    document.getElementById("explore-button");


/* =========================================================
   UPDATE EXPERIENCE
   ========================================================= */

function updateExperience(experienceId) {

    const experience =
        experiences[experienceId];

    if (!experience) {
        return;
    }


    /* -----------------------------------------
       Active navigation
       ----------------------------------------- */

    navigationItems.forEach(item => {

        item.classList.toggle(
            "active",
            item.dataset.experience === experienceId
        );

    });


    /* -----------------------------------------
       Main information
       ----------------------------------------- */

    companyElement.textContent =
        experience.company;

    roleElement.textContent =
        experience.role;

    dateElement.textContent =
        experience.date;

    descriptionElement.textContent =
        experience.description;


    /* -----------------------------------------
       Scope
       ----------------------------------------- */

    scopeElement.innerHTML = "";

    experience.scope.forEach(scope => {

        const element =
            document.createElement("span");

        element.textContent =
            scope;

        scopeElement.appendChild(
            element
        );

    });


    /* -----------------------------------------
       Technical environment
       ----------------------------------------- */

    environmentElement.innerHTML = "";

    experience.environment.forEach(item => {

        const element =
            document.createElement("span");

        element.textContent =
            item;

        environmentElement.appendChild(
            element
        );

    });


    /* -----------------------------------------
       Metrics
       ----------------------------------------- */

    metricsElement.innerHTML = "";

    experience.metrics.forEach(metric => {

        const metricElement =
            document.createElement("div");

        metricElement.className =
            "showcase-metric";


        metricElement.innerHTML = `
            <strong>${metric.value}</strong>
            <span>${metric.label}</span>
        `;


        metricsElement.appendChild(
            metricElement
        );

    });


    /* -----------------------------------------
       Responsibilities
       ----------------------------------------- */

    responsibilityElement.innerHTML = "";

    experience.responsibilities.forEach(
        (responsibility, index) => {

            const card =
                document.createElement("article");

            card.className =
                "responsibility-card";


            const number =
                String(index + 1)
                    .padStart(2, "0");


            card.innerHTML = `

                <span class="responsibility-number">
                    ${number}
                </span>

                <h5>
                    ${responsibility.title}
                </h5>

                <p>
                    ${responsibility.description}
                </p>

            `;


            responsibilityElement.appendChild(
                card
            );

        }
    );


    /* -----------------------------------------
       Reset details when switching experience
       ----------------------------------------- */

    detailsPanel.classList.remove("open");

    exploreButton.classList.remove("open");


    /* -----------------------------------------
       Replay showcase animation
       ----------------------------------------- */

    showcaseElement.style.animation = "none";

    showcaseElement.offsetHeight;

    showcaseElement.style.animation =
        "showcaseEnter 0.4s ease";

}


/* =========================================================
   EXPERIENCE NAVIGATION
   ========================================================= */

navigationItems.forEach(item => {

    item.addEventListener(
        "click",
        () => {

            const experienceId =
                item.dataset.experience;

            updateExperience(
                experienceId
            );

        }
    );

});


/* =========================================================
   EXPLORE EXPERIENCE
   ========================================================= */

exploreButton.addEventListener(
    "click",
    () => {

        const isOpen =
            detailsPanel.classList.contains("open");


        if (isOpen) {

            detailsPanel.classList.remove(
                "open"
            );

            exploreButton.classList.remove(
                "open"
            );

        } else {

            detailsPanel.classList.add(
                "open"
            );

            exploreButton.classList.add(
                "open"
            );

        }

    }
);


/* =========================================================
   INITIALIZE
   ========================================================= */

updateExperience("concentrix");
```
