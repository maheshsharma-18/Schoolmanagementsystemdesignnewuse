# Toki Tech School Management System - Test Credentials

## How to Login
1. Enter the phone number
2. Click "Send OTP"
3. Enter any 6-digit number as OTP (e.g., 123456)
4. Click "Verify OTP"

## Test User Accounts

### Super Admin
- **Phone:** +919999999999
- **Role:** Super Admin
- **Access:** All schools management, analytics, platform overview
- **Name:** Admin

---

### Principal
- **Phone:** +919876543210
- **Role:** Principal
- **Access:** Full school management, all dashboards, teachers, classes, students, attendance, grades, fleet, events, tickets
- **Name:** Dr. Rajesh Kumar (డా. రాజేష్ కుమార్)
- **School:** Delhi Public School
- **Staff ID:** DPS001
- **Email:** principal@dps.edu

---

### Vice Principal
- **Phone:** +919876543211
- **Role:** Vice Principal
- **Access:** Same as Principal
- **Name:** Mrs. Priya Sharma (శ్రీమతి ప్రియా శర్మ)
- **School:** Delhi Public School
- **Staff ID:** DPS002

---

### Class Teacher (Head of Class)
- **Phone:** +919876543212
- **Role:** Class Teacher
- **Access:** Class management, attendance, grades for assigned class, homework, students, tickets for their class
- **Name:** Mr. Suresh Reddy (శ్రీ సురేష్ రెడ్డి)
- **School:** Delhi Public School
- **Staff ID:** DPS101
- **Class Teacher For:** Class 10A
- **Subjects Teaching:** Mathematics

**OR**

- **Phone:** +919876543213
- **Role:** Class Teacher
- **Access:** Class management, attendance, grades for assigned class
- **Name:** Mrs. Kavita Nair (శ్రీమతి కవిత నాయర్)
- **School:** Delhi Public School
- **Staff ID:** DPS102
- **Class Teacher For:** Class 10B
- **Subjects Teaching:** Science

---

### Subject Teacher (NOT Class Head) - **⭐ RECOMMENDED FOR TESTING ⭐**
- **Phone:** +919876543214
- **Role:** Subject Teacher
- **Access:** Attendance marking, grade entry for subjects taught, homework assignment, view students, view timetable
- **Name:** Ms. Priya Sharma (శ్రీమతి ప్రియా శర్మ)
- **School:** Delhi Public School
- **Staff ID:** DPS103
- **Email:** priya.sharma@dps.edu
- **Subjects Teaching:** Mathematics, Physics
- **Classes Teaching:** 10A, 10B, 9A
- **Dashboard Features:**
  - ✅ Subject-wise performance analytics
  - ✅ Average scores and trends
  - ✅ Teacher vs School average comparison
  - ✅ Recent activities (grades, attendance, homework)
  - ✅ Upcoming classes schedule
  - ✅ Quick actions (mark attendance, enter grades, assign homework)
  - ✅ Vibrant 3D UI with all new design elements

**OR**

- **Phone:** +919876543215
- **Role:** Subject Teacher
- **Name:** Mr. Anil Krishna (శ్రీ అనిల్ కృష్ణ)
- **School:** Delhi Public School
- **Staff ID:** DPS104
- **Email:** anil.krishna@dps.edu
- **Subjects Teaching:** English
- **Classes Teaching:** 10A, 10B, 10C

**OR**

- **Phone:** +919876543216
- **Role:** Subject Teacher
- **Name:** Mrs. Deepa Menon (శ్రీమతి దీపా మీనన్)
- **School:** Delhi Public School
- **Staff ID:** DPS105
- **Email:** deepa.menon@dps.edu
- **Subjects Teaching:** Social Studies
- **Classes Teaching:** 10A, 10B

---

### Fleet Manager
- **Phone:** +919876543217
- **Role:** Fleet Manager
- **Access:** Fleet management, bus routes, drivers, student transport
- **Name:** Mr. Ravi Varma (శ్రీ రవి వర్మ)
- **School:** Delhi Public School
- **Staff ID:** DPS201

---

## Role Capabilities Comparison

