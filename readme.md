# **Learn Together**

A web application for students to explore and upload study materials semester-wise and course-wise. The application supports dynamic addition of programs, semesters, and courses with a backend powered by **Node.js** and **MongoDB** and a frontend built with **Next.js**.

## **Features**
- Dynamic listing of programs, semesters, and courses.
- Students can explore courses under specific semesters and programs.
- Backend API to manage programs, semesters, and courses.
- Frontend integrated with a backend API for seamless data fetching.
- Scalable database design using MongoDB.

---

## **Technologies Used**
- **Backend:** Node.js, Express.js
- **Frontend:** Next.js
- **Database:** MongoDB
- **HTTP Client:** Axios
- **Styling (Optional):** Tailwind CSS (if used)

---

## **Getting Started**

Follow these instructions to set up the project on your local machine.

### **Prerequisites**
Ensure you have the following installed:
- **Node.js** (v16+ recommended)
- **MongoDB** (local or cloud-based, e.g., MongoDB Atlas)
- **Git**

---

## **Installation**

### **1. Clone the Repository**
```bash
git clone https://github.com/shaheerzk01/Learn-together.git
cd Learn-together
```

---

### **2. Backend Setup**

Navigate to the `server` directory:
```bash
cd server
```

#### **Install Dependencies**
```bash
npm install
```

#### **Environment Variables**
Create a `.env` file in the `server` directory and add the following:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/communityStudyPortal
```
Replace `MONGO_URI` with your MongoDB connection string if using a cloud database.

#### **Run the Backend Server**
```bash
npm start
```
The backend will start at `http://localhost:8989`.

---

### **3. Frontend Setup**

Navigate to the `frontend` directory:
```bash
cd ../frontend
```

#### **Install Dependencies**
```bash
npm install
```

#### **Environment Variables**
If required, create a `.env.local` file in the `frontend` directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

#### **Run the Frontend**
```bash
npm run dev
```
The frontend will start at `http://localhost:3000`.

---

## **API Endpoints**

### **Programs**
- `GET /api/programs` - Get all programs.
- `POST /api/programs` - Add a new program.

### **Semesters**
- `GET /api/semesters/:programId` - Get semesters for a specific program.
- `POST /api/semesters` - Add a new semester.

### **Courses**
- `GET /api/courses/:semesterId` - Get courses for a specific semester.
- `POST /api/courses` - Add a new course.

---

## **Contributing**
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add feature-name"`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

---

## **License**
This project is licensed under the [MIT License](LICENSE).

---

Feel free to update the repository URL (`https://github.com/shaheerzk01/Learn-together.git`)
