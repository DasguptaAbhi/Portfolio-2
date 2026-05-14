const projects = [
    {
        id: "itc-stock-market-analysis",
        title: "Stock Market Trend & Transaction Analysis",
        image: "images/work-1.png",
        github: "https://github.com/DasguptaAbhi/ITC-Stock-Market-Data-Analysis-",
        summary: "Automated the cleaning and processing of 5,000+ rows of stock market data using SQL, then shaped the results for trend and performance analysis.",
        question: "How can historical stock data be cleaned, structured, and analyzed to make price movement, volatility, and trend patterns easier to interpret?",
        approach: [
            "Reviewed raw market records for missing values, duplicated rows, inconsistent date formats, and numeric formatting issues.",
            "Used SQL transformations to standardize fields, calculate key measures, and prepare the dataset for repeatable analysis.",
            "Explored price movement, trading volume, and stock behavior patterns to support a cleaner view of market performance."
        ],
        outcomes: [
            "Built a cleaner analysis-ready dataset from noisy market data.",
            "Reduced manual preparation effort by moving repeated cleaning steps into SQL.",
            "Created a clearer foundation for charting trends and explaining stock performance."
        ],
        tools: ["SQL", "Power BI", "Excel"],
        role: "Data cleaning, SQL transformation, exploratory analysis",
        dashboard: {
            title: "ITC Stock Market Power BI Dashboard",
            embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiMTk1OTdlZGQtYjM2Mi00YjJjLTgwYmEtN2Y2OTcwMjk0ZDc2IiwidCI6IjEyMzM5ZGVkLTZmZjctNDE5ZS04MjA2LWFmNTA2NzUyMmYxYyJ9",
            note: "Paste your published Power BI iframe URL into this project's embedUrl field in function.js to make the live ITC dashboard appear here."
        }
    },
    {
        id: "mitron-bank-credit-card-analysis",
        title: "Customer Behavior & Capital Spend Analysis",
        image: "images/work-2.png",
        github: "https://github.com/DasguptaAbhi/Introduce-New-Credit-Card-Line-for-Bank",
        summary: "Analyzed customer behavior for a legacy financial institution planning a new credit card line and market expansion strategy.",
        question: "Which customer segments, spending patterns, and product opportunities should Mitron Bank consider before launching a new credit card line?",
        approach: [
            "Segmented customers by demographics, spend behavior, and usage patterns.",
            "Compared category-level spending to identify high-value product positioning opportunities.",
            "Translated findings into dashboard-ready KPIs for decision makers."
        ],
        outcomes: [
            "Identified customer groups with stronger potential for new credit card adoption.",
            "Highlighted spending categories that can inform rewards and product benefits.",
            "Created a business-focused reporting structure for product strategy discussion."
        ],
        tools: ["Power BI", "Python", "Customer Segmentation"],
        role: "Customer segmentation, KPI design, business recommendations",
        dashboard: {
            title: "Credit Card Opportunity Dashboard",
            embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiZmE5MzA0YzEtYTlkYS00Y2EzLWIxYmItZGI0ODZiZGU2YzI5IiwidCI6IjEyMzM5ZGVkLTZmZjctNDE5ZS04MjA2LWFmNTA2NzUyMmYxYyJ9",
            note: "Paste your published Power BI iframe URL into this project's embedUrl field in function.js to make the live dashboard appear here."
        }
    },
    {
        id: "cyclistic-bike-share-analysis",
        title: "Cyclistic Bike Share Analysis",
        image: "images/work-3.png",
        github: "https://github.com/DasguptaAbhi/Cyclistic-bike-share-analysis",
        summary: "Used the Ask, Prepare, Process, Analyze, Share, and Act framework to understand how casual riders and members use a bike-share service differently.",
        question: "How do casual riders and annual members differ, and what evidence can support marketing actions to convert casual riders?",
        approach: [
            "Prepared and cleaned bike-share trip data for analysis.",
            "Compared ride patterns by membership type, time, duration, and usage behavior.",
            "Organized insights around the Google data analysis process to keep the case study easy to follow."
        ],
        outcomes: [
            "Clarified behavioral differences between casual riders and members.",
            "Outlined practical marketing actions based on riding patterns.",
            "Demonstrated an end-to-end analytics workflow from question to recommendation."
        ],
        tools: ["Python", "Excel", "Case Study"],
        role: "Data preparation, behavioral analysis, recommendation writing",
        dashboard: false
    },
    {
        id: "coffee-sales-analysis",
        title: "E-Commerce Sales Performance Analysis",
        image: "images/work-4.png",
        github: "https://github.com/DasguptaAbhi/Coffee-Sales-Analysis",
        summary: "Analyzed coffee sales across multiple sheets to understand revenue trends, customer behavior, product performance, and regional patterns.",
        question: "What do coffee sales trends reveal about product performance, customer demand, and opportunities for stronger reporting?",
        approach: [
            "Combined related spreadsheet tables into a structured analysis view.",
            "Built sales metrics by product, time period, and customer attributes.",
            "Designed a dashboard-style reporting flow to make trends easier to scan."
        ],
        outcomes: [
            "Revealed top-performing products and sales patterns.",
            "Made multi-sheet sales data easier to understand through visual reporting.",
            "Created a practical reporting base for sales monitoring."
        ],
        tools: ["Excel", "Data Visualization", "Sales Analysis"],
        role: "Sales analysis, dashboard design, KPI reporting",
        dashboard: false
    },
    {
        id: "nyc-taxi-fare-prediction",
        title: "NYC Taxi Fare Prediction",
        image: "images/work-5.png",
        github: "https://github.com/DasguptaAbhi/NYC-Taxi-Fare-Prediction-A-Regression-Analysis-Project",
        summary: "Built an end-to-end regression workflow to predict New York City taxi fare amounts using trip-level features.",
        question: "Which trip attributes help explain taxi fare amount, and how accurately can a regression model estimate fares?",
        approach: [
            "Explored fare, distance, passenger, and location-related fields for quality and signal.",
            "Prepared model-ready features and tested a regression approach.",
            "Evaluated model behavior to understand predictive strength and limitations."
        ],
        outcomes: [
            "Created a structured predictive analytics workflow.",
            "Identified the features most relevant to fare estimation.",
            "Demonstrated data science skills beyond descriptive BI reporting."
        ],
        tools: ["Python", "Regression", "Exploratory Analysis"],
        role: "Feature preparation, regression modeling, model interpretation",
        dashboard: false
    },
    {
        id: "waze-user-behavior-analysis",
        title: "Waze User Behavior Analysis",
        image: "images/work-6.png",
        github: "https://github.com/DasguptaAbhi/Waze-User-Behavior-Analysis-Investigating-Ride-Frequency-by-Device-Type",
        summary: "Investigated ride frequency differences between iPhone and Android users to understand whether device type is associated with driving behavior.",
        question: "Is there a statistically meaningful difference in average ride frequency between iPhone and Android users?",
        approach: [
            "Explored Waze user data by mobile device type and ride frequency.",
            "Compared group-level statistics to evaluate possible behavioral differences.",
            "Framed results around hypothesis testing and interpretation."
        ],
        outcomes: [
            "Practiced statistical comparison with a business-friendly explanation.",
            "Created evidence for whether device type should influence user segmentation.",
            "Strengthened the bridge between analytics methods and product questions."
        ],
        tools: ["Python", "Statistics", "Hypothesis Testing"],
        role: "Exploratory analysis, statistical testing, insight communication",
        dashboard: false
    }
];

