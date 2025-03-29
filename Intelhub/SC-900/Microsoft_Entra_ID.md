# 🧠 Knowledge Fragment – Microsoft Entra ID

## 🔹 Overview

**Microsoft Entra ID** (formerly **Azure Active Directory**) is a **cloud-based Identity and Access Management (IAM)** service that:

- Enables secure sign-in for employees, guests, and external partners.
- Provides access to:
  - 🔒 **Internal resources** (apps on the corporate network/intranet, internal cloud apps)
  - 🌐 **External services** (Microsoft 365, Azure Portal, 3rd-party SaaS)

### ✳️ Purpose

> Simplifies authorization & access across hybrid environments by providing a **unified identity system** for both **cloud and on-prem apps**.

---

## 🔑 Identity Management Features

### 🏢 Integration Options
- **Sync with on-prem AD**
- **Standalone**
- **Hybrid (AD Connect)**

### 📱 Device Access
- Supports **secure personal device usage** (e.g., mobile, tablet)
- Enables **external collaboration** (customers, partners)

---

## 🧪 Identity Secure Score

A **percentage-based metric** used to measure how well your identity configuration aligns with Microsoft best practices.

**Helps you:**
- Measure identity security posture
- Plan improvements
- Review success of changes

---

## 📘 Key Terminology

### 🏢 Tenant

- A **tenant** is an instance of Microsoft Entra ID tied to a single org.
- Contains:
  - Users, groups, devices, application registrations
  - Compliance/access policies
- Has a unique **Tenant ID** and **domain** (e.g., `contoso.onmicrosoft.com`)
- Acts as the **admin and security boundary**

### 📂 Directory

- Often used interchangeably with "tenant"
- Think of it as the **database of identities and resources**
- Each tenant = **1 directory**

### 🌐 Multi-Tenant

- Organization with **multiple Entra tenants** due to:
  - Subsidiaries, M&As
  - Geo-boundary compliance
- Example: Global orgs using region-based tenants

---

## 👥 Who Uses It?

- **IT Admins**: Control access based on business rules
- **Developers**: Add **SSO**, use APIs for personalized app experiences
- **Azure/M365/D365 users**: Automatically get access to Entra ID
