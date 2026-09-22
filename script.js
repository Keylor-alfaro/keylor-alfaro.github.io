const experiences = {

    concentrix: {

        company: "CONCENTRIX COSTA RICA",

        role: "IT Support Specialist / Avalon Advisor I",

        date: "04/2025 – 12/2025",

        description:
            "Provided 1st and 2nd-level IT support, independently managing incidents and service requests across hardware, software, Microsoft 365, business applications, authentication, and network issues.",

        responsibilities: [

            "Investigated technical issues by analyzing symptoms, identifying root causes, and applying structured troubleshooting and corrective actions to restore services.",

            "Achieved 95% SLA and KPI compliance through effective incident triage, prioritization, timely resolution, and consistent case follow-up.",

            "Managed multiple technical issues and user requests simultaneously, adapting priorities to changing needs and maintaining effective case follow-up.",

            "Documented incidents, troubleshooting steps, resolutions, and escalations in ServiceNow while coordinating with specialized teams."
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

        tags: [

            "Microsoft 365",
            "ServiceNow",
            "Troubleshooting",
            "Incident Management",
            "Business Applications"

        ],

        focus: "Enterprise IT Support"

    },


    "global-packing": {

        company: "GLOBAL PACKING GROUP",

        role: "Technical Support Specialist",

        date: "06/2021 – 08/2024",

        description:
            "Provided on-site and remote IT support across hardware, software, Microsoft 365, Active Directory, Windows Server, printers, networks, and business applications, assisting end users and maintaining operational continuity.",

        responsibilities: [

            "Diagnosed and resolved hardware, software, network, ERP, and system issues by analyzing symptoms, identifying root causes, and applying structured technical solutions to restore services.",

            "Performed workstation and equipment configuration, preventive and corrective maintenance, network troubleshooting, and technical support for business applications and IT infrastructure.",

            "Performed backup and recovery procedures, managed IT asset inventory, and supported equipment and technology deployments according to established processes.",

            "Assisted users with Microsoft 365, Active Directory, Windows Server, printers, networks, and business systems, providing practical solutions and documenting technical activities."

        ],

        metrics: [],

        tags: [

            "Microsoft 365",
            "Active Directory",
            "Windows Server",
            "Networking",
            "Hardware",
            "Softland ERP",
            "Backup & Recovery"

        ],

        focus: "Systems & IT Infrastructure"

    },


    sonda: {

        company: "SONDA COSTA RICA",

        role: "Helpdesk Agent / Incident Manager",

        date: "02/2021 – 06/2021",

        description:
            "Managed 1st and 2nd-level IT incidents and service requests, performing initial triage, prioritization, troubleshooting, documentation, escalation, and timely resolution within defined SLAs.",

        responsibilities: [

            "Performed initial incident triage, prioritized support requests, and applied troubleshooting procedures to restore services within established SLAs.",

            "Investigated and documented technical issues, maintained accurate ticket records, and coordinated escalations with corporate IT teams to support effective problem resolution.",

            "Achieved 95% customer satisfaction through effective problem solving, clear communication, timely decision-making, and consistent follow-up on user support requests and incidents."

        ],

        metrics: [

            {
                value: "95%",
                label: "Customer Satisfaction"
            }

        ],

        tags: [

            "Helpdesk",
            "Incident Management",
            "Triage",
            "Troubleshooting",
            "Escalation",
            "SLA"

        ],

        focus: "Service Desk & Incident Management"

    }

};


const timelineItems =
    document.querySelectorAll(".timeline-item");


const companyElement =
    document.getElementById("experience-company");

const roleElement =
    document.getElementById("experience-role");

const dateElement =
    document.getElementById("experience-date");

const descriptionElement =
    document.getElementById("experience-description");

const detailsElement =
    document.getElementById("experience-details");

const metricsElement =
    document.getElementById("experience-metrics");

const tagsElement =
    document.getElementById("experience-tags");

const focusElement =
    document.getElementById("experience-focus-text");


function updateExperience(experienceId) {

    const experience =
        experiences[experienceId];


    if (!experience) {
        return;
    }


    /*
     * Update active timeline item
     */

    timelineItems.forEach(item => {

        item.classList.toggle(
            "active",
            item.dataset.experience === experienceId
        );

    });


    /*
     * Update main information
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
     * Update responsibilities
     */

    detailsElement.innerHTML = "";

    experience.responsibilities.forEach(
        responsibility => {

            const li =
                document.createElement("li");

            li.textContent =
                responsibility;

            detailsElement.appendChild(li);

        }
    );


    /*
     * Update metrics
     */

    metricsElement.innerHTML = "";

    if (experience.metrics.length > 0) {

        experience.metrics.forEach(metric => {

            const metricElement =
                document.createElement("div");

            metricElement.className =
                "metric";


            metricElement.innerHTML = `
                <strong>${metric.value}</strong>
                <span>${metric.label}</span>
            `;


            metricsElement.appendChild(
                metricElement
            );

        });

    } else {

        metricsElement.innerHTML = `
            <div class="metric">
                <strong>3+</strong>
                <span>Years of Experience</span>
            </div>

            <div class="metric">
                <strong>IT</strong>
                <span>Technical Support</span>
            </div>
        `;

    }


    /*
     * Update technical tags
     */

    tagsElement.innerHTML = "";

    experience.tags.forEach(tag => {

        const tagElement =
            document.createElement("span");

        tagElement.textContent =
            tag;

        tagsElement.appendChild(
            tagElement
        );

    });


    /*
     * Update focus
     */

    focusElement.textContent =
        experience.focus;


    /*
     * Replay panel animation
     */

    const panel =
        document.querySelector(".experience-panel");

    panel.style.animation = "none";

    panel.offsetHeight;

    panel.style.animation =
        "experienceFadeIn 0.4s ease";

}


/*
 * Timeline interaction
 */

timelineItems.forEach(item => {

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
