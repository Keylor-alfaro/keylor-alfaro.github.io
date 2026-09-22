
/* =========================================================
   PORTFOLIO INTERACTIONS
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const mobileMenuButton =
    document.querySelector(".mobile-menu-button");

const navLinks =
    document.querySelector(".nav-links");

const navLinkItems =
    document.querySelectorAll(".nav-links .nav-link");


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


    navLinkItems.forEach(link => {

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

        company:
            "CONCENTRIX COSTA RICA",

        date:
            "04/2025 – 12/2025",

        role:
            "IT Support Specialist / Avalon Advisor I",

        howWorked:
            `
            My work typically started with understanding the user's
            issue and determining its impact and urgency. I then
            investigated the symptoms, performed the appropriate
            troubleshooting steps, and either restored the service
            or escalated the case with the relevant technical
            information.

            Throughout the process, I maintained accurate
            documentation and followed up until the issue reached
            the appropriate resolution.
            `,

        focusAreas: [
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
            `
            I approached technical issues by breaking them down
            into observable symptoms, identifying possible causes,
            evaluating the available solutions, and applying
            structured troubleshooting steps.

            When a direct resolution was not possible, I focused
            on providing the next technical team with accurate
            information, documented troubleshooting, and clear
            context to support the escalation.
            `,

        usersTeams:
            `
            Supporting users was not limited to resolving the
            technical issue. I also focused on communicating what
            was happening, explaining the next steps clearly,
            managing expectations, and keeping the case moving
            until resolution.

            For issues requiring escalation, I coordinated with
            specialized teams and maintained the necessary
            follow-up.
            `,

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


    /* =====================================================
       GLOBAL PACKING GROUP
    ===================================================== */

    global: {

        company:
            "GLOBAL PACKING GROUP",

        date:
            "06/2021 – 08/2024",

        role:
            "Technical Support Specialist",

        howWorked:
            `
            My work involved supporting users across on-site and
            remote environments, beginning with understanding the
            reported issue and determining whether it involved
            hardware, software, systems, connectivity, or user
            access.

            I then investigated the issue, performed the appropriate
            technical checks, applied corrective actions, and
            validated that the affected equipment, application, or
            service was working as expected.
            `,

        focusAreas: [
            "Technical Support",
            "Hardware & Software",
            "Infrastructure",
            "Systems Support"
        ],

        workflow: [

            {
                number: "01",
                title: "Issue Identification",
                description:
                    "Gathered information from the user and identified whether the issue involved hardware, software, systems, or connectivity."
            },

            {
                number: "02",
                title: "Technical Diagnosis",
                description:
                    "Investigated symptoms, checked the affected environment, and narrowed down the likely source of the problem."
            },

            {
                number: "03",
                title: "Troubleshooting",
                description:
                    "Applied the appropriate technical procedures, configurations, repairs, or corrective actions."
            },

            {
                number: "04",
                title: "Validation",
                description:
                    "Verified that the affected equipment, application, connection, or service was operating correctly."
            },

            {
                number: "05",
                title: "Follow-up",
                description:
                    "Maintained communication with users and followed up on technical issues requiring additional attention."
            }

        ],

        problemApproach:
            `
            I approached problems by first determining the affected
            component or service and then narrowing down the possible
            causes through technical checks and troubleshooting.

            This included working across hardware, software,
            Microsoft environments, business applications,
            connectivity, and infrastructure-related issues.
            `,

        usersTeams:
            `
            My support involved direct interaction with users in
            both on-site and remote environments. I focused on
            understanding the issue clearly, communicating the
            troubleshooting process, and confirming that the
            requested support had been properly addressed.

            When an issue involved another technical area, I
            coordinated with the appropriate resources to continue
            the resolution process.
            `,

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

        performance: [
            {
                value: "On-site",
                label: "Technical Support"
            },

            {
                value: "Remote",
                label: "User Support"
            }

        ],

        roleFocus: [
            "Technical Support",
            "Infrastructure Support",
            "Systems & Hardware"
        ]

    },


    /* =====================================================
       SONDA
    ===================================================== */

    sonda: {

        company:
            "SONDA COSTA RICA",

        date:
            "02/2021 – 06/2021",

        role:
            "Helpdesk Agent / Incident Manager",

        howWorked:
            `
            My work began with receiving and understanding the
            user's reported incident or service request. I assessed
            the issue, determined its priority, and gathered the
            information required to investigate or route the case.

            I then performed the appropriate troubleshooting,
            documented the case, and either restored the service
            or escalated the incident to the corresponding
            technical team.
            `,

        focusAreas: [
            "Helpdesk Support",
            "Incident Management",
            "Service Requests",
            "Escalation"
        ],

        workflow: [

            {
                number: "01",
                title: "Incoming Incident",
                description:
                    "Received the user's incident or service request and gathered the relevant information."
            },

            {
                number: "02",
                title: "Classification",
                description:
                    "Analyzed the reported issue and determined its type, impact, and appropriate priority."
            },

            {
                number: "03",
                title: "Troubleshooting",
                description:
                    "Performed the applicable first and second-level troubleshooting steps to restore the service."
            },

            {
                number: "04",
                title: "Escalation",
                description:
                    "Escalated incidents requiring specialized support with the relevant technical and case information."
            },

            {
                number: "05",
                title: "Follow-up",
                description:
                    "Maintained ticket information and followed the incident through the appropriate resolution process."
            }

        ],

        problemApproach:
            `
            I approached incidents by first understanding what
            service was affected and determining the impact on
            the user or business operation.

            From there, I used the available information to
            determine the appropriate troubleshooting path and
            whether the incident could be resolved directly or
            required escalation.
            `,

        usersTeams:
            `
            User communication was an important part of the
            support process. I focused on gathering accurate
            information, communicating the status of the incident,
            and maintaining follow-up while the case progressed.

            For incidents requiring escalation, I provided the
            relevant information to the appropriate technical team
            to support continuity of the resolution process.
            `,

        environment: [
            "Helpdesk",
            "Incident Management",
            "Corporate IT",
            "Technical Escalation"
        ],

        performance: [

            {
                value: "95%",
                label: "Customer Satisfaction"
            },

            {
                value: "1st / 2nd",
                label: "Level Support"
            }

        ],

        roleFocus: [
            "Helpdesk Support",
            "Incident Management",
            "Service Restoration"
        ]

    }

};


