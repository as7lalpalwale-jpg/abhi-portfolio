# 🎓 Smart Attendance System

A web-based **Smart Attendance Management System** developed using Python Flask and MySQL.

The system provides separate dashboards for **Students and Teachers** and supports multiple attendance methods.

## 🚀 Live Demo

👉 [Open Smart Attendance System](https://smart-attendance-system-ea5v.onrender.com)

## 💻 Main GitHub Repository

👉 [Smart Attendance System Source Code](https://github.com/shindeanand3624-dev/smart-attendance-system)

---

## ✨ Features

### 👨‍🎓 Student Features

- Student Registration
- Student Login
- Student Dashboard
- Attendance Tracking
- Face Recognition Attendance
- Fingerprint Attendance
- Dynamic QR Code Attendance
- Attendance History
- Leave Request
- Leave Status
- Forgot Password

### 👨‍🏫 Teacher Features

- Teacher Registration
- Teacher Login
- Teacher Dashboard
- View Student Attendance
- Attendance Management
- Student Management
- Leave Request Management
- Attendance Records

---

## 🧠 Attendance Methods

The system supports multiple attendance methods:

### 1. 📷 Face Recognition

Students can mark attendance using face recognition.

### 2. 👆 Fingerprint

Fingerprint-based attendance can be used as another authentication method.

### 3. 📱 Dynamic QR Code

Students can scan the generated QR code to mark attendance.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Python | Backend programming |
| Flask | Web framework |
| MySQL | Database |
| OpenCV | Face recognition |
| QR Code | QR attendance |
| HTML5 | Frontend |
| CSS3 | UI design |
| JavaScript | Frontend functionality |
| Gunicorn | Production server |
| Render | Cloud deployment |
| Aiven MySQL | Cloud database |

---

## 📂 Project Structure

```text
smart-attendance-system/
│
├── app.py
├── db.py
├── run.py
│
├── face_attendance.py
├── face_registration.py
├── face_test.py
├── fingerprint_attendance.py
├── qr_attendance.py
│
├── register.html
├── face_register.html
├── forgot_password.html
├── student_dashboard.html
├── teacher_dashboard.html
├── teacher_attendance.html
├── teacher_login.html
├── teacher_register.html
│
├── attendance_qr.png
├── images/
│
├── requirements.txt
└── start_attendance.bat