function initNavigation() {
    const toggle = document.querySelector(".nav-toggle");
    const menu = document.querySelector(".site-menu");

    if (!toggle || !menu) {
        return;
    }

    toggle.addEventListener("click", () => {
        const isOpen = menu.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(isOpen));
    });

    menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            menu.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
        });
    });
}

function renderProjectGrid() {
    const grid = document.getElementById("project-grid");

    if (!grid) {
        return;
    }

    grid.innerHTML = projects.map((project) => `
        <a class="project-card" href="project.html?id=${project.id}">
            <img src="${project.image}" alt="${project.title}">
            <div class="project-card-body">
                ${project.dashboard ? '<span class="dashboard-badge">Power BI Ready</span>' : ""}
                <h3>${project.title}</h3>
                <p>${project.summary}</p>
                <div class="tag-list">
                    ${project.tools.map((tool) => `<span>${tool}</span>`).join("")}
                </div>
            </div>
        </a>
    `).join("");
}

function getSelectedProject() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id") || projects[0].id;
    return projects.find((project) => project.id === id);
}

function renderDashboard(project) {
    if (!project.dashboard) {
        return `
            <section class="dashboard-section">
                <h2>Dashboard</h2>
                <div class="dashboard-panel">
                    <div class="dashboard-placeholder">
                        <div>
                            <strong>No Power BI dashboard for this project yet.</strong>
                            <p>This case study focuses on analysis process and findings. Selected BI projects include a dedicated dashboard area.</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    if (project.dashboard.embedUrl) {
        return `
            <section class="dashboard-section">
                <h2>${project.dashboard.title}</h2>
                <div class="dashboard-panel">
                    <iframe title="${project.dashboard.title}" src="${project.dashboard.embedUrl}" allowfullscreen></iframe>
                </div>
            </section>
        `;
    }

    return `
        <section class="dashboard-section">
            <h2>${project.dashboard.title}</h2>
            <div class="dashboard-panel">
                <div class="dashboard-placeholder">
                    <div>
                        <strong>Power BI dashboard slot</strong>
                        <p>Add the published Power BI embed URL for this project in <strong>function.js</strong>. The live report will automatically replace this placeholder.</p>
                        <p class="dashboard-note">${project.dashboard.note}</p>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function renderProjectDetail() {
    const detail = document.getElementById("project-detail");

    if (!detail) {
        return;
    }

    const project = getSelectedProject();

    if (!project) {
        detail.innerHTML = `
            <section class="section-wrap not-found">
                <p class="eyebrow">Project Not Found</p>
                <h1>That case study is not available.</h1>
                <div class="hero-actions">
                    <a class="btn primary" href="index.html#work">Back to My Work</a>
                </div>
            </section>
        `;
        return;
    }

    document.title = `${project.title} | Abhipsita Dasgupta`;
    detail.innerHTML = `
        <section class="section-wrap project-hero">
            <div>
                <p class="eyebrow">Case Study</p>
                <h1>${project.title}</h1>
                <p class="project-summary">${project.summary}</p>
                <div class="project-actions">
                    <a class="btn primary" href="${project.github}">View GitHub Project</a>
                    <a class="btn secondary" href="index.html#work">Back to My Work</a>
                </div>
            </div>
            <img class="project-cover" src="${project.image}" alt="${project.title}">
        </section>

        <section class="section-wrap case-layout">
            <aside class="case-meta" aria-label="Project details">
                <h2>Project Details</h2>
                <div>
                    <strong>Role</strong>
                    <p>${project.role}</p>
                </div>
                <div>
                    <strong>Tools</strong>
                    <div class="tag-list">
                        ${project.tools.map((tool) => `<span>${tool}</span>`).join("")}
                    </div>
                </div>
                <div>
                    <strong>Power BI</strong>
                    <p>${project.dashboard ? "Dashboard section available on this page." : "Not selected for dashboard embed."}</p>
                </div>
            </aside>

            <div class="case-copy">
                <section class="case-section">
                    <h2>Business Question</h2>
                    <p>${project.question}</p>
                </section>

                <section class="case-section">
                    <h2>Analysis Approach</h2>
                    <ul class="insight-list">
                        ${project.approach.map((item, index) => `<li><strong>Step ${index + 1}</strong><p>${item}</p></li>`).join("")}
                    </ul>
                </section>

                <section class="case-section">
                    <h2>Key Outcomes</h2>
                    <ul class="insight-list">
                        ${project.outcomes.map((item) => `<li><p>${item}</p></li>`).join("")}
                    </ul>
                </section>

                ${renderDashboard(project)}
            </div>
        </section>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    renderProjectGrid();
    renderProjectDetail();
});