| Feature | Super Admin | Principal | Vice Principal | Class Teacher | Subject Teacher | Fleet Manager |
|---------|-------------|-----------|----------------|---------------|-----------------|---------------|
| Dashboard | ✅ Platform | ✅ School | ✅ School | ✅ Class | ✅ Teacher | ✅ Fleet |
| View All Schools | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Manage Schools | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| View All Students | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Manage Students | ✅ | ✅ | ✅ | ✅ (Own Class) | ❌ | ❌ |
| View Teachers | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Manage Teachers | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| View Classes | ✅ | ✅ | ✅ | ✅ | ✅ (Read-only) | ❌ |
| Manage Classes | ✅ | ✅ | ✅ | ✅ (Own Class) | ❌ | ❌ |
| Mark Attendance | ❌ | ✅ | ✅ | ✅ | ✅ (Own Classes) | ❌ |
| Enter Grades | ❌ | ✅ | ✅ | ✅ | ✅ (Own Subjects) | ❌ |
| Approve Grades | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Assign Homework | ❌ | ✅ | ✅ | ✅ | ✅ (Own Subjects) | ❌ |
| Manage Timetable | ❌ | ✅ | ✅ | ✅ (Own Class) | ✅ (View Only) | ❌ |
| Manage Events | ❌ | ✅ | ✅ | ✅ (Own Class) | ✅ (View Only) | ❌ |
| Handle Tickets | ❌ | ✅ | ✅ | ✅ (Own Class) | ❌ | ❌ |
| Fleet Management | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ |
| School Analytics | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Platform Analytics | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |

---

## Mock Data Available

After login, the system will automatically initialize with:

### Teachers Mock Data
- **Ms. Priya Sharma** (Subject Teacher)
  - Subjects: Mathematics, Physics
  - Classes: 10A, 10B, 9A
  - Average Score: 87%
  - Performance Trend: +5% (up)
  - Recent activities populated
  - Upcoming classes scheduled
  
### Classes Mock Data
- **Class 10A**
  - Section: A
  - Class Teacher: Rajesh Kumar
  - Students: 35
  - Attendance Rate: 94%
  - Average Grade: 85%
  - Subjects: Mathematics, Physics, Chemistry, Biology, English, Hindi

- **Class 9A**
  - Section: A
  - Class Teacher: Sunita Patel
  - Students: 40
  - Attendance Rate: 92%
  - Average Grade: 82%

---

## New UI/UX Features Implemented

### Global Design Enhancements
✅ **Increased font sizes** (base 18px, larger headings)
✅ **Rounded corners** (1rem radius on all cards/tiles)
✅ **3D layer effects** with shadows and hover animations
✅ **Vibrant color palette** (Indigo, Purple, Emerald, Amber, Red, Cyan)
✅ **NO pop-up dialogs** - all interactions use full-page views or sheets
✅ **Pictorial representations** - gauges, circular progress, charts

### Dashboard Features
- Gradient banner headers with role-based colors
- GradientStatsCards with icons and trends
- Circular progress indicators for percentages
- Color-coded performance metrics
- Recent activity feeds with icons
- Quick action buttons

### New Pages Available (All Functional!)
- ✅ **Subject Teacher Dashboard** - Complete analytics dashboard for teachers
- ✅ **Teachers Management** - Visible in Principal/Vice Principal sidebar
- ✅ **Classes & Sections Management** - Visible in Principal/Vice Principal sidebar
- ✅ **Schools Management** - Visible in Super Admin sidebar
- ✅ **Analytics View** - Comprehensive analytics for Principal (separate from grades)
- ✅ **Enhanced Attendance Management** - With gauges, charts, and detailed analytics
- ✅ **All dashboards** - Revamped with 3D effects, gradients, and vibrant colors

---

## Testing Recommendations

### 🎯 Quick Start Guide:

1. **⭐ Start with Subject Teacher** (+919876543214) - **BEST DEMO**
   - See the complete teacher workflow
   - Beautiful subject-wise analytics
   - Performance tracking with trends
   - Quick actions dashboard
   
2. **For Full System View - Login as Principal** (+919876543210)
   - Complete school management dashboard
   - Navigate to **Teachers** tab to see teacher management
   - Navigate to **Classes** tab to see class management
   - Navigate to **Analytics** tab to see comprehensive analytics
   - Navigate to **Attendance** to see enhanced analytics dashboard

3. **For Platform Management - Login as Super Admin** (+919999999999)
   - View all schools on the platform
   - Navigate to **Schools** tab to manage all schools
   - Navigate to **Analytics** tab for platform-wide insights
   - See overall compliance and performance metrics

---

## Language Support
- The application supports **English** and **Telugu**
- Toggle language using the language icon in the top navigation bar
- All content, including user names, updates based on selected language

---

## Notes
- Mock data is automatically initialized on first API call
- All dashboards load real data from the backend KV store
- Teachers and Classes endpoints are now functional
- Subject teacher dashboard shows personalized analytics
