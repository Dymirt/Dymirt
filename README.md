<div align="center">
 <h2>Solutions & Integration Engineer</h2>

  **Production integrations · Process automation · Legacy modernization · Reliable systems**

  <p>
    <a href="https://dymirt.github.io/">Portfolio</a>
    &nbsp;·&nbsp;
    <a href="https://dymirt.github.io/mentoring/">Mentoring &amp; advisory</a>
    &nbsp;·&nbsp;
    <a href="https://dymirt.github.io/assets/dmytro-kolida-cv-pl-2026.pdf">CV (PL)</a>
    &nbsp;·&nbsp;
    <a href="mailto:dmytrokolida@gmail.com">Email</a>
    &nbsp;·&nbsp;
    <a href="https://github.com/Dymirt?tab=repositories">Repositories</a>
  </p>
</div>

---

## I make business systems work together

I connect **applications, spreadsheets, databases and external services** so people spend less time copying data or fixing broken hand-offs.

I can take the work from understanding the business problem through design, implementation and deployment to production support. My background combines Python/PHP engineering, Linux/Docker operations and nearly nine years of running an e-commerce business.

> You explain what needs to work. I build the connection, put it into production and remain responsible when something fails.

## What I bring

| Integrate | Operate | Modernize |
| :--- | :--- | :--- |
| APIs and webhooks | Linux and Docker | Older PHP systems |
| SQL and spreadsheet imports | Finding production problems | Automating manual work with Python |
| External services<br>Older systems without ready connectors | Monitoring and backups | Repeatable deployments |

### Core strengths

- Turning an unclear business need into a working technical solution
- Connecting APIs, databases, spreadsheets and external services
- Finding the cause of failures across the application, container, database, server and network
- Adding validation, logs, safe retries and a clear way to recover from errors
- Judging technology by time saved, risk reduced and reliability—not novelty
- Owning delivery from the first discussion through production support

## Selected evidence

### Making a critical legacy system safer to change

**Before:** important business rules were spread across old PHP code, database rules and scheduled jobs, so a small change could break another process.

**After:** I mapped the risky parts, removed obsolete files and added automated tests, repeatable database changes, Docker services and separate deployment environments. Changes can now be checked before release, and the system can be improved step by step instead of rewritten all at once.

- Mapped 856 PHP files and classified 187 data-writing paths before changing high-risk business flows
- Reduced the tracked repository footprint from 3,428 to 2,184 files (**−36.3%**) and the PHP file count from 1,208 to 883 (**−26.9%**)
- Built the regression suite from no PHPUnit coverage to **396 tests and 1,108 assertions**, verified with zero failures in a clean run
- Introduced a four-service local Docker topology and a three-service deployment stack, separating the legacy application from Python integration boundaries
- Configured branch-based GitHub Actions delivery for two environments and added **29 documented versions** with eight versioned SQL migrations

The published branch history contains 550 authored commits across 131 active delivery days. One credential-dependent integration test was skipped. The figures come from repository history and a clean July 2026 verification run; identifying business details remain private.

### Different client spreadsheets, one importer

**Before:** every company sent CSV, XLS or XLSX files with different columns and layouts. A new layout could stop the import and require a programmer to change the code.

**After:** I built one process that maps each file into a common structure and lets an operator correct the mapping. A bad row is logged instead of stopping the whole file, and the job can be stopped and resumed. New client layouts can be configured without rebuilding the importer.

- Built one intake path for **CSV, XLS and XLSX**, with four CSV separator variants and a **common 59-field data format**
- Added editable column mapping, row-by-row validation, progress and error logs, and stop/resume controls
- Integrated company-registry checks; AI can suggest an uncertain match, but a person must approve it before sensitive data is saved
- Checked company matching against **238 examples** and covered duplicate merging with **25 focused tests**, protection against stale decisions and before/after history

Production throughput and time-saved figures are intentionally omitted until they can be confirmed from telemetry.

### Connecting KSeF to a legacy invoicing system

**Before:** the legacy PHP system could not communicate directly with Poland's National e-Invoice System (KSeF), which requires newer authentication and invoice formats.

**After:** I added a separate Python service that converts invoice data to FA(3) XML, authenticates with KSeF, sends invoices, checks their status and finds an invoice submitted earlier. The old system can use KSeF without a risky rewrite of the whole application.

- Four API endpoints covering health, authentication, invoice submission and existing-invoice lookup
- Typed request contracts and FA(3) XML generation with payment and monetary rules
- Status checks and safe handling of invoices that were already submitted, integrated into the existing interface
- Four focused payment-semantics tests, in addition to the PHP regression suite

