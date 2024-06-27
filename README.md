# Building Backend with NestJS

![NestJS Logo](https://nestjs.com/img/logo_text.svg)

## 🚀 Introduction

NestJS is a popular open-source, back-end framework for Node.js and TypeScript-based, server-side applications. It is a modular and adaptable framework that allows developers to easily organize their code into smaller and reusable modules. It also includes a robust dependency injection framework that simplifies managing application components and dependencies.

## Three Main Components
There are 3 main components of NestJS; controllers, providers, and modules. 

- 1️⃣ **Controllers:**
When your application receives an HTTP request, think of it like a mail delivery service routing packages to the right address. 📦 The routing mechanism in NestJS works similarly: it directs each request to the specific controller designed to handle it.

- 2️⃣ **Providers:**
Providers are like the backbone of NestJS — they're essential for creating connections between different parts of your application. Any class that plays a role in your app, like services, repositories, or helpers, can become a provider just by adding Nest's @Injectable() decorator. The magic happens when these providers are injected into other classes through their constructors. 

- 3️⃣ **Modules:**
Think of a module as a specialized toolkit designed to handle specific tasks in your application. Every application begins with a root module, acting like a blueprint that NestJS uses to understand how your app is put together. It's like having a main hub where everything connects and makes sense.

## 💡 About the Project 

This is a simple project with a restful api (CRUD) using NestJS where I have learnt how it drastically reduces the errors involved with Type-checking and Type inconsistencies when using JavaScript to build large-scale applications.

## 🌟 Why Use NestJS?

NestJS offers several compelling features that make it an excellent choice for building backend applications:

- **🛠️ Modular Architecture**: Allows for easy code organization and reusability.
- **📘 TypeScript**: Building scalable and maintainable enterprise-ready applications is a breeze because it uses modern technologies such as TypeScript, bullet-proof architectural patterns.
- **💉 Dependency Injection**: Facilitates scalable and maintainable application design.
- **🔒 Built-in Security**: Provides various out-of-the-box features for securing your application.
- **📈 Performance**: Optimized for performance with a highly efficient runtime.

## 🐳 Creating and Deploying a Docker Image

As a DevOps enthusiast, it was practically impossible for me to resist containerizing this application! 🐳 Therefore, this app is dockerized with both development and production builds. 🚀💻

([Docker Hub](https://hub.docker.com/repository/docker/mahraurdarshil89/nest-js-basics/general))


🌐 **Follow me on [GitHub](https://github.com/darshil89) for more projects and updates!**
