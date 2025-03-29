# Microsoft Entra ID
- Formally know as Azure Active Directory
- Cloud based Identity and Access Management Service
- Used to enable employees, guests and others to sign in and access resources:
  - Internal resources
    - Apps on the corperate network and intranet
    - Cloud apps developed by your own organisation
  - External services
    - Microsoft Office 365
    - Azure Portal
    - Any SaaS applications

- It simplifies the way organisations manage authorization and access
- By providing a single Identity System for their cloud and on-premises applications
- Microsoft Entra ID can be synced with your existing on-premises:
  - Existing On-Premises Active Directory
  - Synced with other directory services
  - Stand-alone
 
- Microsoft Entra ID also allows organizations to securely enables the use of personal devices.
  - Mobiles
  - Tablets
- And enables collaboration with business partners and customers.

---

# Identity Secure Score
- It's a percentage that functions as an indicator for how aligned you are with Microsoft Best practice recommendations for security.
- It helps:
  - Messure your identity secure posture
  - plan identity security improvements
  - review the success of your improvements

---

# Basic Terminology

## Tenant
- A Microsoft Entra Tenant is an instance of Microsoft Entra ID in which information about a single organization resides including organizational objects such as:
  - Users
  - Groups
  - Devices
  - Application registrations
- A tenant also contains access and compliance policies and resources, such as:
  - Applications registered in the Directory
- Each Microsoft Entra tenant has a unique ID {**tenant ID**} and a domain name (i.e. contoso.onmicrosoft.com) and serves as a security and adminstrative boundary. Allowing the organization to manage and control access toL
  - Resources
  - Applications
  - Devices
  - Services
   
---

## Directory

- The terms Microsoft Entra Directory and Microsoft Entra Tenant are often used interchangeably. The directory is a logical container within a Mircosoft Entra tenant that holds and organizes the various resources and objects related to:
  - Identity and Access Management including:
    - Users
    - Groups
    - Applications
    - Devices
    - Other Directory objects.
- The Directory is like a database of identities and resources associated with a tenant.
- A Microsoft Entra Tenant consists only of one directory.

---

## Multi-tenant

- A multi-tenant organization is an organization that has more than one instance of Microsoft Entra ID. Reasons for this could be that an organization has multiple subsidiaries or business units that work independently, company mergers or multiple geographical boundaries with various residency regulations.

---

# Who uses Microsoft Entra ID?

- Microsoft Entra ID is used by IT admins to control access to corporate apps and resources, based on business requirements.
- Developers use Microsoft Entra ID as a standards-based approach for adding SSO to their apps, so that users can sign in with their pre-exisitng credentials. Microsoft Entra ID also provides application programming interfaces (APIs) that allow developers to build personalized app experiences using existing organisational data.
- Subscribers to Azure Services, Microsoft 365 or Dynamics 365 automatically have access to Microsoft Entra ID.