/* =========================================================
   EXPERIENCE ELEMENTS
========================================================= */

const experienceNavigation =
    document.querySelectorAll(
        ".experience-nav-item"
    );

const experienceShowcase =
    document.querySelector(
        ".experience-showcase"
    );


/* =========================================================
   EXPERIENCE RENDER FUNCTION
========================================================= */

function renderExperience(experienceKey) {

    const data =
        experienceData[experienceKey];

    if (!data || !experienceShowcase) {
        return;
    }


    /* ---------------------------------------------------------
       Main references
    --------------------------------------------------------- */

    const companyElement =
        experienceShowcase.querySelector(
            ".experience-company"
        );

    const dateElement =
        experienceShowcase.querySelector(
            ".showcase-date"
        );

    const roleElement =
        experienceShowcase.querySelector(
            ".showcase-company h3"
        );

    const descriptionElement =
        experienceShowcase.querySelector(
            ".showcase-description"
        );

    const focusContainer =
        experienceShowcase.querySelector(
            ".experience-scope"
        );

    const workflowContainer =
        experienceShowcase.querySelector(
            ".support-workflow"
        );

    const problemApproachElement =
        experienceShowcase.querySelector(
            ".experience-detail-section:nth-of-type(1) p"
        );

    const usersTeamsElement =
        experienceShowcase.querySelector(
            ".experience-detail-section:nth-of-type(2) p"
        );

    const environmentContainer =
        experienceShowcase.querySelector(
            ".environment-tags"
        );

    const metricsContainer =
        experienceShowcase.querySelector(
            ".showcase-metrics"
        );

    const roleFocusContainer =
        experienceShowcase.querySelector(
            ".role-focus"
        );


    /* ---------------------------------------------------------
       Update basic information
    --------------------------------------------------------- */

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


    /* ---------------------------------------------------------
       HOW I WORKED
    --------------------------------------------------------- */

    if (descriptionElement) {

        descriptionElement.innerHTML =
            formatParagraphs(
                data.howWorked
            );

    }


    /* ---------------------------------------------------------
       FOCUS AREAS
    --------------------------------------------------------- */

    if (focusContainer) {

        focusContainer.innerHTML =
            data.focusAreas
                .map(item => `
                    <span>
                        ${item}
                    </span>
                `)
                .join("");

    }


    /* ---------------------------------------------------------
       WORKFLOW
    --------------------------------------------------------- */

    if (workflowContainer) {

        workflowContainer.innerHTML =
            data.workflow
                .map((step, index) => {

                    const connector =
                        index < data.workflow.length - 1
                            ? `
                                <div class="workflow-connector">
                                    →
                                </div>
                              `
                            : "";

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

                        ${connector}
                    `;

                })
                .join("");

    }


    /* ---------------------------------------------------------
       HOW I APPROACHED PROBLEMS
    --------------------------------------------------------- */

    if (problemApproachElement) {

        problemApproachElement.innerHTML =
            formatParagraphs(
                data.problemApproach
            );

    }


    /* ---------------------------------------------------------
       WORKING WITH USERS & TEAMS
    --------------------------------------------------------- */

    if (usersTeamsElement) {

        usersTeamsElement.innerHTML =
            formatParagraphs(
                data.usersTeams
            );

    }


    /* ---------------------------------------------------------
       TECHNICAL ENVIRONMENT
    --------------------------------------------------------- */

    if (environmentContainer) {

        environmentContainer.innerHTML =
            data.environment
                .map(item => `
                    <span>
                        ${item}
                    </span>
                `)
                .join("");

    }


    /* ---------------------------------------------------------
       PERFORMANCE
    --------------------------------------------------------- */

    if (metricsContainer) {

        metricsContainer.innerHTML =
            data.performance
                .map(metric => `
                    <div class="metric">

                        <strong>
                            ${metric.value}
                        </strong>

                        <span>
                            ${metric.label}
                        </span>

                    </div>
                `)
                .join("");

    }


    /* ---------------------------------------------------------
       ROLE FOCUS
    --------------------------------------------------------- */

    if (roleFocusContainer) {

        roleFocusContainer.innerHTML =
            data.roleFocus
                .map(item => `
                    <span>
                        ${item}
                    </span>
                `)
                .join("");

    }

}


/* =========================================================
   FORMAT PARAGRAPHS
========================================================= */

function formatParagraphs(text) {

    return text
        .trim()
        .split(/\n\s*\n/)
        .map(paragraph => {

            return paragraph
                .trim()
                .replace(/\n/g, " ");

        })
        .map(paragraph => {

            return `<span>${paragraph}</span>`;

        })
        .join("");

}


/* =========================================================
   EXPERIENCE NAVIGATION
========================================================= */

experienceNavigation.forEach(button => {

    button.addEventListener("click", () => {

        const experienceKey =
            button.dataset.experience;


        /* -----------------------------------------------------
           Ignore if already active
        ----------------------------------------------------- */

        const alreadyActive =
            button.classList.contains("active");


        if (alreadyActive) {
            return;
        }


        /* -----------------------------------------------------
           Remove active state
        ----------------------------------------------------- */

        experienceNavigation.forEach(item => {

            item.classList.remove(
                "active"
            );

            item.setAttribute(
                "aria-selected",
                "false"
            );

        });


        /* -----------------------------------------------------
           Activate selected item
        ----------------------------------------------------- */

        button.classList.add(
            "active"
        );

        button.setAttribute(
            "aria-selected",
            "true"
        );


        /* -----------------------------------------------------
           Animate showcase
        ----------------------------------------------------- */

        if (experienceShowcase) {

            experienceShowcase.classList.add(
                "is-changing"
            );


            setTimeout(() => {

                renderExperience(
                    experienceKey
                );

                experienceShowcase.classList.remove(
                    "is-changing"
                );

            }, 180);

        } else {

            renderExperience(
                experienceKey
            );

        }

    });

});


/* =========================================================
   INITIAL EXPERIENCE
========================================================= */

renderExperience(
    "concentrix"
);


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


    trigger.addEventListener("click", () => {

        const isActive =
            category.classList.contains(
                "active"
            );


        skillCategories.forEach(item => {

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

        });


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


    trigger.addEventListener("click", () => {

        const isActive =
            item.classList.contains(
                "active"
            );


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
   SMOOTH ANCHOR SCROLLING
========================================================= */

const anchorLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


anchorLinks.forEach(link => {

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