### A loyalty-card platform designed and built from scratch

**Before:** I designed and wrote the first version from scratch for one business. It handled customer registration, physical cards, Dotykačka customer synchronization, Wallet cards and email, but all customers, settings and integrations belonged to one setup.

**After:** I then developed it into a Django platform that keeps every business separate. A customer scans a physical card; the system assigns it, records consent, synchronizes the customer with Dotykačka, prepares a personal Apple Wallet or Google Wallet card, updates Brevo and sends the card by email. Each business has separate branding, inventory, users and encrypted integration credentials. If an external service fails temporarily, background jobs can retry safely.

- Preserved all **267 customer records** and the complete inventory of **600 physical cards** while expanding the system into a platform
- Added **228 automated tests**, with current CI covering SQLite and MariaDB 10.11
- Added separate business data and configuration, retryable background work, health checks, verified backups and controlled deployments
- Integrated Dotykačka customer synchronization, Apple Wallet, Google Wallet, Brevo and SMTP email

The technical expansion into a platform is complete. Adding more businesses remains disabled until final human, provider and printing checks. The public repository contains source code, while customer data, credentials and generated Wallet cards remain private.

[View the public source repository →](https://github.com/Dymirt/loyalty_cards)

[Read the case studies →](https://dymirt.github.io/#work)

### CoinSwipe · ETHWarsaw 2024

**1st place in the DragonSwap bounty.** CoinSwipe is a Telegram app that combines discovering memecoins, trading them and meeting people interested in the same coins. I built it with my team during ETHWarsaw 2024, and 42 Warsaw later featured the project.

[Recognition by 42 Warsaw →](https://www.linkedin.com/posts/42-warsaw_42codingschool-programmers-hackathon-activity-7243908980966649856-QVoL)

### Eco Navigate · HumanTech Hack 2024

**3rd place.** Eco Navigate compares walking and cycling routes through Warsaw using data about nearby trees, parks and other green areas. It recommends a greener option while showing the distance, time and extra detour, and also displays live air-quality stations.

[View the project](https://warsaw-moss.vercel.app) · [View the diploma](https://dymirt.github.io/assets/humantech-hack-2024-diploma.png)

### Public work

- [Eco Navigate](https://warsaw-moss.vercel.app) — greener walking and cycling routes through Warsaw, built by team Warsaw Moss
- [Add Barcode to PDF](https://github.com/Dymirt/add_barcode_to_pdf) — focused Python document automation utility

## Current engineering focus

I am extending my integration and production background toward reliable cloud platforms and carefully controlled AI assistance. For sensitive operations, AI can prepare a suggestion, but a person reviews and approves it before anything is sent or important data is changed.

```text
Python / FastAPI / PostgreSQL
Queues / retries / idempotency
AWS / Terraform / Kubernetes
Observability / tracing / alerting
LLM APIs / evaluations / human approval / audit logs
```

The goal is not to build another chatbot. It is to use AI where it genuinely helps, keep people in control of sensitive decisions and measure whether the result is reliable.

## Working stack

<p>
  <img alt="Python" src="https://img.shields.io/badge/Python-121720?style=flat-square&logo=python&logoColor=d59a6a" />
  <img alt="PHP" src="https://img.shields.io/badge/PHP-121720?style=flat-square&logo=php&logoColor=d59a6a" />
  <img alt="FastAPI" src="https://img.shields.io/badge/FastAPI-121720?style=flat-square&logo=fastapi&logoColor=d59a6a" />
  <img alt="Django" src="https://img.shields.io/badge/Django-121720?style=flat-square&logo=django&logoColor=d59a6a" />
  <img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-121720?style=flat-square&logo=postgresql&logoColor=d59a6a" />
  <img alt="Linux" src="https://img.shields.io/badge/Linux-121720?style=flat-square&logo=linux&logoColor=d59a6a" />
  <img alt="Docker" src="https://img.shields.io/badge/Docker-121720?style=flat-square&logo=docker&logoColor=d59a6a" />
  <img alt="GitHub Actions" src="https://img.shields.io/badge/CI%2FCD-121720?style=flat-square&logo=githubactions&logoColor=d59a6a" />
</p>

---

<div align="center">
  <strong>Have a difficult system to connect or modernize?</strong>
  <br /><br />
  <a href="mailto:dmytrokolida@gmail.com">dmytrokolida@gmail.com</a>
  &nbsp;·&nbsp;
  <a href="https://dymirt.github.io/">English / Polish portfolio</a>
</div>
