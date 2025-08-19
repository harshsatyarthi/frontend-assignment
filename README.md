# React + TypeScript + Vite
🚀 Overview

A small component library built with React, TypeScript, TailwindCSS, and Storybook.
This project demonstrates reusable UI components — InputField and DataTable — designed with scalability, accessibility, and clean styling in mind.

🛠️ Tech Stack

⚛️ React 18 + Vite

📘 TypeScript

🎨 TailwindCSS

📖 Storybook

🧪 Vitest + React Testing Library

🌐 Chromatic (Storybook deployment)

📂 Folder Structure
react-component-library/
 ┣ src/
 ┃ ┣ components/
 ┃ ┃ ┣ InputField/
 ┃ ┃ ┃ ┣ InputField.tsx
 ┃ ┃ ┃ ┣ InputField.stories.tsx
 ┃ ┃ ┣ DataTable/
 ┃ ┃ ┃ ┣ DataTable.tsx
 ┃ ┃ ┃ ┣ DataTable.stories.tsx
 ┃ ┣ App.tsx
 ┃ ┣ main.tsx
 ┃ ┗ index.css
 ┣ .storybook/
 ┣ package.json
 ┣ tailwind.config.cjs
 ┣ postcss.config.cjs
 ┗ README.md

⚡ Setup Instructions
1️⃣ Clone Repository
git clone https://github.com/harshsatyarthi/frontend-assignment.git
cd frontend-assignment

2️⃣ Install Dependencies
npm install

3️⃣ Run Dev Server
npm run dev


App runs at → http://localhost:5173

4️⃣ Run Storybook
npm run storybook


Storybook runs at → http://localhost:6006

5️⃣ Deploy Storybook to Chromatic
npm run chromatic

🎯 Components
🔹 InputField

A flexible input component with multiple states and variants.

Features

Label, placeholder, helper & error text

Variants → filled, outlined, ghost

Sizes → sm, md, lg

States → disabled, invalid

<InputField
  label="Username"
  placeholder="Enter username"
  helperText="Helper message"
  variant="outlined"
  size="md"
/>

🔹 DataTable

A simple data table with sorting, selection, and states.

Features

Tabular display of typed data

Sorting on columns

Row selection (single/multiple)

Loading & empty states

<DataTable
  data={users}
  columns={[
    { key: "name", title: "Name", dataIndex: "name", sortable: true },
    { key: "email", title: "Email", dataIndex: "email" },
  ]}
  selectable
  onRowSelect={(rows) => console.log(rows)}
/>

📝 Approach

I designed this project with scalability and reusability in mind:

Setup: Vite + React + TypeScript for performance and strong typing.

Styling: TailwindCSS for responsive, utility-first design.

InputField: Focused on accessibility (aria-invalid), multiple variants & sizes, error handling.

DataTable: Implemented sorting, selection, loading, and empty states with a clean API.

Documentation: Used Storybook to preview all states, deployed via Chromatic.

Scalability: Component-based folder structure, typed props, easy to extend with more components.

✅ Requirements Met

✔️ TypeScript typing
✔️ Responsive design with TailwindCSS
✔️ Accessibility (ARIA attributes)
✔️ Storybook documentation
✔️ Example usage
✔️ Chromatic deployment


🔗 Live Storybook

View on Chromatic
https://68a4e7e12a7e59e819878638-hwathflcvz.chromatic.com/

📸 Preview
<img width="1366" height="768" alt="Screenshot (252)" src="https://github.com/user-attachments/assets/b237fae4-559d-4a54-b1cb-aed50adb4e1c" />

<img width="1366" height="768" alt="Screenshot (253)" src="https://github.com/user-attachments/assets/ea5a262d-fbf1-418a-a10a-e5a53ea8c96a" />

<img width="1366" height="768" alt="Screenshot (254)" src="https://github.com/user-attachments/assets/b4849cda-d3ff-4ac5-81dd-34a2f09740e0" />
