/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const mobileMenuButton =
    document.querySelector(".mobile-menu-button");

const navLinks =
    document.querySelector(".nav-links");

if (mobileMenuButton && navLinks) {

    mobileMenuButton.addEventListener("click", () => {

        const isOpen =
            navLinks.classList.contains("active");

        navLinks.classList.toggle("active");
        mobileMenuButton.classList.toggle("active");

        mobileMenuButton.setAttribute(
            "aria-expanded",
            String(!isOpen)
        );

    });


    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");
            mobileMenuButton.classList.remove("active");

            mobileMenuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =========================================================
   EXPERIENCE DATA
========================================================= */

const experienceData = {

    concentrix: {

        company: "Concentrix Costa Rica",

        date: "04/2025 – 12/2025",

        role:
            "IT Support Specialist / Avalon Advisor I",

        howWorked:
            "My work typically started with understanding the user's issue and determining its impact and urgency. I then investigated the symptoms, performed the appropriate troubleshooting steps, and either restored the service or escalated the case with the relevant technical information. Throughout the process, I maintained accurate documentation and followed up until the issue reached the appropriate resolution.",

        focus: [
            "IT Support",
            "Incident Management",
            "Troubleshooting",
            "Service Restoration"
        ],

        workflow: [

            {
                number: "01",
                title: "Initial Assessment",
                description:
                    "Reviewed the reported issue, gathered relevant information, and determined its impact and urgency."
            },

            {
                number: "02",
                title: "Troubleshooting",
                description:
                    "Investigated symptoms and applied structured troubleshooting steps to identify the likely cause."
            },

            {
                number: "03",
                title: "Resolution / Escalation",
                description:
                    "Applied corrective actions when the issue could be resolved at my level, or escalated it with the relevant technical context."
            },

            {
                number: "04",
                title: "Documentation",
                description:
                    "Recorded the investigation, troubleshooting performed, resolution, and relevant case information in ServiceNow."
            },

            {
                number: "05",
                title: "Follow-up",
                description:
                    "Maintained case follow-up until the appropriate resolution was reached and the issue was properly closed."
            }

        ],

        problemApproach:
            "I approached technical issues by breaking them down into observable symptoms, identifying possible causes, evaluating the available solutions, and applying structured troubleshooting steps. When a direct resolution was not possible, I focused on providing the next technical team with accurate information, documented troubleshooting, and clear context to support the escalation.",

        usersTeams:
            "Supporting users was not limited to resolving the technical issue. I also focused on communicating what was happening, explaining the next steps clearly, managing expectations, and keeping the case moving until resolution. For issues requiring escalation, I coordinated with specialized teams and maintained the necessary follow-up.",

        environment: [
            "Microsoft 365",
            "ServiceNow",
            "Business Applications",
            "Networking"
        ],

        performance: [
            {
                value: "95%",
                label: "SLA / KPI Compliance"
            },
            {
                value: "90%+",
                label: "Customer Satisfaction"
            }
        ],

        roleFocus: [
            "Enterprise IT Support",
            "Incident Resolution",
            "Technical Troubleshooting"
        ]

    },


    global: {

        company: "Global Packing Group",

        date: "06/2021 – 08/2024",

        role:
            "Technical Support Specialist",

        howWorked:
            "My work combined on-site and remote technical support across hardware, software, business applications, systems, and infrastructure. I focused on identifying the source of technical problems, applying the appropriate troubleshooting or configuration steps, validating the result, and maintaining the necessary follow-up.",

        focus: [
            "IT Support",
            "Infrastructure Support",
            "Hardware & Software",
            "Systems Support"
        ],

        workflow: [

            {
                number: "01",
                title: "Issue Identification",
                description:
                    "Reviewed the reported problem and gathered the information needed to understand the affected equipment, application, system, or service."
            },

            {
                number: "02",
                title: "Diagnosis",
                description:
                    "Analyzed symptoms and investigated the technical environment to determine the likely source of the issue."
            },

            {
                number: "03",
                title: "Troubleshooting",
                description:
                    "Applied appropriate troubleshooting procedures across hardware, software, applications, systems, or network connectivity."
            },

            {
                number: "04",
                title: "Repair / Configuration",
                description:
                    "Performed the required repair, configuration, replacement, or system adjustment based on the identified issue."
            },

            {
                number: "05",
                title: "Validation & Follow-up",
                description:
                    "Validated that the service or equipment was operating correctly and maintained the required documentation or follow-up."
            }

        ],

        problemApproach:
            "I approached technical problems by first identifying whether the issue was related to hardware, software, applications, infrastructure, or connectivity. I then isolated the affected component, tested possible causes, applied the appropriate corrective action, and validated the result before considering the issue resolved.",

        usersTeams:
            "I provided both on-site and remote support, working directly with users to understand their technical needs and explain the actions required. When an issue involved systems or infrastructure beyond the immediate support level, I coordinated with the relevant technical resources to continue the investigation.",

        environment: [
            "Microsoft 365",
            "Active Directory",
            "Windows Server",
            "Softland ERP",
            "Hardware",
            "Printers",
            "Telephony",
            "Networking"
        ],

        performance: [],

        roleFocus: [
            "IT Support",
            "Infrastructure Support",
            "Technical Troubleshooting"
        ]

    },


    sonda: {

        company: "SONDA Costa Rica",

        date: "02/2021 – 06/2021",

        role:
            "Helpdesk Agent / Incident Manager",

        howWorked:
            "My work focused on receiving, analyzing, classifying, and following up on incidents and service requests. I evaluated the reported issue, determined its impact and priority, performed the appropriate troubleshooting, and either restored the service or escalated the case with the relevant information.",

        focus: [
            "Helpdesk",
            "Incident Management",
            "Troubleshooting",
            "Service Restoration"
        ],

        workflow: [

            {
                number: "01",
                title: "Incoming Request",
                description:
                    "Received the incident or service request and gathered the relevant information from the user."
            },

            {
                number: "02",
                title: "Classification",
                description:
                    "Analyzed the reported issue and classified the case according to its nature, impact, and priority."
            },

            {
                number: "03",
                title: "Troubleshooting",
                description:
                    "Performed the appropriate first and second-level troubleshooting based on the reported symptoms."
            },

            {
                number: "04",
                title: "Resolution / Escalation",
                description:
                    "Resolved the issue when possible or escalated it to the appropriate corporate technical team."
            },

            {
                number: "05",
                title: "Documentation & Closure",
                description:
                    "Maintained accurate ticket information, followed up on the case, and supported the appropriate closure."
            }

        ],

        problemApproach:
            "I approached incidents by analyzing the reported symptoms, determining the impact and priority, and deciding which troubleshooting path was appropriate. When the issue required another technical level, I escalated it with the relevant information so the next team could continue the investigation efficiently.",

        usersTeams:
            "User communication was an important part of the helpdesk workflow. I gathered information from users, explained the troubleshooting process, communicated the next steps, and maintained follow-up while coordinating escalations with corporate technical teams.",

        environment: [
            "Helpdesk",
            "Ticket Management",
            "Corporate IT",
            "Incident Management"
        ],

        performance: [
            {
                value: "95%",
                label: "Customer Satisfaction"
            }
        ],

        roleFocus: [
            "Helpdesk Support",
            "Incident Management",
            "Technical Troubleshooting"
        ]

    }

};


/* =========================================================
   EXPERIENCE ELEMENTS
========================================================= */

const experienceShowcase =
    document.querySelector(".experience-showcase");

const experienceButtons =
    document.querySelectorAll(".experience-nav-item");

const companyElement =
    document.querySelector(".experience-company");

const dateElement =
    document.querySelector(".showcase-date");

const roleElement =
    document.querySelector(".showcase-company h3");

const howWorkedElement =
    document.querySelector('[data-field="howWorked"]');

const focusElement =
    document.querySelector('[data-field="focus"]');

const workflowContainer =
    document.querySelector(".support-workflow");

const problemApproachElement =
    document.querySelector(
        '[data-field="problemApproach"]'
    );

const usersTeamsElement =
    document.querySelector(
        '[data-field="usersTeams"]'
    );

const environmentElement =
    document.querySelector(
        '[data-field="environment"]'
    );

const performanceContainer =
    document.querySelector(".showcase-metrics");

const roleFocusContainer =
    document.querySelector(".role-focus");


/* =========================================================
   WORKFLOW CONTROLS
========================================================= */

const workflowPrevious =
    document.querySelector(".workflow-prev");

const workflowNext =
    document.querySelector(".workflow-next");


function getWorkflowStepSize() {

    const step =
        workflowContainer?.querySelector(
            ".workflow-step"
        );

    if (!step) {
        return 300;
    }

    const styles =
        window.getComputedStyle(
            workflowContainer
        );

    const gap =
        parseFloat(styles.gap) || 0;

    return step.getBoundingClientRect().width + gap;
}


function updateWorkflowControls() {

    if (
        !workflowContainer ||
        !workflowPrevious ||
        !workflowNext
    ) {
        return;
    }

    const maxScroll =
        workflowContainer.scrollWidth -
        workflowContainer.clientWidth;

    workflowPrevious.disabled =
        workflowContainer.scrollLeft <= 5;

    workflowNext.disabled =
        workflowContainer.scrollLeft >=
        maxScroll - 5;

}


function resetWorkflowCarousel() {

    if (!workflowContainer) {
        return;
    }

    workflowContainer.scrollLeft = 0;

    updateWorkflowControls();

}


if (
    workflowPrevious &&
    workflowNext &&
    workflowContainer
) {

    workflowPrevious.addEventListener(
        "click",
        () => {

            workflowContainer.scrollBy({
                left: -getWorkflowStepSize(),
                behavior: "smooth"
            });

        }
    );


    workflowNext.addEventListener(
        "click",
        () => {

            workflowContainer.scrollBy({
                left: getWorkflowStepSize(),
                behavior: "smooth"
            });

        }
    );


    workflowContainer.addEventListener(
        "scroll",
        updateWorkflowControls
    );


    window.addEventListener(
        "resize",
        updateWorkflowControls
    );

}


/* =========================================================
   EXPERIENCE RENDERING
========================================================= */

function renderExperience(key) {

    const data =
        experienceData[key];

    if (!data) {
        return;
    }


    if (experienceShowcase) {

        experienceShowcase.classList.add(
            "is-changing"
        );

    }


    setTimeout(() => {

        if (companyElement) {
            companyElement.textContent =
                data.company;
        }

        if (dateElement) {
            dateElement.textContent =
                data.date;
        }

        if (roleElement) {
            roleElement.textContent =
                data.role;
        }

        if (howWorkedElement) {
            howWorkedElement.textContent =
                data.howWorked;
        }


        /* FOCUS */

        if (focusElement) {

            focusElement.innerHTML =
                data.focus
                    .map(
                        item =>
                            `<span>${item}</span>`
                    )
                    .join("");

        }


        /* WORKFLOW */

        if (workflowContainer) {

            workflowContainer.innerHTML =
                data.workflow
                    .map(step => {

                        return `
                            <div class="workflow-step">

                                <span class="workflow-number">
                                    ${step.number}
                                </span>

                                <div>

                                    <strong>
                                        ${step.title}
                                    </strong>

                                    <p>
                                        ${step.description}
                                    </p>

                                </div>

                            </div>
                        `;

                    })
                    .join("");

        }


        /* PROBLEM APPROACH */

        if (problemApproachElement) {

            problemApproachElement.textContent =
                data.problemApproach;

        }


        /* USERS & TEAMS */

        if (usersTeamsElement) {

            usersTeamsElement.textContent =
                data.usersTeams;

        }


        /* ENVIRONMENT */

        if (environmentElement) {

            environmentElement.innerHTML =
                data.environment
                    .map(
                        item =>
                            `<span>${item}</span>`
                    )
                    .join("");

        }


        /* PERFORMANCE */

        if (performanceContainer) {

            performanceContainer.innerHTML =
                data.performance.length

                    ? data.performance
                        .map(metric => {

                            return `
                                <div class="metric">

                                    <strong>
                                        ${metric.value}
                                    </strong>

                                    <span>
                                        ${metric.label}
                                    </span>

                                </div>
                            `;

                        })
                        .join("")

                    : `
                        <div class="metric">

                            <strong>
                                —
                            </strong>

                            <span>
                                Performance metrics
                            </span>

                        </div>
                    `;

        }


        /* ROLE FOCUS */

        if (roleFocusContainer) {

            roleFocusContainer.innerHTML = `

                <span class="mini-label">
                    ROLE FOCUS
                </span>

                ${data.roleFocus
                    .map(
                        item =>
                            `<strong>${item}</strong>`
                    )
                    .join("")}

            `;

        }


        resetWorkflowCarousel();


        if (experienceShowcase) {

            experienceShowcase.classList.remove(
                "is-changing"
            );

        }

    }, 180);

}


/* =========================================================
   EXPERIENCE NAVIGATION
========================================================= */

experienceButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const experience =
                button.dataset.experience;

            experienceButtons.forEach(
                item => {

                    item.classList.remove(
                        "active"
                    );

                }
            );

            button.classList.add(
                "active"
            );

            renderExperience(
                experience
            );

        }
    );

});


