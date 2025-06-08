# RestaurantCustomer 🍽️

This is the frontend application for a restaurant system that supports features like dish browsing, cart management, takeaway and dine-in orders, and payment integration. Built using **Next.js** and **Redux Toolkit**, this app provides a seamless customer interface for placing and managing orders.

## 🚀 Features

- 🧾 View categories and dishes
- 🛒 Add and remove items from the cart
- 🧍 Customer login and registration
- 🍽️ Book tables for dine-in
- 🥡 Place takeaway orders
- 💳 eSewa payment integration
- 📦 Order history and order tracking
- 🎨 Responsive UI for mobile and desktop

## 🛠️ Tech Stack

- **Frontend:** Next.js, React, Redux Toolkit, Axios, Tailwind CSS
- **State Management:** Redux Toolkit
- **Routing:** Next.js App Router
- **Payment:** eSewa (Nepal)
- **Date Picker:** MUI DateCalendar

## 🧪 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
git clone https://github.com/Bipana-Rai/ResturantCustomer.git
cd ResturantCustomer
npm install
```

### Running the App

```bash
npm run dev
```

## 🔐 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_BASE_URL=http://your-backend-api-url
NEXT_PUBLIC_ESEWA_CLIENT_ID=your-esewa-client-id
```

## 📁 Project Structure

```
ResturantCustomer/
│
├── app/                   # Next.js app directory
├── components/            # Reusable components
├── redux/                 # Redux slices and store
├── services/              # Axios API services
├── utils/                 # Helper functions
└── public/                # Static assets
```

## 📸 Screenshots



### Login
![Login](https://github.com/Bipana-Rai/ResturantCustomer/blob/main/screenshot/Screenshot%202025-06-08%20193645.png)

### 🏠 menu

![menu](https://github.com/Bipana-Rai/ResturantCustomer/blob/main/screenshot/Screenshot%202025-06-08%20193435.png)

###  ordered item receit

![ordered item receit](https://github.com/Bipana-Rai/ResturantCustomer/blob/main/screenshot/Screenshot%202025-06-08%20193621.png)

###  Payment Method

![Payment Method](https://github.com/Bipana-Rai/ResturantCustomer/blob/main/screenshot/Screenshot%202025-06-08%20193844.png)

###  Esewa integration

![Esewa integration](https://github.com/Bipana-Rai/ResturantCustomer/blob/main/screenshot/Screenshot%202025-06-08%20193538.png)

###  Table Booking

![Table Booking](https://github.com/Bipana-Rai/ResturantCustomer/blob/main/screenshot/Screenshot%202025-06-08%20193502.png)

## 🧑‍💻 Author

- **Bipana Rai** – [GitHub](https://github.com/Bipana-Rai)

## 📝 License

This project is licensed under the MIT License.
