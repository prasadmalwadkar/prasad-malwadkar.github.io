export const content = {
    personal: {
        name: "Prasad Malwadkar",
        email: "malwadkarprasad99@gmail.com",
        phone: "+1(213) 272-5083",
        linkedin: "https://www.linkedin.com/in/prasad-malwadkar/",
        github: "https://github.com/prasadmalwadkar", // Assumed based on context
        title: "Software Development Engineer | Data Engineer",
        location: "San Jose, CA",
    },
    education: [
        {
            degree: "Master of Applied Data Science",
            school: "University of Southern California",
            date: "Dec 2025",
            coursework: "Machine Learning, Predictive Analytics, Data Management, Data Mining, Advanced Data Stores"
        },
        {
            degree: "Bachelor of Engineering",
            school: "Pune Institute of Computer Technology",
            date: "Jun 2021",
            coursework: "Statistical Analytics, Object Oriented Programming, Telecommunications, DBMS, Data Analytics"
        }
    ],
    skills: {
        languages: ["Python", "C++", "Go", "TypeScript", "Ruby", "SQL", "Postgres", "DynamoDB", "Oracle", "NoSQL", "Redshift"],
        libraries: ["Pandas", "NumPy", "SciPy", "Sklearn", "TensorFlow", "PyTorch", "Keras", "Matplotlib", "Seaborn", "AWS CDK"],
        technologies: ["Hadoop", "Hive", "Databricks", "GitHub", "PySpark", "AWS (Lambda, EC2, S3)", "Talend", "Informatica"],
        ml: ["Regression", "Random Forest", "SVM", "XGBoost", "CatBoost", "LightGBM", "Neural Networks", "MLOps"]
    },
    experience: [
        {
            role: "SDE Intern",
            company: "Amazon Web Services (AWS)",
            date: "May 2025 - Aug 2025",
            description: [
                "Automated key rotation workflows using AWS Lambda and Secrets Manager, reducing manual effort by 80%.",
                "Migrated test infrastructure from legacy systems to modern platforms, improving reliability by 30% and enabling automated validations.",
                "Implemented multi-region deployment strategies, strengthening compliance and secure data handling across 10+ regions.",
                "Partnered with cross-functional teams to optimize validation pipelines, accelerating release cycles by 25%."
            ]
        },
        {
            role: "Data warehouse/BI Developer",
            company: "Amdocs",
            date: "May 2023 - Dec 2023",
            description: [
                "Engineered data ingestion workflows from GraphQL API to HDFS, reducing data retrieval times by 30%, and implemented OAuth 2.0 authentication.",
                "Developed predictive machine learning models for customer churn analysis, achieving 85% accuracy.",
                "Leveraged Hive, Hadoop, and PySpark for efficient data manipulation, loading, and high-speed transfer to HBase."
            ]
        },
        {
            role: "Data Engineer",
            company: "Amdocs",
            date: "Aug 2021 - May 2023",
            description: [
                "Optimized ETL workflows using Python, and Linux scripting, reducing processing time by 35%.",
                "Spearheaded performance tuning and migration of 1.5 million customer records, improving system efficiency by 25%.",
                "Developed custom ETL pipelines as a solution architect, leveraging crontab for automated batch processing."
            ]
        }
    ],
    projects: [
        {
            title: "Automated Telecom Customer Churn Analysis",
            tech: "Python, Airflow, AWS Glue, Redshift, SQL, Tableau",
            description: [
                "Automated the entire ETL pipeline using Apache Airflow, enabling seamless integration of data from CSVs.",
                "Optimized model deployment on AWS for scalability and quicker predictions, leveraging services like Amazon S3 and SageMaker.",
                "Designed a user-friendly dashboard using Tableau to visualize customer trends, churn rates, and segmentation."
            ]
        },
        {
            title: "Smart Wellness Program",
            tech: "Python, Django, SQLite, Javascript, HTML, CSS",
            description: [
                "Developed the Smart Wellness Program, enhancing the record-keeping accuracy for doctors and patients by 40%.",
                "Applied strategic project management to optimize the scheduling of patient appointments, achieving a 30% improvement."
            ]
        },
        {
            title: "Bloom Filter-Aided Hash Join Optimization",
            tech: "C++, DuckDB, Data Stores, Query Optimization",
            description: [
                "Engineered and integrated a multi-level Bloom filter into DuckDB's hash join operator using C++, prefiltering 100K+ probe-side keys.",
                "Achieved up to 2.5x speedup on selective join workloads by optimizing query plan execution."
            ]
        }
    ],
    certifications: [
        "Certified in Snowflake Hands-on Essentials",
        "Advanced SQL Tuning",
        "Microsoft Undergraduate Engineering Virtual Internship Platform",
        "Linux Bash Shell and Scripts",
        "IBM Python for Data Science"
    ],
    publications: [
        "Co-authored \"Smart Wellness Program\" published in International Journal of Creative Research Thoughts (IJCRT), December 2022, Volume 10, Issue 12."
    ]
};