/* =========================================================
   INITIAL EXPERIENCE
========================================================= */

renderExperience("concentrix");


/* =========================================================
   TECHNICAL SKILLS INTERACTION
========================================================= */

const skillCategories =
    document.querySelectorAll(
        ".skill-category"
    );


skillCategories.forEach(category => {

    const trigger =
        category.querySelector(
            ".skill-card-trigger"
        );

    if (!trigger) {
        return;
    }


    trigger.addEventListener(
        "click",
        () => {

            const isActive =
                category.classList.contains(
                    "active"
                );


            skillCategories.forEach(
                item => {

                    item.classList.remove(
                        "active"
                    );

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

                }
            );


            if (!isActive) {

                category.classList.add(
                    "active"
                );

                trigger.setAttribute(
                    "aria-expanded",
                    "true"
                );

            }

        }
    );

});


/* =========================================================
   EDUCATION INTERACTION
========================================================= */

const educationItems =
    document.querySelectorAll(
        ".education-item"
    );


educationItems.forEach(item => {

    const trigger =
        item.querySelector(
            ".education-card-trigger"
        );

    if (!trigger) {
        return;
    }


    trigger.addEventListener(
        "click",
        () => {

            const isActive =
                item.classList.contains(
                    "active"
                );


            educationItems.forEach(
                otherItem => {

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

                }
            );


            if (!isActive) {

                item.classList.add(
                    "active"
                );

                trigger.setAttribute(
                    "aria-expanded",
                    "true"
                );

            }

        }
    );

});


/* =========================================================
   SMOOTH ANCHOR SCROLLING
========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(link => {

    link.addEventListener(
        "click",
        event => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(
                    targetId
                );

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

});


/* =========================================================
   BACK TO TOP
========================================================= */

const backToTop =
    document.querySelector(
        ".back-to-top"
    );


function updateBackToTop() {

    if (!backToTop) {
        return;
    }

    if (window.scrollY > 500) {

        backToTop.classList.add(
            "visible"
        );

    } else {

        backToTop.classList.remove(
            "visible"
        );

    }

}


window.addEventListener(
    "scroll",
    updateBackToTop,
    { passive: true }
);


if (backToTop) {

    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


updateBackToTop();
