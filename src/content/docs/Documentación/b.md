---
title: Estructura del Proyecto
description: Guía técnica detallada para desarrolladores trabajando en el Sistema Unificado de Ventas de Cinemex
---

## Estructura del Proyecto

```
cinemex-unified-sales-system/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── cinemex/
│   │   │           ├── controller/
│   │   │           │   ├── SalesController.java
│   │   │           │   ├── WebController.java
│   │   │           │   └── SaleRequest.java
│   │   │           ├── model/
│   │   │           │   ├── Ticket.java
│   │   │           │   └── FoodItem.java
│   │   │           ├── service/
│   │   │           │   ├── SalesService.java
│   │   │           │   └── InventoryService.java
│   │   │           └── CinemexApplication.java
│   │   └── resources/
│   │       ├── static/
│   │       │   └── index.html
│   │       └── application.properties
│   └── test/
│       └── java/
│           └── com/
│               └── cinemex/
│                   ├── unit/
│                   │   └── SalesServiceTest.java
│                   ├── integration/
│                   │   └── SalesControllerIntegrationTest.java
│                   └── automation/
│                       └── SalesFlowSeleniumTest.java
└── pom.xml
```
