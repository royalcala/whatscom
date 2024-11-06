### **WhatsCom Project Overview**

**WhatsCom** is a chat-driven e-commerce platform designed to provide a seamless shopping experience, enabling users to browse products on a **Next.js-based website** and complete purchases via **WhatsApp chat**. With recent multi-tenant enhancements, WhatsCom can now serve multiple tenants, each with its own unique domain and branding, using a unified, efficient architecture.

---

### **Key Features**

1. **WhatsApp-Based Interaction**:
   - **WhatsApp-Only Communication**: All interactions—including product inquiries, order confirmations, and updates—occur on WhatsApp.
   - **WhatsApp Verification**: User identity is verified solely through WhatsApp, simplifying login and enhancing security.
   - **OpenAI-Powered Conversations**: OpenAI manages all user interactions, from product searches to order tracking, directly in WhatsApp for a conversational, interactive experience.

1. **Multi-Tenant Support with Custom Domains**:
   - **Custom Domain Per Tenant**: Each tenant can have its own unique domain (e.g., `tenant1.com`), allowing for distinct branding and URLs.
   - **Dynamic Tenant Routing**: Middleware in Next.js detects the tenant based on the incoming domain or a nextjs dynamic route  (/[tenantId]). Dynamically loading tenant-specific configurations.
   - **Tenant-Specific Content and Theming**: Each tenant has its own custom theme, branding, and product catalog, ensuring a personalized experience.

1. **Catalog Browsing and Payments**:
   - **Static Website as a Catalog**: Users can browse products on a static website that serves as an entry point. The site is built using Incremental Static Regeneration (ISR) to ensure content remains fresh while optimizing performance.
   - **Custom Payment Links via Stripe**: Purchases generate a secure, tokenized payment link sent via WhatsApp, allowing users to complete transactions safely on a Stripe-hosted page.

1. **Payment Tracking**:
   - **Stripe Webhooks**: Order statuses are automatically updated via Stripe webhooks, with notifications sent to users in WhatsApp upon successful payments.

1. **Admin Site**
   - **Admin Portals**: The admin portal allows for comprehensive management of the platform, including configurations related to the overall project. There are three distinct admin sites:
     1. **Project Admin Site**: This site is for the overall project administrators who manage global settings, platform-wide configurations, and oversee all tenants.
     2. **Tenant Admin Site**: Each tenant has its own admin site where tenant-specific settings can be managed, such as adding products, updating catalogs, and customizing themes. This site also provides tools for inventory management, order processing, and tenant-specific reporting and analytics.
     3. **User Admin Site**: This site is for managing individual user settings and preferences, ensuring a personalized experience for each user.
---

### **Technology Stack**

1. **Next.js 15**:
   - **Multi-Tenant Routing**: Middleware and dynamic routing enable tenant-specific content delivery based on custom domains.
   - **Static Site Generation (ISR)**: Tenant-specific pages are generated at build time or upon first request, with periodic revalidation to keep content up-to-date.
   - **Serverless Functions**: Used for backend operations like payment processing and tenant-specific data fetching.

1. **Serverless Database (e.g., AWS Aurora Serverless, PlanetScale)**:
   - **Multi-Tenant Data Isolation**: Tenants’ data is isolated within a shared database using schemas or identifiers, ensuring data security and efficient access.
   - **Dynamic Database Connections**: Connections are established based on tenant ID, allowing scalability while minimizing resource usage.

1. **Vercel**:
   - **Hosting and Custom Domains**: Vercel hosts the platform, with custom domains set up for each tenant, directing traffic to the shared codebase and routing based on tenant configuration.
   - **Blob Storage for Media**: Product images and other media are stored in Vercel Blob Storage for optimized loading times.

1. **Stripe**:
   - **Payment Processor**: Stripe securely processes payments, with custom payment links and webhook integrations for seamless order management.

1. **Twilio**:
   - **WhatsApp Integration**: Twilio powers real-time messaging between users and the platform, enabling chat-based shopping and support.

1. **OpenAI**:
   - **AI Conversations**: OpenAI assists users with product inquiries, order assistance, and personalized recommendations.

1. **Prisma**:
   - **ORM for Database Management**: Prisma simplifies tenant-specific schema management and database queries, supporting efficient multi-tenant configurations.

---

### **1. Client (User) Side**

#### **1.1 Multi-Tenant Product Browsing and Discovery**:
   - **Custom Domain Access**: Users access their tenant’s site through a unique domain (e.g., `tenant1.com`).
   - **Personalized Interface**: The platform loads tenant-specific branding, themes, and content dynamically.

#### **1.2 Product Inquiry and Support**:
   - **WhatsApp Chat**: Users receive real-time responses to product questions, assisted by OpenAI, creating a personalized shopping experience.

#### **1.3 Order Placement and Payment**:
   - **Secure Payment Links**: Stripe generates tenant-specific payment links for users to complete purchases directly on a secure Stripe-hosted page.

---

### **2. Administrator Side**

#### **2.1 Tenant Management and Configuration**:
   - **Domain Mapping and Tenant Settings**: Admins manage custom domains and tenant-specific settings (e.g., themes, product catalog) in a central dashboard.
   - **Inventory and Order Management**: Admins update inventory and orders via the admin interface or WhatsApp.

#### **2.2 Reporting and Analytics**:
   - **Tenant-Specific Data**: Each tenant’s reports and analytics are isolated, allowing admins to view only their data.

---

### **3. Payments and Tracking**

- **Stripe Webhooks** handle notifications, updating order statuses in the serverless database and sending WhatsApp confirmations to users.

### **4. SEO and Marketing Strategy**

- **Custom Domain SEO**: Each tenant's domain benefits from unique SEO settings, including tenant-specific meta tags, titles, and descriptions, optimized for search engine visibility.
- **Tenant-Specific Marketing**: Each tenant can independently manage social media integrations like Facebook Pixel and Google Ads, driving traffic to their unique domain and funneling users into a chat-based shopping experience.

---

### **TBD: Future Multi-Tenant Enhancements**

1. **Expanded Tenant Customization**: Additional options for deeper customization per tenant, including language, product filters, and layout choices.
2. **Automated Domain Mapping**: Simplified workflow for adding new tenant domains without requiring manual setup.
3. **Enhanced Analytics for Admins**: A dashboard providing deeper insights into tenant-specific sales, product views, and user engagement.

### **Progress and Project Status**

With multi-tenant features added, **WhatsCom** now offers a robust, scalable architecture, allowing each tenant to have a unique domain, isolated data, and a personalized shopping experience, all managed from a single codebase.