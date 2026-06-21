# Assignment 12 - Web Component Library

## Overview

This project is a React and Storybook Component Library created for Assignment 12. The library contains reusable UI components built with React, TypeScript, Styled Components, and Storybook.

## Components Included

* Button
* Label
* Text
* Table
* Table Header
* Table Row
* Table Cell
* Table Footer
* Dropdown
* Radio Button
* Img
* Hero Image
* Card

Each component includes:

* Component_name.tsx
* Component_name.stories.tsx
* Component_name.types.tsx
* Component_name.tests.tsx
* index.ts

## Technologies Used

* React
* TypeScript
* Storybook
* Styled Components
* Jest
* React Testing Library
* Docker

## Running the Application Locally

### Install Dependencies

```bash
npm install
```

### Start Storybook

```bash
npm run storybook
```

Storybook will be available at:

```text
http://localhost:6006
```

### Run Tests

```bash
npm test
```

### Build the Application

```bash
npm run build
```

## Docker Instructions

### Build Docker Image

```bash
docker build -t lin_luxiang_coding_assignment12 .
```

### Run Docker Container

```bash
docker run -d -p 8083:80 --name lin_luxiang_coding_assignment12 lin_luxiang_coding_assignment12
```

### Open in Browser

```text
http://127.0.0.1:8083
```

## Features

* Responsive UI components
* Styled Components for styling
* Storybook controls for component properties
* Default and disabled component states
* Automated unit testing
* Dockerized production build

## Author

Luxiang (Lucien) Lin
