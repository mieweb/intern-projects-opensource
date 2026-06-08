#  Old project ideas

[Project ideas](#project-ideas)

[Build an open source NPM for mieapi](#build-an-open-source-npm-for-mieapi)

[AR/VR Lab](#ar/vr-lab)

[Outpatient Clinical Clipboard iBeacon Patient Tracker](#outpatient-clinical-clipboard-ibeacon-patient-tracker)

[Open Source miestas](#open-source-miestash)

[Related](#related)

[Medical Informatics \- Clinical Quality Calculation](#medical-informatics---clinical-quality-calculation)

[Basic FHIR server, interacting with dev WC system](#basic-fhir-server,-interacting-with-dev-wc-system)

[Questionnaire Builder for FHIR Questionnaires](#questionnaire-builder-for-fhir-questionnaires)

[Networking Simulation and Visualization](#networking-simulation-and-visualization)

[Attention Tensor based Text Indexing and Searching](#attention-tensor-based-text-indexing-and-searching)

[AI in Medicine](#ai-in-medicine)

[OpenAI ChatGPT](#openai-chatgpt)

[Document Type Determination](#document-type-determination)

[Real Time Voice Recognition](#real-time-voice-recognition)

[Neural Network Patient Match (Demographics, Visits, etc.)](#neural-network-patient-match-\(demographics,-visits,-etc.\))

[LiveText](#livetext)

[Large Language Models in Healthcare](#large-language-models-in-healthcare)

[Smart Summaries \-](#smart-summaries--)

[Order Determination based on information in the chart](#order-determination-based-on-information-in-the-chart)

[Ambient AI](#ambient-ai)

[NLP \- GLOVE](#nlp---glove)

[HomeBridge](#homebridge)

[HL7 Message Router](#hl7-message-router)

[Develop a Browser Extension](#develop-a-browser-extension)

[UI/UX Design](#ui/ux-design)

[Automated Lab](#automated-lab)

[Multicast Video System](#multicast-video-system)

[WebChart EHR Examples](#webchart-ehr-examples)

[Door Locks](#door-locks)

[Mobile Device Integration](#mobile-device-integration)

[FHIR](#fhir)

[OpenFlexure Microscope \- Build a Microscope](#heading=h.nt3arf6h9q46)

[Cell Explorer (like Google Maps, but for life)](#cell-explorer-\(like-google-maps,-but-for-life\))

[3D Printed Cell Wall](#3d-printed-cell-wall)

[Searching Redmine](#searching-redmine)

[WikiGDrive Contribution](#wikigdrive-contribution)

# 

## **Project Overview: Revolutionize Visitor Management with Cutting-Edge Technology**

Are you ready to work on a project that combines innovation, real-world impact, and cutting-edge technology? Join us in developing a next-generation **Visitor Badging System** that will transform how we manage visitors at our facility. This is your chance to work on a high-visibility project that integrates advanced tools like **facial recognition**, **optical character recognition (OCR)**, and **contact management systems** while collaborating with industry-leading platforms like **HubSpot**.

Here’s what makes this project exciting:

* **AI-Powered Visitor Experience**: Visitors will be greeted with a seamless check-in process using facial recognition powered by Ozwell. They’ll also have the option to scan their business card or driver’s license, with all demographic data automatically extracted and processed.  
* **Smart Integrations**: You’ll work on integrating the system with our internal **Contact Management System** and [**HubSpot**](https://developers.hubspot.com/docs/guides/api/crm/objects/contacts#create-contacts), ensuring smooth data flow and eliminating [duplicate entries](https://community.hubspot.com/t5/Tips-Tricks-Best-Practices/Rule-to-prevent-duplicates/m-p/726300) for returning visitors.  
* **Badge Printing Integration**: Help design a system that prints professional visitor badges on the spot, integrating with a badge printer for a polished and secure visitor experience.  
* **Build vs. Buy Analysis**: Be part of the decision-making process by evaluating whether to build the system from scratch, buy an off-the-shelf solution like [**LobbyTrack**](https://www.lobbytrack.com/), or create a hybrid solution. Your insights will directly influence the direction of this project.  
* **Real-World Impact**: This system will streamline visitor management, enhance security, and improve operational efficiency, making a tangible difference in our day-to-day operations.

This project is perfect for an intern who is passionate about technology, loves solving complex problems, and wants to gain hands-on experience with AI, integrations, and system design. You’ll have the opportunity to collaborate with cross-functional teams, learn from experienced professionals, and leave a lasting impact on our organization.

Are you ready to take on this challenge and make your mark? Let’s build the future of visitor management together\!

Tech Stack:

* JavaScript / node.js (maybe meter.js)  
* Raspberry Pi  
* Camera  
* Ozwell.ai (vision)  
* Consider [A2A and MCP](https://www.koyeb.com/blog/a2a-and-mcp-start-of-the-ai-agent-protocol-wars#how-a2a-works-a-protocol-for-multi-agent-systems)

---

## **Build an open source NPM for mieapi** {#build-an-open-source-npm-for-mieapi}

Project Title: MIE API Integration for WebChart EHR \- Node.js npm Package Development

Project Overview:

The goal of this internship project is to develop a Node.js npm package that simplifies the integration of MIE API with WebChart EHR (Electronic Health Record) systems. This package will enable healthcare professionals and developers to seamlessly connect their applications with WebChart EHR, allowing for the exchange of critical medical data.

Currently, one needs to run the API within a browser that has been authenticated with the WebChart server:

![][mie-api-browser-auth-1]

![][mie-api-browser-auth-2]

The primary goal is to develop a [Lazy Man npm workflow](https://medium.com/@offcode/the-lazy-mans-npm-workflow-e5249b5ee8ba) for developers making their own server applications.

Project Objectives:

1. Research and Understanding: Gain a deep understanding of the WebChart EHR system, MIE API, and their integration requirements.  
2. Package Development: Create a Node.js npm package that encapsulates the necessary functions and features for interacting with the MIE API.  
3. Authentication and Security: Implement secure authentication mechanisms to ensure the confidentiality and integrity of patient data.  
4. Data Exchange: Develop methods for querying, retrieving, and updating patient data within WebChart EHR via the MIE API.  
5. Documentation: Create comprehensive documentation for the npm package, including usage guides and examples.  
6. Testing: Perform rigorous testing to ensure the package's reliability and compatibility with various versions of WebChart EHR.  
7. Community Engagement: Engage with the developer community and gather feedback to refine the package and address any issues.  
8. Publishing: Publish the npm package on the Node.js package registry for easy accessibility by other developers.

Expected Outcomes:

* A well-documented Node.js npm package that simplifies MIE API integration with WebChart EHR.  
* Improved accessibility and usability of WebChart EHR for developers and healthcare professionals.  
* A valuable resource for healthcare IT professionals aiming to enhance their EHR systems.

Timeline:

* Weeks 1-2: Research and understanding of WebChart EHR and MIE API.  
* Weeks 3-4: Package development and initial authentication implementation.  
* Weeks 5-6: Documentation and testing.  
* Weeks 7-8: Final testing, refinement, and npm package publication.

Resources:

* Access to WebChart EHR development environment.  
* Documentation and support from MIE API providers.  
* Collaboration with the healthcare IT team.

Skills Required:

* Node.js and JavaScript programming.  
* API integration and authentication.  
* Documentation and communication skills.  
* Testing and debugging.

Conclusion:

This internship project will provide valuable experience in API integration, Node.js package development, and healthcare IT. It aligns with our goal of improving healthcare data exchange and can contribute significantly to the developer community's knowledge.

## **Ozwell Integrations**

[![][ozwell-chart-narrative-demo]](https://www.youtube.com/watch?v=DmFMnef6lHg&ab_channel=WebChart)  
This video shows the product demo at the leading edge of populating data in the chart from the narrative.  
[![][ozwell-ehr-coding-data-demo]](https://youtu.be/XFhGs6fTQII)   
[Ozwell EHR Demo Coding Data](https://youtu.be/XFhGs6fTQII) 

Learn the API  
![][learn-the-api]

* Take up an Ozwell Integrations  
  * Google Drive  
    * Teams, Zoom (inbound outbound)  
    * AVR \- (inbound and outbound)  
    * GitHub tickets  
    * and much more\!

### **Possible Projects Deliveries**

* An Ozwell specific npm that is similar to the ollama API but has the specific enhancements for the workspace like visibility to billing  
* 

## **Mail server**

* Process SMTP messages with a nodejs server. Documents should be delivered into a chart using the open source web chart API.

## **Contact mobile app**

* View contacts  
* Upload new contacts  
* Upload business card  
* Interface with local app  
* Interface with calls  
* Add notes   
* Add task  
* Add company  
* Add deal  
* Caller ID api  
* Record call api  
* Activity log \- calls, emails, observations

Schedule App

* View schedule 

## **AR/VR Lab** {#ar/vr-lab}

We are excited to announce a project that aims to develop expertise in augmented and virtual reality simulation. The primary objective of this project is to provide immersive learning experiences to students while developing technical skills in controlling motors and encoders.

The project will focus on developing simulations for Chemical Interactions, Flight Simulator, and Microscope Manipulation, with a special emphasis on providing students with a real-life experience of feeling the forces of bonds. The VR/AR goggles and multiple degrees of freedom haptic device will be utilized to create a realistic and engaging learning environment.

The successful candidate will have the opportunity to work alongside experienced professionals and learn to control motors and encoders to simulate forces accurately. The internship will provide an excellent opportunity to develop skills in augmented and virtual reality and gain valuable experience in the field.

We are seeking highly motivated candidates with a strong interest in the field of augmented and virtual reality and a passion for immersive learning experiences. This internship is ideal for students looking to gain hands-on experience in the industry while also enhancing their technical skills.

[VR AR simulator Notes virtual augmented reality ](https://docs.google.com/document/d/14uBGmcPqBDJUKrIuX0iL4M6iZzmclQ68xnKry5o_w1M/edit)  
[Nanome | Virtual Reality Tools for Drug Discovery](https://www.youtube.com/watch?v=beYyi0p0L5Y&ab_channel=Nanome)

* [https://openflexure.org/projects/microscope](https://openflexure.org/projects/microscope)   
* [https://www.allencell.org/](https://www.allencell.org/)   
* [https://nanome.ai/](https://nanome.ai/) \- [https://github.com/nanome-ai](https://github.com/nanome-ai)   
* [Nanome: summer intern project](https://www.linkedin.com/posts/doug-horner-88a85bb_nanome-summer-intern-project-to-play-with-activity-7080367886128594946-NMX8?utm_source=share&utm_medium=member_desktop)   → [Video](https://www.youtube.com/shorts/JtLh6dAHr_c)   
* See Also [Cell Explorer](#cell-explorer-\(like-google-maps,-but-for-life\))  
* [https://www.instagram.com/reel/C3FVzVaCD-9/?igsh=MWd0b3dtd3RoaTd3aw==](https://www.instagram.com/reel/C3FVzVaCD-9/?igsh=MWd0b3dtd3RoaTd3aw==) 


  
---

## **Build a Telepresence System**

![][telepresence-robot-chassis][![][telepresence-andymark-chassis]](https://www.andymark.com/categories/drive-systems-bases-chassis)  
[![][telepresence-obsbot-camera]](https://www.amazon.com/OBSBOT-Multi-mode-Correction-Streaming-Conference/dp/B0C3B6ZR1V/ref=sr_1_1_sspa?dib=eyJ2IjoiMSJ9.FtxwkEf-P_A0c1jLL7S_FK5M2S-cmq-o_J4ljmgA1VRqXF3TlEFgkXQ0AKm0386EXROTOFfc4g3QJKyBnq__mr7Y3_zxtBmgUCkb_kQXasfHDDv_ESqsI2IcX8JYY1CT93inTXbuWaPLPp4NdbTzMoR_LVYbxJaos5eNRygCbQ8XEZEZ8aq1yRCxkXk8pM0Ka70YfaeM3ujbl-QIMX9CwmQUDvyUeSfHE6sCIgwsvEc.TzntTXyQO_TbbZc76ibYt80Vbuqa3fafMpj4o7PJyNI&dib_tag=se&hvadid=557245486224&hvdev=c&hvlocphy=9016342&hvnetw=g&hvqmt=e&hvrand=7672524581803273435&hvtargid=kwd-624444108443&hydadcr=9075_13503871&keywords=obsbot&qid=1709438382&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1)[![][telepresence-gopro-max-camera]](https://www.bestbuy.com/site/gopro-max-360-action-camera-black/6458602.p?skuId=6458602&extStoreId=228&utm_source=feed&ref=212&loc=20562105996&gad_source=1&gclid=CjwKCAiAuYuvBhApEiwAzq_YiX6npHkQWurGXR-a-TGDqx5tOBUzNu_EblFxNIVRTsmYkngFBUj3TBoCpHEQAvD_BwE&gclsrc=aw.ds)[![][telepresence-insta360-camera]](https://www.amazon.com/insta360-Waterproof-Single-Lens-Stabilization-Touchscreen/dp/B0B9H572LC/ref=asc_df_B0B9H572LC/?tag=hyprod-20&linkCode=df0&hvadid=598358753210&hvpos=&hvnetw=g&hvrand=10429136789262676586&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9016342&hvtargid=pla-1751375753683&mcid=41bdf139075c3eb795d1d91fd4549f67&gclid=CjwKCAiAuYuvBhApEiwAzq_YiRm1zrAswNzqzZtoV40IwnLXZxIoM13Xy1VNNNtBnJAUBTdArQ8XhBoCduEQAvD_BwE&th=1)![][telepresence-system]

The objective of this project is to design and develop an advanced telepresence robot utilizing the Robotics First platform, Apple Vision Pro, and a state-of-the-art 3D camera. Leveraging cutting-edge technology, the robot will offer unparalleled spatial awareness, facial and gesture recognition, and augmented reality features, making remote presence more engaging and realistic.  
[Insta360 X3 VS GoPro MAX Side By Side: NO CONTEST\!](https://www.youtube.com/watch?v=PL1l8kMUZ8o)

## **Video Streamer**

Develop a [shorts server](https://en.wikipedia.org/wiki/Short_film) as a capstone project that integrates a variety of modern technologies. This project involves using [Video.js](https://videojs.com/) or a similar library for front-end video playback, coupled with [Node.js](https://nodejs.org/en/) or [Meteor](https://www.meteor.com/) on the back end to handle server-side logic. You will also work with [FFmpeg](https://ffmpeg.org/) to process and transcode videos, ensuring support for multiple formats and adaptive bitrate streaming. Additionally, the project will incorporate various JavaScript libraries and frameworks to manage real-time user interactions, and [Docker](https://www.docker.com/) will be used to containerize the application for consistent deployment in a [Linux](https://www.linux.org/) environment. This comprehensive project offers hands-on experience with full-stack development, media processing, and modern deployment practices, making it a valuable opportunity to apply and extend your technical skills.

## **Outpatient Clinical Clipboard iBeacon Patient Tracker** {#outpatient-clinical-clipboard-ibeacon-patient-tracker}

The project to improve patient tracking using wireless beacons involves implementing a system that can track the location of patients in a healthcare facility. The system will utilize wireless beacons that communicate with a patient's wristband or other wearable device, allowing healthcare staff to automatically update the electronic health record (EHR) with the patient's location as they move throughout the clinic.  
![][ibeacon-patient-tracker]  
The first step in implementing this system would be to install the wireless beacons in key locations throughout the healthcare facility. These beacons would communicate with the wearable devices worn by patients, transmitting data about their location to a central system.

Next, a software system would be developed that could integrate with the EHR and receive location data from the wireless beacons. The software would be designed to automatically update the patient's location in the EHR as they move from one area of the clinic to another, eliminating the need for manual updates by healthcare staff.

To ensure accuracy and reliability of the system, rigorous testing and validation would be performed. The system would be tested in a controlled environment, with patients wearing the wearable devices and moving throughout the clinic. The data collected during testing would be analyzed to identify any issues or areas for improvement.

Finally, the system would be deployed in the healthcare facility, with training provided to healthcare staff to ensure they understand how to use the new system. Ongoing support and maintenance would be provided to ensure the system continues to function properly.

Overall, implementing a wireless beacon system to track patient location would greatly improve the efficiency of healthcare staff, eliminate the need for manual updates to the EHR, and provide valuable data insights into patient flow and resource utilization within the healthcare facility.

Technology

* Bluetooth and Low Energy (BTLE)  
* Ultrawideband (UWB)  
* Arduino and raspberry pi  
* Networking (TCP/IP)  
* NodeJS, Python  
* MongoDB, MySQL

[Outpatient Clinical Clipboard iBeacon Project Charter tricorder transcorder](https://docs.google.com/document/d/19EiFy0GaaqDuJCCYm1_GGhUKEh9uCkzl7ZUf5rq086g/edit)

---

## **Node LDAP server**

Make an [LDAP](https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol) gateway server (in [ldapjs](http://ldapjs.org/)) that connects to a [mysql](https://mariadb.com/kb/en/getting-started-with-the-nodejs-connector/) server to validate a user  
![][ldap-mysql-gateway]  
The server should be able to relay to a [windows domain controller](https://stackoverflow.com/questions/18970127/active-directory-authentication-with-ldap-js) to check the password or run locally. It should also support 2FA include YubiKey, Google or Microsoft Authenticator by entering the code in the password (last 6 digits being the OTP).  Lastly, we could support push notifications to an app.  
[ldap server with mysql backend · GitHub](https://gist.github.com/bekce/21d68df667f3454892c9bc30ecc237ec)

## **SSH in a website to a container**

This project aims to create a dynamic and efficient system for remote container management using a Meteor.js application integrated with xterm.js. The first objective is to research and evaluate existing solutions in the field, comparing their features, scalability, and user experience with the proposed implementation. The comparison will inform potential improvements and unique value propositions for this project. 

This project aims to create a dynamic and efficient system for remote container management using a Meteor.js application integrated with xterm.js. Key requirements include:

1. **Encapsulation on Demand**: The system should dynamically create isolated containers on user request.  
2. **Session Persistence**: Users must be able to reconnect to their previously initiated containers seamlessly.  
3. **Container Lifecycle Management**: The system should handle container creation, runtime, and proper termination.  
4. **Load Balancing**: Efficiently distribute container workload across available resources to optimize performance.  
5. **Failure Handling**: Implement mechanisms to identify and terminate unresponsive or "stuck" containers to maintain system stability.  
6. **Resource Usage Tracking (Bonus)**: Provide users with detailed insights into their CPU and I/O usage within the container environment.

This combination ensures a scalable, resilient, and user-centric platform for managing containerized processes.

### **Suggested Projects to Investigate:**

1. **Docker Desktop**: Examine how it provides a user-friendly interface for managing containers and its handling of lifecycle and resource usage.  
2. **Kubernetes Dashboard**: Explore its approach to container orchestration, load balancing, and monitoring in large-scale deployments.  
3. **Portainer**: Analyze this lightweight container management solution for its user interface, simplicity, and integration capabilities.  
4. **Code Server (VS Code in Browser)**: Investigate its implementation for running persistent development environments in containers and reconnecting to sessions.  
5. **WebSSH**: Study this web-based SSH tool's integration with remote systems and its handling of session persistence.  
6. **Guacamole Project**: Assess this remote desktop gateway's handling of web-based access and lifecycle management for remote connections.

These projects provide a foundation for understanding existing approaches to containerized systems and web-based terminal interfaces, helping to identify gaps and opportunities for differentiation.

[https://xtermjs.org/](https://xtermjs.org/)

## **Enabling NoSQL-Like Behavior for Missing Columns in MariaDB**

### **Background & Motivation**

#### **Current SQL Behavior**

In standard MariaDB/MySQL, querying a non-existent column (e.g., `SELECT missing_col FROM table`) results in an error (`ER_BAD_FIELD_ERROR`). This behavior aligns with SQL’s strict schema enforcement.

#### **Desired “NoSQL-Like” Behavior**

The goal is to enable queries against columns that may or may not exist—similar to MongoDB or other document-oriented databases—where missing fields return `NULL` instead of causing an error. This approach allows for more flexible schema evolution and supports queries across different schema versions without requiring special handling.

#### **Why Not Use JSON Columns?**

While JSON columns allow flexible data storage and return `NULL` for missing keys by default, the requirement here is to reference columns by name in SQL and seamlessly return `NULL` for non-existent columns.

---

### **Project Scope**

#### **Investigate MariaDB’s Name-Resolution Logic**

* Analyze how the server resolves column references to `Field` objects.  
* Identify functions like `find_field_in_table()` and understand how `ER_BAD_FIELD_ERROR` is raised.

#### **Create a “Fake NULL Field” Mechanism**

* Implement a helper function (e.g., `create_fake_null_field()`) that generates a synthetic field always yielding `NULL`.  
* Replace the error call with this helper to allow queries to continue without crashing.  
* Ensure the new field is recognized at runtime (read operations) without causing memory or index-out-of-bounds issues.

#### **Handle Edge Cases**

* **WHERE Clauses**: Ensure missing columns evaluate to `NULL`, which typically yields `FALSE` in conditionals.  
* **GROUP BY / ORDER BY**: Handle sorting or grouping by `NULL` for missing columns.  
* **INSERT/UPDATE**: Decide how to handle writes referencing missing columns (e.g., raise an error or silently ignore).

#### **Testing & Validation**

* Develop unit and integration tests to verify the modified server behaves as expected.  
* Ensure standard queries on existing columns remain unaffected.  
* Address corner cases, such as `SELECT *` expansions and joins involving missing columns.

#### **Documentation**

* Document the patch, including its rationale, usage scenarios, and known limitations.  
* Provide instructions for building MariaDB from source with the patch applied.

---

### **Deliverables**

#### **Patched Source Code**

* A working fork of the MariaDB server (or a specific patch file) implementing the “fake null field” concept.  
* Code should compile and execute basic queries successfully in a test environment.

#### **Testing Suite**

* SQL tests demonstrating behavior with existing columns, missing columns, and edge cases.  
* Validation that queries return `NULL` instead of errors for missing columns.

#### **Documentation & Presentation**

* A concise report detailing the changes made, their location in the codebase, and instructions for future maintainers to merge these changes into new MariaDB releases.  
* Explanation of trade-offs, including:  
  * No more errors on typos.  
  * Potential performance and maintenance implications.

#### **Suggested Next Steps**

* Recommendations on whether to adopt or maintain this patch long-term.  
* Alternative approaches (e.g., JSON columns, EAV models, or dynamic SQL checks) and their suitability for different scenarios.

## **Open Source miestash** {#open-source-miestash}

Open Source miestash as a HTTP server in C that can evaluate Mustache templates (miestache) against a MariaDB database is a complex project that requires several different skills. Here is a basic outline of the project, along with the required skills:

* Design and implement the HTTP server. You will need to design the server architecture, handle incoming connections, parse incoming HTTP requests, and generate appropriate responses. You will want to consider using a library to simplify some aspects of the HTTP protocol.  
* Connect to the MariaDB database. You will need to use a library like MariaDB Connector/C to connect to the database, send queries, and receive results.   
* Parse and evaluate Mustache templates. You will need to use MIE's library parse Mustache templates and generate output. You will need to create a custom data context for each template, based on the data retrieved from the database.  
* Integrate the components. You will need to integrate the HTTP server, MariaDB connector, and MIEstache together, to create a cohesive application that can handle incoming HTTP requests, retrieve data from the database, and generate appropriate responses.

Example:  index.stache

| `{{#each [SELECT pat_id, last_name, first_name, dob           FROM patients]}}        <li>Name: {{last_name}}, {{first_name}} - {{dob}}</li>       <ul>          {{#each [SELECT doc_id, subject, service_date                    FROM documents WHERE pat_id={{pat_id}} ]}}       <li>{{doc_id}} - {{subject}} {{service_date}}</li>          {{/each}}       <ul> {{/each}}` |
| :---- |

## 

Skills required for this project:

* C programming: You will need strong programming skills in C, including knowledge of data structures, algorithms, memory management, and debugging.  
* Networking: You will need a good understanding of network programming, including socket programming, TCP/IP protocol, and HTTP protocol.  
* Database programming: You will need to be comfortable working with relational databases, designing schemas, writing SQL queries, and working with database APIs.  
* Mustache templating: You will need to have experience working with Mustache templates, or similar templating engines.  
* Integration skills: You will need to be able to integrate different libraries and components together, and troubleshoot any issues that arise.

Overall, this project will require a significant amount of time, effort, and expertise. However, if you have the required skills and are willing to put in the work, it can be a rewarding and educational project that demonstrates your proficiency in several areas of computer science and get your code on GitHub.

#### **Related** {#related}

* [https://github.com/OlafvdSpek/ctemplate/](https://github.com/OlafvdSpek/ctemplate/)  
* [https://github.com/janl/mustache.js\#custom-delimiters](https://github.com/janl/mustache.js#custom-delimiters)

## **Medical Informatics \- Clinical Quality Calculation** {#medical-informatics---clinical-quality-calculation}

eCQMs stands for "Electronic Clinical Quality Measures". [eCQMs are digital representations of quality measures](https://ecqi.healthit.gov/ep-ec?qt-tabs_ep=1) that are used to assess the performance of healthcare providers and organizations in delivering high-quality patient care. eCQMs are calculated using clinical data that is extracted from electronic health record (EHR) systems, making it possible to automate the process of quality measurement and reporting.

eCQMs are defined using clinical quality measures (CQMs), which are evidence-based metrics that are used to assess the quality of healthcare services. CQMs are developed by various organizations, including the [National Quality Forum](https://www.qualityforum.org/Home.aspx) (NQF), the Agency for Healthcare Research and Quality (AHRQ), and the Centers for Medicare and Medicaid Services (CMS).

URLs:

* [https://ecqi.healthit.gov/qrda](https://ecqi.healthit.gov/qrda)   
  * [https://ecqi.healthit.gov/ep-ec?qt-tabs\_ep=1](https://ecqi.healthit.gov/ep-ec?qt-tabs_ep=1)   
  * Example measure: [https://ecqi.healthit.gov/sites/default/files/ecqm/measures/CMS177v10.html](https://ecqi.healthit.gov/sites/default/files/ecqm/measures/CMS177v10.html)

* VSCode plugin for CQL: [Clinical Quality Language (CQL) \- Visual Studio](https://marketplace.visualstudio.com/items?itemName=cqframework.cql)  
* Specification  \- [https://cql.hl7.org/](https://cql.hl7.org/)   
* **Education** \- [https://ecqi.healthit.gov/cql?qt-tabs\_cql=2](https://ecqi.healthit.gov/cql?qt-tabs_cql=2)   
* Community Projects: [GitHub CQ Framework](https://github.com/cqframework/clinical_quality_language/wiki/Community-Projects)   
* Zulip Stream [https://chat.fhir.org/\#narrow/stream/179220-cql](https://chat.fhir.org/#narrow/stream/179220-cql)   
* Walkthrough [https://github.com/cqframework/content-ig-walkthrough](https://github.com/cqframework/content-ig-walkthrough)   
* CQL Runner [https://cql-runner.dataphoria.org](https://cql-runner.dataphoria.org)   
* Slides: From DevDays: [Applying Logic to FHIR with Clinical Quality Language (CQL)](https://www.devdays.com/wp-content/uploads/2020/12/svpaq_201118_BrynRhodes_ApplyingLogicToFHIRWithCQL_BR.pdf)

## **Basic FHIR server, interacting with dev WC system** {#basic-fhir-server,-interacting-with-dev-wc-system}

* [Fast Healthcare Interoperability Resources (FHIR) - 5 Minute Intro](https://youtu.be/x7cUViknpCg?si=JCwy7lxcSajDvTIG)([https://pm.mieweb.com/projects/fhir/wiki](https://pm.mieweb.com/projects/fhir/wiki) )  
* [https://www.hl7.org/fhir/](https://www.hl7.org/fhir/) 

## **Create Webchart System to Operate as “FHIR App” to Generate Synthetic Patient Charts**

* [Proposal for Intern Project: Web Chart System with Synthea Integration for FHIR connectivity](https://docs.google.com/document/d/1Nw1xwvblD20IxkvMvgt7HnZ2ZXOHmAShgHYC8SRabbU)  
* The proposed intern project involves deploying a live Webchart system integrated with Synthea, an open-source tool for generating synthetic patient data. This system will simplify testing processes and enhance FHIR connectivity metrics for reporting. The project aligns with organizational goals by improving efficiency, boosting certification reporting capabilities, and fostering innovation.

## **Questionnaire Builder for FHIR Questionnaires** {#questionnaire-builder-for-fhir-questionnaires}

Develop a JavaScript client side editor (run in the browser) to develop questionnaires:  
[https://www.hl7.org/fhir/questionnaire.html](https://www.hl7.org/fhir/questionnaire.html)  
[Fast Healthcare Interoperability Resources (FHIR) - 5 Minute Intro](https://youtu.be/x7cUViknpCg?si=JCwy7lxcSajDvTIG)

Consider using something like:

* [https://github.com/helsenorge/refero](https://github.com/helsenorge/refero)   
* [https://github.com/helsenorge/structor](https://github.com/helsenorge/structor)   
  * [https://static.helsenorge.no/static\_skjemabygger/](https://static.helsenorge.no/static_skjemabygger/)   
* [https://editorjs.io/](https://editorjs.io/)   
* [https://github.com/kevinchappell/formBuilder](https://github.com/kevinchappell/formBuilder)

Internal Ticket: [https://pm.mieweb.com/issues/106574](https://pm.mieweb.com/issues/106574)

Read the discussion about observations and Questionnaire Responses:  
[https://chat.fhir.org/\#narrow/streams/public/search/observation.20.2B.20questionnaireresponse](https://chat.fhir.org/#narrow/streams/public/search/observation.20.2B.20questionnaireresponse)

## **Allen Institute brain atlas**

[https://x.com/alleninstitute/status/1793052830837690477?s=46\&t=Nrb40zgeTy3McpG5BwaOAQ](https://x.com/alleninstitute/status/1793052830837690477?s=46&t=Nrb40zgeTy3McpG5BwaOAQ)   
![][allen-brain-atlas-1]![][allen-brain-atlas-2]  
**Types of questions you can answer using the ABC Atlas:**  
[![][abc-atlas-questions-video]](https://www.youtube.com/watch?v=HBD-rAqBJCw)  
Allen Institute’s YouTube Channel (Main & specific videos)

* [https://youtube.com/@alleninstitute?si=cCtxhTIByZVY6Se0](https://youtube.com/@alleninstitute?si=cCtxhTIByZVY6Se0)   
* [Brain Basics | Excitatory Neurons](https://youtu.be/zIoky_TaOy8?si=6idyYHfhYq2Y_UBG)  
* [Brain Fest | Inhibitory Neurons](https://youtu.be/Pr6xPKu6k-M?si=w_ZKfdYy_2s7nqT2)  
* [Brain Basics | Glia](https://youtu.be/GotdGM81x4A?si=nX-3eN_pMKga-ACC)  
* [Cell Type Taxonomies A to Z  Cross Species Cell Types](https://youtu.be/eP0K0Dl12rk?si=fR5X0Cshljs8Bw5i)[Seattle Hub for Synthetic Biology launch event & fireside chat](https://youtu.be/-sXGRhqwirw?si=uiHVFqotpJEE3SOD)  
* [At Allen Institute](https://youtu.be/kRGU42lyktM?si=A9YwhzyzOPR9FJZy)

## **Networking Simulation and Visualization** {#networking-simulation-and-visualization}

* Evaluate a Network simulator [li h st of open-source network simulators and network emulators that run on Linux or BSD.](https://www.brianlinkletter.com/open-source-network-simulators/)  
* and couple it to [A netbox plugin that draws topology views](https://github.com/mattieserver/netbox-topology-views)  
* Check out [Cisco Packet Tracer \- Networking Simulation Tool](https://www.netacad.com/courses/packet-tracer) 

## 

## **Attention Tensor based Text Indexing and Searching** {#attention-tensor-based-text-indexing-and-searching}

Problem: Improve text searching  [Search often sucks](https://dev.mysql.com/doc/refman/8.0/en/table-scan-avoidance.html).  Databases that have [FULLTEXT](https://mariadb.com/kb/en/full-text-index-overview/) index improve the results, but they still have [painful limitations](https://lobste.rs/s/p12ocv/don_t_waste_your_time_with_mysql_full_text).  [Inverted Indexing](https://www.geeksforgeeks.org/inverted-index/) is a storage hungry approach to pre-compute words/tokens.

Goal: It would be nice to issue a query to find related patients and documents.  Examples: "Find patients that have CHF and where on Spironolactone who stopped due to an intolerance".

Background:

* [Query Text with Data Science](https://medium.com/@braytonhall/different-approaches-to-querying-text-with-data-science-35970c3397e2)

  Google relies on a state-of-the-art, pre-trained neural network known as BERT. It stands for ‘Bidirectional Encoder Representations from Transformers’

* [Speeding up BERT Search in Elasticsearch | by Dmitry Kan | Towards Data Science](https://towardsdatascience.com/speeding-up-bert-search-in-elasticsearch-750f1f34f455)  
* [GitHub \- spotify/annoy: Approximate Nearest Neighbors in C++/Python optimized for memory usage and loading/saving to disk](https://github.com/spotify/annoy)  
* Using [Cosine Similarity \- an overview | ScienceDirect Topics](https://www.sciencedirect.com/topics/computer-science/cosine-similarity) to find related documents  
* [https://github.com/facebookresearch/faiss](https://github.com/facebookresearch/faiss)

Ideas:  Indexing documents / patient summaries with [pretrained Tensors](https://www.tensorflow.org/lite/models/modify/model_maker/text_searcher), or [SentencePiece tokenizer](https://github.com/google/sentencepiece) so that example documents/patients could be found quickly.  Develop novel ways of indexing objects to make statement based searching efficient.  If [Table Scans](https://dev.mysql.com/doc/refman/8.0/en/table-scan-avoidance.html) need to be performed, build indexes on the fly for the common questions so future table scans can be avoided.  Note: [Why is Euclidean distance not a good metric in high dimensions? \- Cross Validated](https://stats.stackexchange.com/questions/99171/why-is-euclidean-distance-not-a-good-metric-in-high-dimensions) 

## **AI in Medicine** {#ai-in-medicine}

### **AI fundamentals**

[3Blue1Brown Neural Networks Series](https://youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi&si=mJsbSS8MIbaq3241)   
Make sure you are familiar with most or all of the concepts in this playlist: [https://youtube.com/playlist?list=PLuIoQNgtU5vq1tJWHngx91N5ndkHpT2Mg](https://youtube.com/playlist?list=PLuIoQNgtU5vq1tJWHngx91N5ndkHpT2Mg) 

[AI Notes](https://docs.google.com/document/d/1KBU4TXbUVOZkj2HsWL4ZwQFgx1VR4QO6NOZFgifEbf8/edit) [AI Talk](https://docs.google.com/presentation/d/12d7oqvzYA9NV9YdT90NcleufclCoe4HqbBB5j6Xt2CI/edit#slide=id.g2421bdd9737_0_132)  
There are multiple sub-projects from which to choose.  MIE has invested in its own hardware for training and testing neural networks.

Server Specs  
![][ai-server-specs]![][ai-server-tesla-v100]x4 Tesla V100

### **OpenAI ChatGPT** {#openai-chatgpt}

* [https://platform.openai.com/docs/guides/fine-tuning](https://platform.openai.com/docs/guides/fine-tuning) for our [WebChart Documentation](https://docs.webchartnow.com) and [EnterpriseHealth Documentation](https://docs.enterprisehealth.com)

### **Document Type Determination** {#document-type-determination}

We should be using a few shot or one shot approach to training. By building a network that determines if two images are similar we would be able to add new documents without having to train. If a new form comes along we just have to add it to the library and the network will tell us which form it’s “closest” to. See [Few Shot Learning - EXPLAINED\!](https://youtu.be/VqPmrYFvKf8)   
[https://blog.roboflow.com/best-ocr-models-text-recognition/](https://blog.roboflow.com/best-ocr-models-text-recognition/) 

### **Real Time Voice Recognition** {#real-time-voice-recognition}

[NVIDIA Accelerates Real Time Speech to Text Transcription 3500x with Kaldi | NVIDIA Developer Blog](https://developer.nvidia.com/blog/nvidia-accelerates-speech-text-transcription-3500x-kaldi/)

### **Neural Network Patient Match (Demographics, Visits, etc.)** {#neural-network-patient-match-(demographics,-visits,-etc.)}

	[HMNI: Fuzzy Name Matching with Machine Learning | Towards Data Science](https://towardsdatascience.com/fuzzy-name-matching-with-machine-learning-f09895dce7b4)

Load a template.  Train a neural network to assign a multi-dimensional vector for the data  
Name: {{last}}, {{first}} {{middle}}  
Address:  
{{address1}} {{address2}} {{address3}}  
{{city}}, {{state}}, {{zip}}

Appointments:{{\#each appointment.date}}  
Service Dates: {{\#each documents.date}}

### **LiveText** {#livetext}

* [https://blog.roboflow.com/best-ocr-models-text-recognition/](https://blog.roboflow.com/best-ocr-models-text-recognition/)   
* [Tesseract Open Source OCR Engine (main repository)](https://github.com/tesseract-ocr/tesseract) \-  Text extraction from images ([similar to what Apple does on M1](https://www.youtube.com/watch?v=hL5HJKQNPQQ)) but server side so when performing a MATCH AGAINST search in the chart, words found in scanned images will be searchable.  
* Consider using [Tesseract.js](https://tesseract.projectnaptha.com), [an emscripten port](https://github.com/naptha/tesseract.js#tesseractjs) for in-browser indexing.  eg: cut/paste can work within an image to extract lab results, patient name, etc for auto-indexing.

### **Large Language Models in Healthcare** {#large-language-models-in-healthcare}

* [Foundation models for generalist medical artificial intelligence | Nature](https://www.nature.com/articles/s41586-023-05881-4)  
  * [Published: 12 April 2023](https://www.nature.com/articles/s41586-023-05881-4#article-info) \- Stanford \- Michael Moor, Oishi Banerjee, Zahra Shakeri Hossein Abad, Harlan M. Krumholz, Jure Leskovec, Eric J. Topol & Pranav Rajpurkar  
* Nature: [A large language model for electronic health records | npj Digital Medicine](https://www.nature.com/articles/s41746-022-00742-2#ref-CR42)   
* [A study of deep learning methods for de-identification of clinical notes in cross-institute settings | BMC Medical Informatics and Decision Making](https://bmcmedinformdecismak.biomedcentral.com/articles/10.1186/s12911-019-0935-4)

#### **Smart Summaries \-**  {#smart-summaries--}

* Using open AI and GPT3 to summarize the medical record for a busy physician pulling out the most important details specifically for the visit and speciality.  
* Demo: [Video](https://youtu.be/o91i46gQ6ew&ts=26:13), [Slides](https://docs.google.com/presentation/d/1CPMC74-YEIudnoyCBhZ7xbcgj9If1EADKL2tgYxovIc/edit)

#### **Order Determination based on information in the chart** {#order-determination-based-on-information-in-the-chart}

Using a Transformer Neural Network to make order predictions based on the medical summary (SOAP) as well as documents in a chart.  Possible Orders that the provider would want to make should be ranked based on the vector distance (instead of frequency).  If the provider uses a different order than predicted, the network should learn and attempt to predict better next time.

#### **Ambient AI** {#ambient-ai}

Full capture: [Communication Skills: A Patient-Centered Approach](https://youtu.be/S4wWClQhZaA)   
Dictation while with patient [Dictating Your Notes During the Patient Visit](https://youtu.be/KGHEdv0XGpE)   
Nuance Teams: [Nuance Dragon Ambient eXperience for Microsoft Teams](https://youtu.be/qm1PSXXEYLw)

### **NLP \- GLOVE** {#nlp---glove}

This is an awesome article on using word association to build NLP maps. This is a pre trained map of words to vectors (50-300 dimensions\!) to code words in sentences. [https://nlp.stanford.edu/projects/glove/](https://nlp.stanford.edu/projects/glove/)  
[Transformer Neural Networks - EXPLAINED\! (Attention is all you need)](https://youtu.be/TQQlZhbC5ps)

	What can GPT/NLP do?

* Vec2Text [Text Embeddings Reveal (Almost) As Much As Text](https://youtu.be/FY5j3P9tCeA?si=Yk85xbUIdbVw7ufz)   
* General:[GPT-3 Demo: New AI Algorithm Changes How We Interact With Technology](https://www.youtube.com/watch?v=8V20HkoiNtc)   
* Programming: [The Truth about Github Copilot // AI Programming First Look](https://www.youtube.com/watch?v=4duqI8WyfqE) 

### 

---

## **HomeBridge** {#homebridge}

* Setup a Homebridge \- [https://homebridge.io/](https://homebridge.io/)  
* Use [https://nodered.org/](https://nodered.org/) to route message between devices

## **HL7 Message Router** {#hl7-message-router}

* Use [https://nodered.org/](https://nodered.org/) to route message between devices  
* [https://flows.nodered.org/flow/32a192715892a2d0f842bbfd23ea5ed6](https://flows.nodered.org/flow/32a192715892a2d0f842bbfd23ea5ed6)

## **Develop a Browser Extension** {#develop-a-browser-extension}

Using [https://developer.chrome.com/docs/extensions/mv3/intro/](https://developer.chrome.com/docs/extensions/mv3/intro/) build and extension that enables DataVis to take over tables in HTML pages.

## **UI/UX Design** {#ui/ux-design}

Use CSS and HTML reformat the UI of DataVis, a data grid tool that allows users to group and pivot data for analysis  
![][datavis-ui]

## 

## **Automated Lab** {#automated-lab}

There are many ways to contribute to the automated lab. 

* One of which can be creating an [automated liquid handler](https://www.aurorabiomed.com/beginners-guide-to-understanding-automated-liquid-handling/#:~:text=Automated%20liquid%20handling%20equipment%20can,sample%20to%20a%20designated%20container.) to accomplish various laborious tasks in the laboratory. (detailed below)  
* Another could be developing software to automatically track organisms on the microscope. (detailed below)  
* Or pick your own\! Here are some helpful/informational links to inspire a different project idea  
  * [Playlist of Videos](https://youtube.com/playlist?list=PLl3ex3ZJMXhokwP_qvwGe2y2y7gRtW_0R)   
  * [Presentation on bioinformatics to university of St. Francis 2023](https://youtu.be/db4Jf7IIr54)   
  * [Biology is Just Nanobots - iGEM Primer](https://docs.google.com/presentation/d/1IvZTHqSavk-hiJJ1rbjTSDYOvc2V8AxCPOnz0gk-USo/edit#slide=id.g15754987be5_0_336)  
  * See [OpenFlexure Microscope \- Build a Microscope](#heading=h.nt3arf6h9q46)  
  * HHMI [Microscopes | Janelia Research Campus](https://www.janelia.org/lab/keller-lab/microscopes)  
    * [Raghav Chhetri & Philipp Keller introduce the IsoView Light-Sheet Microscope](https://www.youtube.com/watch?v=qv4XzGSl-RM)  
  * [Flashes of Insight: Whole-Brain Imaging of Neural Activity in the Zebrafish](https://www.youtube.com/watch?v=eKkaYDTOauQ)  
  * [How Neural Circuits Form in a Developing Embryo | Janelia Research Campus](https://www.janelia.org/news/how-neural-circuits-form-in-a-developing-embryo)  
* ![][automated-lab-opulo][![][opulo-pick-and-place]](https://www.opulo.io/)

* ## **![][liquid-handler-heading-1]![][liquid-handler-heading-2]**

### **Design and Build an Automated Liquid Handler**

In modern biological laboratories, liquid handling tasks such as pipetting, mixing, and dispensing are frequent, repetitive, and critical to experimental success. Manual handling can introduce variability, human error, and contamination, which affect the accuracy and reproducibility of experiments. Automated liquid handlers solve these problems by increasing precision, throughput, and safety while freeing researchers to focus on higher-level tasks.

In this project, you will explore the principles behind these devices and design and build your own prototype of an automated liquid handler. This system will be tailored for common lab applications such as PCR/qPCR setup, nucleic acid extraction, NGS library preparation, serial dilutions, and reagent preparation.

**Tasks**

1. **Research & Planning**  
* Investigate different types of automated liquid handlers (e.g., OT-2, Hamilton, planar motor-based systems)  
* Identify key design components: pipetting mechanism, motion system, software interface  
* Choose a design model: moving pipette head vs. moving sample platform  
2. **Design Phase**  
* Create mechanical and/or CAD drawings of your system  
* Plan out electronic components, control logic, and fluid handling features  
3. **Prototyping & Construction**  
* Assemble mechanical and electronic components  
* Program motor movements and pipetting sequences  
4. **Testing & Optimization**  
* Test the system’s accuracy and repeatability  
* Troubleshoot and optimize fluid handling workflows  
5. **Documentation & Presentation**  
* Create a user manual or instruction set  
* Present your design rationale, challenges, and demonstration of functionality

**Technologies Used:**

* Microcontrollers (e.g., Arduino, Raspberry Pi)  
* Stepper or servo motors and motor drivers  
* 3D printing or laser cutting for custom parts  
* Sensors (e.g., limit switches, liquid level sensors)  
* Programming languages (Python, C/C++)  
* Basic fluidics and pipetting systems  
* Blue Sky Robotic arms, if needed

**Outcomes**

By the end of the project, you will have a functioning prototype of an automated liquid handler capable of performing simple lab tasks with accuracy and repeatability. You will gain hands-on experience with mechanical design, programming, electronics, and lab automation technologies, and contribute to building tools that can enhance the efficiency of real-world research workflows.

### **Integrating SAMURAI with WormLab for Enhanced *C. elegans* Behavioral Analysis**

This project aims to develop a novel system for *C. elegans* research by integrating the SAMURAI visual object tracker with the WormLab behavioral analysis platform. The project will leverage SAMURAI's real-time, zero-shot tracking capabilities to automate the process of tracking individual worms, while WormLab's comprehensive analysis tools will be used to quantify and analyze their behavior in detail. This integration has the potential to revolutionize *C. elegans* research by automating laborious tracking tasks and unlocking new insights into behavior.

Tasks

1. **Evaluate SAMURAI's Performance in Tracking *C. elegans***: Assess the accuracy and robustness of SAMURAI in tracking individual worms under different experimental conditions, such as varying worm densities, movement patterns, and imaging conditions. This task will involve:  
   * **Data Acquisition:** Acquire video recordings of *C. elegans* using a suitable imaging system.  
   * **SAMURAI Implementation:** Implement SAMURAI for real-time tracking of individual worms in the acquired videos.  
   * **Performance Evaluation:** Quantitatively evaluate SAMURAI's tracking performance using metrics such as tracking accuracy, precision, and robustness to occlusions and complex movements.  
2. **Develop a Seamless Integration Between SAMURAI and WormLab:** Design and implement a system that allows the tracking data from SAMURAI to be directly imported and analyzed within WormLab. This task will involve:  
   * **Data Format Compatibility:** Ensure compatibility between the data formats used by SAMURAI and WormLab.  
   * **Data Transfer Mechanism:** Develop a robust mechanism for transferring tracking data from SAMURAI to WormLab in real-time or near real-time.  
   * **Workflow Integration:** Integrate SAMURAI's tracking functionality into WormLab's existing workflow for a seamless user experience.  
3. **Explore Enhanced Behavioral Analysis Using SAMURAI's Motion-Aware Memory:** Investigate the potential of SAMURAI's motion-aware memory to provide more nuanced insights into *C. elegans* behavior. This task will involve:  
   * **Behavior Quantification:** Use WormLab's analysis tools to quantify specific behaviors of interest, such as locomotion patterns, speed, direction, and interactions between worms.  
   * **Motion Pattern Analysis:** Analyze the movement patterns of individual worms and groups of worms using SAMURAI's motion-aware memory to identify subtle changes or anomalies.  
   * **Stimulus-Response Correlation:** In experiments involving stimuli like optogenetics or mechanosensation, correlate the observed behaviors with the applied stimuli to understand their impact on worm behavior.  
4. **Optimize System Performance for Efficiency and Scalability:** Address the computational demands of real-time tracking and analysis, particularly for experiments involving multiple worms or high-resolution videos. This task will involve:  
   * **Algorithm Optimization:** Optimize the algorithms used by SAMURAI and WormLab for efficient performance.  
   * **Parallel Processing:** Explore the use of parallel processing techniques to distribute the computational workload across multiple cores or processors.  
   * **Cloud Computing:** Consider leveraging cloud computing resources to handle the processing demands of large datasets or complex analyses.

Outcomes

1. **A Validated SAMURAI-Based Tracking System for *C. elegans***: A robust and accurate tracking system that leverages SAMURAI's capabilities to automate worm tracking in diverse experimental conditions.  
2. **A Seamlessly Integrated Platform for *C. elegans* Behavioral Analysis**: A user-friendly platform that combines SAMURAI's tracking with WormLab's analysis tools for comprehensive behavioral studies.  
3. **Novel Insights into *C. elegans* Behavior**: Deeper understanding of *C. elegans* behavior through the analysis of detailed movement patterns and the correlation of behavior with stimuli.  
4. **An Efficient and Scalable System for High-Throughput Analysis:** A system optimized for efficient performance and scalability, enabling the analysis of large datasets and complex experiments.

References

* Yang, C.-Y., Huang, H.-W., Chai, W., Jiang, Z., & Hwang, J.-N. (2024). SAMURAI: Adapting Segment Anything Model for Zero-Shot Visual Tracking with Motion-Aware Memory. *arXiv*.  
* MBF Bioscience. (2024). WormLab®.  
* https://github.com/knaticat/Deep-Worm-Tracker

## 

## **Multicast Video System**  {#multicast-video-system}

Problem/Need: The ability to display video content on any display in the office.  The office has 20+ video TVs scattered around the office.  Automating them to turn off and on and tune to specific content is needed.

Use Cases:   
1\) The ability to point to a tv and "tune" in a video stream.  There would be streams for education, network status, news, visitor welcome etc.  
2\) Attend a web conference from the conference room from any room at electric works

Check out: [https://withrow.io/simpsons-tv-build-guide-waveshare](https://withrow.io/simpsons-tv-build-guide-waveshare) 

Options:

* DLNA,   
  * or Digital Living Network Alliance, is a standard that allows devices to share and play media files over a network.  
  * Most LG TVs are DLNA compliant, which means they can play media files from a DLNA server.  
  * To set up a DLNA server on your Linux system, you can use a variety of software options [node-media-server \- npm](https://www.npmjs.com/package/node-media-server)  
* VLC  
  * [https://www.videolan.org/projects/multicat.html](https://www.videolan.org/projects/multicat.html)  
  * [https://www.videolan.org/vlc/](https://www.videolan.org/vlc/)  
* Experiment with other ideas?




## **Kubernetes**

Set Up a testing Kubernetes Cluster in Electric Works. 

![][kubernetes-cluster-1]![][kubernetes-cluster-2]

We're seeking motivated students to propose and execute a project to set up and benchmark a Kubernetes Cluster at Electric Works, consisting of 10-20 nodes. This project will involve configuring [persistent volumes](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) with stateful storage for a [MariaDB](https://kubernetes.io/docs/tasks/run-application/run-replicated-stateful-application/) back-end and implementing web server [load balancing](https://kubernetes.io/docs/concepts/services-networking/ingress/) for application compute. The cluster should integrate [Argo](https://github.com/argoproj) for continuous deployment, alongside [Prometheus](https://sysdig.com/blog/kubernetes-monitoring-prometheus/), [Grafana](https://grafana.com/solutions/kubernetes/), and other tools for comprehensive benchmarking. A key focus will be on comparing the performance of different storage solutions, including [NFS](https://kubedemy.io/kubernetes-storage-part-1-nfs-complete-tutorial), [Ceph](https://docs.ceph.com/en/reef/), and others. The entire configuration must be documented in a GitHub repository, ensuring that results and methodologies are open-source and easily replicable. This is an excellent opportunity for hands-on experience in modern cloud infrastructure and performance analysis.

1. **NFS** (most popular in on-premises or hybrid environments)  
2. **Ceph** (popular in large-scale, high-availability setups)  
3. **CSI Drivers** (growing in popularity for flexibility and standardization)  
4. **Raw Disks** (popular for performance-critical applications)  
5. **Distributed Storage Solutions** (rising popularity in Kubernetes-native environments)

## **WebChart EHR Examples** {#webchart-ehr-examples}

Problem: Programmers who are familiar with different software languages need to be able to interface with REST [WebChart EHR API](https://docs.webchartnow.com/resources/system-specifications/application-programming-interface-api/)s.  We would like to make [open source examples](https://github.com/mieweb/webchart-interface-examples) that could be checked out of github.  See [here](https://github.com/mieweb/webchart-interface-examples) for our existing python examples.  We would to make simple examples for Java, NodeJS, C\#, Rust.

* Objective 1: Make mieapi npm  
* Objective 2: Example for NodeJS (using mieapi)  
* Objective 3: Document the API well enough that ChatGPT can generate examples in: Rust or Go, and Java

Ideally each example should require minimal or no dependencies and work "out of the box".

Use cases include:

* Authentication for session  
* Get/Put objects  
* Get/Put files  
* Get/Put messages

## **Door Locks** {#door-locks}

[NFC door lock notes](https://docs.google.com/document/d/1Jtg8XR832eAjevWNqi7TB5EWqJ37vymBHwIz3eApWPQ/edit)  
[Playlist of Videos to watch](https://www.youtube.com/playlist?list=PLuIoQNgtU5vp04x_BVX8QckLRHDAntDHO)  
![][door-lock-1]![][door-lock-2]

Build this testbed for demoing lock technology:

![][door-lock-testbed]

## **Mobile Device Integration** {#mobile-device-integration}

[CommonHealth Android WebChart and EH App](https://docs.google.com/document/d/15rDJMj50YiKNMlCzNwOwRnWSBv9w6rdNT5rFTC6vYKM/edit)  
Develop a Flutter Application that is a FHIR client using 

### **FHIR** {#fhir}

[https://pub.dev/packages/health](https://pub.dev/packages/health)  
[Fast Healthcare Interoperability Resources (FHIR) - 5 Minute Intro](https://youtu.be/x7cUViknpCg?si=JCwy7lxcSajDvTIG)

As an example: [CommonHealth](https://www.commonhealth.org/) 

**![][commonhealth-fhir-app]**  
Implement the application using Flutter and test for both iOS and Android

## **OpenFlexure Microscope \- Build a Microscope**

* [OpenFlexure Microscope](https://openflexure.org/projects/microscope/)   
* [The OpenFlexure Microscope](https://www.youtube.com/watch?v=gV9FytfoCtg)  
* [DIY Scanning Laser Microscope](https://www.youtube.com/watch?v=9TYlQ4urcg8)  
* [Laser Scanning Microscope From Blu-ray Player \#2: Shooting Images](https://www.youtube.com/watch?v=Hkialty_8K4)  
* [https://github.com/michalin/Blu-ray-Laser-Scanning-Microscope](https://github.com/michalin/Blu-ray-Laser-Scanning-Microscope)   
* [Opening a $100,000 Microscope to Show How it Works](https://www.youtube.com/watch?v=3qejtzThhn8)  
* [Microscope DIY motorized stage for Olympus IX50](https://www.youtube.com/watch?v=PLJ41RUgKYQ&list=PLl3ex3ZJMXhokwP_qvwGe2y2y7gRtW_0R&index=3)  
* [Open source for Computational Miniature Mesoscope (CM2)](https://github.com/bu-cisl/Computational-Miniature-Mesoscope-CM2)    
* [Mesoscope neuron imaging](https://www.youtube.com/watch?v=nYmfZ4z9-bs) 

![][mesoscope-neuron-imaging]

* [ImageXpress Confocal HT.ai Overview Video](https://www.youtube.com/watch?v=1i3qPrLvS4k)  
  * Organoid: [https://www.moleculardevices.com/applications/organoid-innovation-center](https://www.moleculardevices.com/applications/organoid-innovation-center)   
  * ![][organoid-innovation-center]  
  * NikonU: [Confocal Microscopy](https://www.microscopyu.com/techniques/confocal)  
    * [https://www.microscope.healthcare.nikon.com/microtools/resolution-calculator/](https://www.microscope.healthcare.nikon.com/microtools/resolution-calculator/)   
    * [Gallery | AX / AX R with NSPARC | Confocal and Multiphoton Microscopes](https://www.microscope.healthcare.nikon.com/products/confocal-microscopes/ax/gallery)  
  * [Nikon N-SIM/N-STORM Super-Resolution Microscope Systems](https://www.youtube.com/watch?v=XgHcQvt6ssk)  
    * [https://www.microscope.healthcare.nikon.com/products/confocal-microscopes/ax/ax-ax-r-with-nsparc](https://www.microscope.healthcare.nikon.com/products/confocal-microscopes/ax/ax-ax-r-with-nsparc)   
    * [https://www.nikonsmallworld.com/techniques/confocal](https://www.nikonsmallworld.com/techniques/confocal)

## **Atomic Force Microscopy**

**Overview**  
Atomic Force Microscopy (AFM) offers nanometer-scale resolution of surface topography, enabling detailed structural analysis of biological and material surfaces. Despite its wide capabilities, AFM is often underutilized due to the challenges in preparing appropriate samples and interpreting the resulting data.

In this project, you will explore the practical applications of AFM by selecting a biological or synthetic surface of interest, developing protocols for AFM sample preparation, and acquiring and analyzing high-resolution data. This project aims to bridge the gap between powerful AFM capabilities and current research needs in our lab. Possible sample targets include cellular membranes, extracellular matrices, synthetic substrates for cell growth, or even entire microorganisms like *C. elegans* or planarian tissue—provided appropriate preparation.

**Tasks**

1. **AFM Basics and Training**  
* Learn principles of AFM operation: contact mode, tapping mode, force spectroscopy  
* Perform basic calibration and training with standard samples (e.g., silicon grids)  
2. **Sample Selection and Preparation**  
* Choose target sample(s) relevant to lab interests (e.g., nematode cuticle, planarian epidermis, biofilms, agar surfaces, etc.)  
* Develop and optimize sample prep protocols to ensure surface stability and imaging quality  
3. **Imaging and Data Collection**  
* Use AFM to collect topographical data and, if feasible, mechanical property data (e.g., stiffness, adhesion)  
* Troubleshoot scanning parameters and identify sources of noise or artifacts  
4. **Data Analysis and Interpretation**  
* Analyze AFM scans to extract quantitative and qualitative surface features  
* Compare findings between samples or treatment conditions if applicable  
5. **Documentation and Reporting**  
* Document all steps in a procedure document and in your tempo

**Technologies Used**

* Atomic Force Microscope (AFM)  
* Image analysis software (e.g., Gwyddion, WSxM, MATLAB)  
* Microscopy sample prep tools (e.g., fixatives, dehydration, substrate mounting)  
* Basic microscopy for correlating results (brightfield/confocal for localization)  
* (Optional) Environmental control systems for live or hydrated sample work

**Outcomes**

By the end of the project, students will have learned how to prepare, image, and analyze samples using AFM, and will have applied those skills to generate high-resolution surface maps relevant to real biological or materials research questions. This project has the potential to open up new uses for AFM in the lab’s workflows and could lay the groundwork for long-term integration into imaging or biophysical analysis pipelines.

## **Cell Explorer (like Google Maps, but for life)** {#cell-explorer-(like-google-maps,-but-for-life)}

Google Map for exploring the scale of Cell  
[Nanome | Virtual Reality Tools for Drug Discovery](https://www.youtube.com/watch?v=beYyi0p0L5Y&ab_channel=Nanome)

Background

* [https://htwins.net/scale2/](https://htwins.net/scale2/) \- [\[src\]](https://github.com/matttt/scale_of_the_universe)  
* [CellPAINT](https://ccsb.scripps.edu/cellpaint/) \-    
* [https://3dmol.org/doc/tutorial-embeddable.html](https://3dmol.org/doc/tutorial-embeddable.html) \- [\[src\]](https://github.com/3dmol/3Dmol.js)  
* [Allen Cell Explorer](https://www.allencell.org/)  
* [Free Cell Structures Icons, Symbols & Images | BioRender](https://www.biorender.com/categories/cell-structures)  
* [Building a 'Google Maps' for molecular and cellular biology | The Alan Turing Institute](https://www.turing.ac.uk/research/research-projects/googlemapsformolecularandcellularbiology)   
  [![][mesoscope-google-maps-biology]](https://mesoscope.scripps.edu/beta/#)

## **3D Printed Cell Wall** {#3d-printed-cell-wall}

More info: [The Cell Wall Wall](https://docs.google.com/document/d/1jJSPfu1CJFgEyy5lfVssHCz0dLYEni_KourFXBPRdpg/edit)  
[The Scale of the Universe 2](https://htwins.net/scale2/) 

![][cell-wall-3d-print-1]![][cell-wall-3d-print-2]  
![][cell-wall-3d-print-3][![][biology-nanobots-igem-slides]](https://docs.google.com/presentation/d/1IvZTHqSavk-hiJJ1rbjTSDYOvc2V8AxCPOnz0gk-USo/edit#slide=id.g15754987be5_0_139)  
![][cell-wall-3d-print-4]

[![][scripps-mesoscale-project]](https://ccsb.scripps.edu/projects/mesoscale/)![][cell-wall-3d-print-5]

[![][cell-wall-video]](https://youtu.be/XbPHojL_61U?si=-auOrFjm9enFk4-F)

## **Searching Redmine**  {#searching-redmine}

* Compare Storage engine performance   
* [Redmine DevOps Enivornment](https://docs.google.com/document/d/1CxaqMeVcyd7Nc-j-C61ambQHk2PwluE4PNTCmiNvNO0/edit)  
* [https://mariadb.com/kb/en/sphinx-storage-engine/](https://mariadb.com/kb/en/sphinx-storage-engine/)  
* [https://mariadb.com/kb/en/machine-learning-with-mindsdb/](https://mariadb.com/kb/en/machine-learning-with-mindsdb/)   
* [https://mariadb.com/kb/en/mroonga/](https://mariadb.com/kb/en/mroonga/)   
* [ElasticSearch](https://www.elastic.co/elasticsearch/) ([https://theorangeone.net/posts/hugo-website-search/](https://theorangeone.net/posts/hugo-website-search/))  
  * [http://elasticlunr.com/](http://elasticlunr.com/)  
* Bert Embedding in ES \-  
  * [Understanding BERT — Word Embeddings | by Dharti Dhami | Medium](https://medium.com/@dhartidhami/understanding-bert-word-embeddings-7dc4d2ea54ca)  
  * [Build Semantic-Search with Elastic search and BERT vector embeddings. ( From scratch )](https://www.youtube.com/watch?v=KSwPR9eig7w)  
  * [https://github.com/google/sentencepiece?tab=readme-ov-file](https://github.com/google/sentencepiece?tab=readme-ov-file)  
  *   
* Older methods of Search  
  * [http://elasticlunr.com/](http://elasticlunr.com/)   
    * [https://tartarus.org/martin/PorterStemmer/](https://tartarus.org/martin/PorterStemmer/)

    ![][porter-stemmer-search]

  ![][orama-search]

  [https://github.com/oramasearch/orama](https://github.com/oramasearch/orama)

  [/packages/stemmers/lib/en.js\#L53](https://github.com/oramasearch/orama/blob/main/packages/stemmers/lib/en.js#L53)

  [Vector Search | Orama Docs](https://docs.oramasearch.com/open-source/usage/search/vector-search) ← Try this 

  [https://www.youtube.com/watch?v=KSwPR9eig7w](https://www.youtube.com/watch?v=KSwPR9eig7w)

## **WikiGDrive Contribution** {#wikigdrive-contribution}

[https://wikigdrive.com/](https://wikigdrive.com/)

* Pick a ticket and work it. [https://github.com/mieweb/wikiGDrive/issues](https://github.com/mieweb/wikiGDrive/issues)

## **Make SMPL a repo**

SMPL is a mark down for documenting procedures in a possible way, so is to measure performance and gather statistics about the time it takes to perform each step. It’s meant to be human readable, but computer parable so that each step is a single line and looping can be accomplished by indentation.

[https://docs.google.com/document/d/1-8W1s0-3O63ZS8UP-YPkuOYINCiZSw7UlTM58\_oe-Xs/edit](https://docs.google.com/document/d/1-8W1s0-3O63ZS8UP-YPkuOYINCiZSw7UlTM58_oe-Xs/edit) 

## **iforgotpv**

Make packages for [https://github.com/mieweb/iforgotpv](https://github.com/mieweb/iforgotpv)

fpm \-s dir \-t rpm \-n iforgotpv \-v 1.0 \--prefix=/usr/local iforgotpv/usr/local/bin/iforgotpv  
fpm \-s dir \-t deb \-n iforgotpv \-v 1.0 \--prefix=/usr/local iforgotpv/usr/local/bin/iforgotpv

## **Pick your own contribution** 

Search GitHub for open tickets in the projects you use and love and make a PR to:

* Update some documentation example: [https://github.com/docker/docs/pull/19374\#issuecomment-1937889429](https://github.com/docker/docs/pull/19374#issuecomment-1937889429)   
* Fix a bug:  
* Implement a feature   
* 

# Unpaid course mentoring 

[PFW Developer freshman mixer thoughts Nov 6 2023](https://docs.google.com/document/d/10q17GNhxlpMoU5xE742HK6bFnAvZhlXg_8a3FciDJZw/edit)

### [**Doug’s Advice**](https://docs.google.com/presentation/d/1_br4IKwpmofbui5rrWdZN177h5JzU7b5RmPXmMfyHYk/edit#slide=id.g12190294fe1_0_9) **to Developers**

[![][dougs-advice-to-developers-video]](https://youtu.be/VTup2Yr-rWE?si=d9xQihrUTQFtimKZ)

## **JavaScript and Node**

* [https://www.codecademy.com/learn/learn-node-js](https://www.codecademy.com/learn/learn-node-js)   
  * Requires JavaScript and Command Line  
* [https://www.udemy.com/course/the-complete-javascript-course/](https://www.udemy.com/course/the-complete-javascript-course/)   
* [https://fireship.io/courses/js/](https://fireship.io/courses/js/)   
* [https://fireship.io/lessons/typescript-nodejs-setup/](https://fireship.io/lessons/typescript-nodejs-setup/) 

* Look at Javascript Frameworks \-   
  * [Meteor.js with Vite, Solid, and Tailwind CSS | by Frederico Maia](https://blog.meteor.com/meteor-js-with-vite-solid-and-tailwind-css-d2d50dea970c)   
  * [https://vitejs.dev/](https://vitejs.dev/),  
    * [https://react.dev/](https://react.dev/) ,  [https://svelte.dev/](https://svelte.dev/) ,  
  * [https://blaze-tutorial.meteor.com/](https://blaze-tutorial.meteor.com/)   
* CSS Frameworks \- [https://github.com/troxler/awesome-css-frameworks](https://github.com/troxler/awesome-css-frameworks)  
  * [https://www.browserstack.com/guide/mobile-responsive-design-guide](https://www.browserstack.com/guide/mobile-responsive-design-guide)  
* Make your own npm  
  * [https://www.freecodecamp.org/news/how-to-create-and-publish-your-first-npm-package/](https://www.freecodecamp.org/news/how-to-create-and-publish-your-first-npm-package/) 

## **Linux**

* [Linux in 100 Seconds](https://youtu.be/rrB13utjYV4?si=1rkUGF_1LJEBLqet)  
* [Best OS for programming? Mac vs Windows vs Linux debate settled](https://youtu.be/AdygBbbEnco?si=iXk-gy0fxIKnYb1x) VS code is better tho \- call me about the jokes in the flowchart   
  * [VS Code in 100 Seconds](https://www.youtube.com/watch?v=KMxo3T_MTvY)  
  * [25 VS Code Productivity Tips and Speed Hacks](https://www.youtube.com/watch?v=ifTF3ags0XI)  
  * [I tried 10 code editors](https://www.youtube.com/watch?v=8PhdfcX9tG0)  
* [Bash in 100 Seconds](https://m.youtube.com/watch?v=I4EWvMFj37g)

## **Git**

* [Git Explained in 100 Seconds](https://youtu.be/hwP7WQkmECE?si=i4Tov6GZEROA3Cb1)  
* [https://fireship.io/courses/git/](https://fireship.io/courses/git/) 

[step1-drew-overview-video]: assets/instructions/step1-drew-overview-video.png

[step1-program-short]: assets/instructions/step1-program-short.png

[web-agent-mode]: assets/instructions/web-agent-mode.png

[step4-youtube-short-example]: assets/instructions/step4-youtube-short-example.png

[bionanomics-program-overview]: assets/instructions/bionanomics-program-overview.png

[refinery-instagram]: assets/instructions/refinery-instagram.png

[mie-api-browser-auth-1]: assets/instructions/mie-api-browser-auth-1.png

[mie-api-browser-auth-2]: assets/instructions/mie-api-browser-auth-2.png

[ozwell-chart-narrative-demo]: assets/instructions/ozwell-chart-narrative-demo.png

[ozwell-ehr-coding-data-demo]: assets/instructions/ozwell-ehr-coding-data-demo.png

[learn-the-api]: assets/instructions/learn-the-api.png

[telepresence-robot-chassis]: assets/instructions/telepresence-robot-chassis.png

[telepresence-andymark-chassis]: assets/instructions/telepresence-andymark-chassis.png

[telepresence-obsbot-camera]: assets/instructions/telepresence-obsbot-camera.png

[telepresence-gopro-max-camera]: assets/instructions/telepresence-gopro-max-camera.png

[telepresence-insta360-camera]: assets/instructions/telepresence-insta360-camera.png

[telepresence-system]: assets/instructions/telepresence-system.png

[ibeacon-patient-tracker]: assets/instructions/ibeacon-patient-tracker.png

[ldap-mysql-gateway]: assets/instructions/ldap-mysql-gateway.png

[allen-brain-atlas-1]: assets/instructions/allen-brain-atlas-1.jpg

[allen-brain-atlas-2]: assets/instructions/allen-brain-atlas-2.jpg

[abc-atlas-questions-video]: assets/instructions/abc-atlas-questions-video.png

[ai-server-specs]: assets/instructions/ai-server-specs.png

[ai-server-tesla-v100]: assets/instructions/ai-server-tesla-v100.jpg

[datavis-ui]: assets/instructions/datavis-ui.png

[automated-lab-opulo]: assets/instructions/automated-lab-opulo.png

[opulo-pick-and-place]: assets/instructions/opulo-pick-and-place.png

[liquid-handler-heading-1]: assets/instructions/liquid-handler-heading-1.png

[liquid-handler-heading-2]: assets/instructions/liquid-handler-heading-2.png

[kubernetes-cluster-1]: assets/instructions/kubernetes-cluster-1.jpg

[kubernetes-cluster-2]: assets/instructions/kubernetes-cluster-2.jpg

[door-lock-1]: assets/instructions/door-lock-1.png

[door-lock-2]: assets/instructions/door-lock-2.png

[door-lock-testbed]: assets/instructions/door-lock-testbed.png

[commonhealth-fhir-app]: assets/instructions/commonhealth-fhir-app.png

[mesoscope-neuron-imaging]: assets/instructions/mesoscope-neuron-imaging.png

[organoid-innovation-center]: assets/instructions/organoid-innovation-center.png

[mesoscope-google-maps-biology]: assets/instructions/mesoscope-google-maps-biology.png

[cell-wall-3d-print-1]: assets/instructions/cell-wall-3d-print-1.png

[cell-wall-3d-print-2]: assets/instructions/cell-wall-3d-print-2.png

[cell-wall-3d-print-3]: assets/instructions/cell-wall-3d-print-3.png

[biology-nanobots-igem-slides]: assets/instructions/biology-nanobots-igem-slides.png

[cell-wall-3d-print-4]: assets/instructions/cell-wall-3d-print-4.png

[scripps-mesoscale-project]: assets/instructions/scripps-mesoscale-project.png

[cell-wall-3d-print-5]: assets/instructions/cell-wall-3d-print-5.png

[cell-wall-video]: assets/instructions/cell-wall-video.png

[porter-stemmer-search]: assets/instructions/porter-stemmer-search.png

[orama-search]: assets/instructions/orama-search.png

[dougs-advice-to-developers-video]: assets/instructions/dougs-advice-to-developers-video.png