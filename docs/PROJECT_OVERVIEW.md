### **WhatsCom Project Overview**

**WhatsCom** is a project to create ecommerces called tenants, with multi-tenant enhancements, WhatsCom can serve multiple tenants, each with its own unique domain and branding, using a unified, efficient architecture. Each tenant can have their own customizations, their own domain and the manly purpose of each ecommerce is a chat-driven e-commerce platform designed to provide a seamless shopping experience, enabling users to browse products on a **Next.js-based website** and complete purchases via **WhatsApp chat**.

### **Key Features**

**WhatsCom** a web site to sell tenants, and manage and host each tenant, each tenant is an ecommerce who can be customize to sell via whatsApp.

### Portals

The project includes several portals, each tailored to specific user roles and functionalities. Below is an overview of each portal and its primary features.

1. **Admin Tenants Portal**:

   **Purpose:**  
   The Admin Tenants Portal is designed for the IT administrator to oversee and manage the core aspects of the platform, including tenants aspects.

   **Features:**

   - **Tenant Management:** Admins can add, edit, and delete tenants.

   - **TBD Features:** twilio for add to each tenant their own phone number.... etc.

1. **Tenants Public Portal**:

   **Purpose:**  
   The Tenants Public Portal to sell a tenant spaces where the client can create their ecommerces.

   **Features:**

   - **public web site (index page):** People can buy here an ecommerce solution, that will be this. 

1. **Vendor Portal**

   **Purpose:**  
   The Vendor Portal enables vendors to independently manage their product listings and track their sales performance and manage CSS or some customizable website pages.

   **Features:**

   - **Product Listings:** Vendors can add, update, and manage their product offerings within the marketplace.
   - **Sales Analytics:** Access metrics and sales performance data to better understand product popularity and sales trends.
   - **Order Fulfillment:** Vendors can view and update order statuses, ensuring that orders are processed and shipped efficiently.
   - **Domain:** Vendors can change the default subdomain to their own domains.
   - **Website:** Vendors can change the website title, enable and customize some pages like a contact page, and other aspects.
   - **Publish Changes:** After any change, vendors must publish changes so Next.js can revalidate changes from those aspects that need to have a manual revalidation.

1. **Customer Portal**

   **Purpose:**  
   The Customer Portal provides a seamless shopping experience for customers, allowing them to browse products, make purchases, and track their orders.

   **Features:**

   - **Product Browsing:** Customers can search, filter, and view products, exploring the full catalog.
   - **Shopping Cart:** A convenient shopping cart system that allows customers to add items, modify quantities, and proceed to secure checkout.
   - **Order Tracking:** Customers can view their order history and track the status of ongoing shipments.

1. **Sales Public Portal**

   **Purpose:**  
   The Vendor Public Portal offers all the products and the customization page edited from the Vendor Portal.

   **Features:**

   - **Catalog and Products List:** Customers can submit support tickets for any issues they encounter, with tracking capabilities for updates and resolutions.
    - **Custom Pages:** A couple of pages that can be enabled via the Vendor Portal.
      1. **Root Page:** An introduction page with widgets displaying featured products, promotions, and other key information.
      1. **Contact Page:** Vendors can enable and customize a contact page for customer inquiries.
      1. **About Us Page:** Vendors can provide information about their business, mission, and values.
      1. **Blog Page:** Vendors can create and manage blog posts to engage with customers and share updates.
      1. **Catalog Page:** A dedicated page to display all products in a structured and searchable format.
      1. **Products Page:** Vendors can showcase individual product details, including descriptions, images, and pricing.
      1. **WhatsApp Routing:** Redirect all possible customers to WhatsApp to enable one-to-one communications with OpenAI.

1. **WhatsApp Sales Portal**

   **Purpose:**  
   The purpose of the sales public portal is to reach possibles customers but all the shopping process is considered manly do it using whatsapp 

   **Features:**
   - **WhatsApp Communication**: All interactions—including product inquiries, order confirmations, and updates—occur on WhatsApp.
   - **WhatsApp Verification**: User identity is verified solely through WhatsApp, simplifying login and enhancing security.
   - **OpenAI-Powered Conversations**: OpenAI manages all user interactions, from product searches to order tracking, directly in WhatsApp for a conversational, interactive experience.
   - **Custom Payment Links via Stripe**: Purchases generate a secure, tokenized payment link sent via WhatsApp, allowing users to complete transactions safely on a Stripe-hosted page.
   - **Stripe Webhooks**: Order statuses are automatically updated via Stripe webhooks, with notifications sent to users in WhatsApp upon successful payments.

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

### **Useful Links**

- [Prisma Schema](../prisma/schema.prisma): This file contains our database models.


### **TBD

1. **Expanded Tenant Customization**: Additional options for deeper customization per tenant, including language, product filters, and layout choices.
1. **Automated Domain Mapping**: Simplified workflow for adding new tenant domains without requiring manual setup.
1. **Marketing in social networks**: TBD.
1. **Connections with FBA**: TBD.

### **Progress and Project Status**

With multi-tenant features added, **WhatsCom** now offers a robust, scalable architecture, allowing each tenant to have a unique domain, isolated data, and a personalized shopping experience, all managed from a single codebase.
