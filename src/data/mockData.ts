// Mock data for the School Management System
import { School, User, Student, AttendanceRecord, Grade, Timetable, BusTrip, Homework, Event, Ticket, Notification } from '../types';
import tokiLogo from '../assets/TOKI_LOGO.png';

export const schools: School[] = [
  {
    id: 'school1',
    name: 'Toki Global School',
    nameInTelugu: 'టోకి గ్లోబల్ స్కూల్',
    principalId: 'principal1',
    principalName: 'Dr. Meera Narayan',
    principalPhone: '+91 98765 43210',
    address: 'Skyline Enclave, Hyderabad',
    primaryColor: '#b91c1c',
    activeUsers: 1380,
    complianceStatus: 'good',
    logo: tokiLogo
  },
  {
    id: 'school2',
    name: 'Crescent Valley High',
    nameInTelugu: 'క్రెసెంట్ వ్యాలీ హై',
    principalId: 'principal2',
    principalName: 'Mr. Sanjay Kulkarni',
    principalPhone: '+91 98765 12345',
    address: 'Silver Meadows, Hyderabad',
    primaryColor: '#0f766e',
    activeUsers: 910,
    complianceStatus: 'good',
    logo: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=200&h=200&fit=crop'
  },
  {
    id: 'school3',
    name: 'Horizon Public Academy',
    nameInTelugu: 'హరైజన్ పబ్లిక్ అకాడమీ',
    principalId: 'principal3',
    principalName: 'Ms. Fatima Rahman',
    principalPhone: '+91 98765 67890',
    address: 'Northern Ridge, Secunderabad',
    primaryColor: '#6d28d9',
    activeUsers: 720,
    complianceStatus: 'warning',
    logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=200&fit=crop'
  }
];

export const users: User[] = [
  {
    id: 'superadmin1',
    name: 'Admin',
    role: 'super_admin',
    phone: '+919999999999',
    schoolId: 'all'
  },
  {
    id: 'principal1',
    name: 'Dr. Meera Narayan',
    nameInTelugu: 'డా. మీరా నారాయణ్',
    role: 'principal',
    phone: '+919876543210',
    email: 'principal@dps.edu',
    schoolId: 'school1',
    staffId: 'DPS001'
  },
  {
    id: 'vp1',
    name: 'Mr. Gautham Iyer',
    nameInTelugu: 'శ్రీ గౌతమ్ అయ్యర్',
    role: 'vice_principal',
    phone: '+919876543211',
    schoolId: 'school1',
    staffId: 'DPS002'
  },
  {
    id: 'ct1',
    name: 'Ms. Radhika Suresh',
    nameInTelugu: 'శ్రీమతి రాధిక సురేష్',
    role: 'class_teacher',
    phone: '+919876543212',
    schoolId: 'school1',
    staffId: 'DPS101',
    isClassTeacher: true,
    classTeacherFor: '10A',
    assignedClasses: ['10A'],
    assignedSubjects: ['Mathematics']
  },
  {
    id: 'ct2',
    name: 'Mr. Vikrant Desai',
    nameInTelugu: 'శ్రీ విక్రాంత్ దేశాయ్',
    role: 'class_teacher',
    phone: '+919876543213',
    schoolId: 'school1',
    staffId: 'DPS102',
    isClassTeacher: true,
    classTeacherFor: '10B',
    assignedClasses: ['10B'],
    assignedSubjects: ['Science']
  },
  {
    id: 'st1',
    name: 'Mrs. Neelima Rao',
    nameInTelugu: 'శ్రీమతి నీలిమా రావు',
    role: 'subject_teacher',
    phone: '+919876543214',
    email: 'priya.sharma@dps.edu',
    schoolId: 'school1',
    staffId: 'DPS103',
    assignedClasses: ['10A', '10B', '9A'],
    assignedSubjects: ['Mathematics', 'Physics']
  },
  {
    id: 'st2',
    name: 'Mr. Abhinav Kapoor',
    nameInTelugu: 'శ్రీ అభినవ్ కపూర్',
    role: 'subject_teacher',
    phone: '+919876543215',
    email: 'anil.krishna@dps.edu',
    schoolId: 'school1',
    staffId: 'DPS104',
    assignedClasses: ['10A', '10B', '10C'],
    assignedSubjects: ['English']
  },
  {
    id: 'st3',
    name: 'Ms. Farah Siddiqui',
    nameInTelugu: 'శ్రీమతి ఫరహ్ సిద్దీకీ',
    role: 'subject_teacher',
    phone: '+919876543216',
    email: 'deepa.menon@dps.edu',
    schoolId: 'school1',
    staffId: 'DPS105',
    assignedClasses: ['10A', '10B'],
    assignedSubjects: ['Social Studies']
  },
  {
    id: 'fm1',
    name: 'Mr. Naveen Varrier',
    nameInTelugu: 'శ్రీ నవీన్ వారియర్',
    role: 'fleet_manager',
    phone: '+919876543217',
    schoolId: 'school1',
    staffId: 'DPS201'
  }
];

export const students: Student[] = [
  {
    id: 'std1',
    rollNumber: '10A001',
    name: 'Vihaan Narang',
    nameInTelugu: 'విహాన్ నరాంగ్',
    class: '10',
    section: 'A',
    dateOfBirth: '2009-03-15',
    parentId: 'parent1',
    parentName: 'Mrs. Asha Narang',
    parentContact: '+919123456781',
    busRoute: 'Red Loop'
  },
  {
    id: 'std2',
    rollNumber: '10A002',
    name: 'Ishita Menon',
    nameInTelugu: 'ఈషిత మెనన్',
    class: '10',
    section: 'A',
    dateOfBirth: '2009-05-22',
    parentId: 'parent2',
    parentName: 'Mr. Pradeep Menon',
    parentContact: '+919123456782',
    busRoute: 'Green Loop'
  },
  {
    id: 'std3',
    rollNumber: '10A003',
    name: 'Reyansh Kulkarni',
    nameInTelugu: 'రేయాంశ్ కులకర్ణి',
    class: '10',
    section: 'A',
    dateOfBirth: '2009-07-10',
    parentId: 'parent3',
    parentName: 'Mrs. Sneha Kulkarni',
    parentContact: '+919123456783'
  },
  {
    id: 'std4',
    rollNumber: '10A004',
    name: 'Mira Bose',
    nameInTelugu: 'మీరా బోస్',
    class: '10',
    section: 'A',
    dateOfBirth: '2009-02-28',
    parentId: 'parent4',
    parentName: 'Mr. Animesh Bose',
    parentContact: '+919123456784',
    busRoute: 'Red Loop'
  },
  {
    id: 'std5',
    rollNumber: '10A005',
    name: 'Tanishq Pillai',
    nameInTelugu: 'తనిష్క్ పిళ్లై',
    class: '10',
    section: 'A',
    dateOfBirth: '2009-09-14',
    parentId: 'parent5',
    parentName: 'Mrs. Kavya Pillai',
    parentContact: '+919123456785',
    busRoute: 'Blue Loop'
  },
  {
    id: 'std6',
    rollNumber: '10B001',
    name: 'Ayaan Singh',
    nameInTelugu: 'అయాన్ సింగ్',
    class: '10',
    section: 'B',
    dateOfBirth: '2009-04-18',
    parentId: 'parent6',
    parentName: 'Mrs. Ritika Singh',
    parentContact: '+919123456786',
    busRoute: 'Green Loop'
  },
  {
    id: 'std7',
    rollNumber: '10B002',
    name: 'Navya Jain',
    nameInTelugu: 'నవ్య జైన్',
    class: '10',
    section: 'B',
    dateOfBirth: '2009-06-25',
    parentId: 'parent7',
    parentName: 'Mrs. Ritu Jain',
    parentContact: '+919123456787'
  },
  {
    id: 'std8',
    rollNumber: '10B003',
    name: 'Kabir Dutta',
    nameInTelugu: 'కబీర్ దత్త',
    class: '10',
    section: 'B',
    dateOfBirth: '2009-08-30',
    parentId: 'parent8',
    parentName: 'Mr. Arvind Dutta',
    parentContact: '+919123456788',
    busRoute: 'Blue Loop'
  }
];

export const attendanceRecords: AttendanceRecord[] = [
  {
    id: 'att1',
    studentId: 'std1',
    date: '2025-10-20',
    status: 'present',
    recordedBy: 'ct1',
    timestamp: '2025-10-20T09:15:00Z'
  },
  {
    id: 'att2',
    studentId: 'std2',
    date: '2025-10-20',
    status: 'present',
    recordedBy: 'ct1',
    timestamp: '2025-10-20T09:15:00Z'
  },
  {
    id: 'att3',
    studentId: 'std3',
    date: '2025-10-20',
    status: 'absent',
    recordedBy: 'ct1',
    timestamp: '2025-10-20T09:15:00Z'
  },
  {
    id: 'att4',
    studentId: 'std4',
    date: '2025-10-20',
    status: 'present',
    recordedBy: 'ct1',
    timestamp: '2025-10-20T09:15:00Z'
  },
  {
    id: 'att5',
    studentId: 'std5',
    date: '2025-10-20',
    status: 'absent',
    recordedBy: 'ct1',
    timestamp: '2025-10-20T09:15:00Z'
  }
];

export const grades: Grade[] = [
  {
    id: 'gr1',
    studentId: 'std1',
    subject: 'Mathematics',
    examCycle: 'Quarterly 2025',
    marks: 91,
    maxMarks: 100,
    enteredBy: 'ct1',
    approvedByClassTeacher: true,
    approvedByPrincipal: true,
    timestamp: '2025-09-28T09:40:00Z'
  },
  {
    id: 'gr2',
    studentId: 'std1',
    subject: 'Science',
    examCycle: 'Quarterly 2025',
    marks: 84,
    maxMarks: 100,
    enteredBy: 'ct2',
    approvedByClassTeacher: true,
    approvedByPrincipal: true,
    timestamp: '2025-09-28T10:10:00Z'
  },
  {
    id: 'gr3',
    studentId: 'std2',
    subject: 'Mathematics',
    examCycle: 'Quarterly 2025',
    marks: 72,
    maxMarks: 100,
    enteredBy: 'ct1',
    approvedByClassTeacher: true,
    approvedByPrincipal: false,
    timestamp: '2025-09-28T09:40:00Z'
  },
  {
    id: 'gr4',
    studentId: 'std2',
    subject: 'English',
    examCycle: 'Quarterly 2025',
    marks: 94,
    maxMarks: 100,
    enteredBy: 'st1',
    approvedByClassTeacher: false,
    approvedByPrincipal: false,
    timestamp: '2025-09-29T11:15:00Z'
  }
];

export const timetables: Timetable[] = [
  {
    id: 'tt1',
    class: '10',
    section: 'A',
    day: 'Monday',
    period: 1,
    subject: 'Mathematics',
    teacherId: 'ct1',
    teacherName: 'Ms. Radhika Suresh'
  },
  {
    id: 'tt2',
    class: '10',
    section: 'A',
    day: 'Monday',
    period: 2,
    subject: 'English',
    teacherId: 'st1',
    teacherName: 'Mr. Abhinav Kapoor'
  },
  {
    id: 'tt3',
    class: '10',
    section: 'A',
    day: 'Monday',
    period: 3,
    subject: 'Science',
    teacherId: 'ct2',
    teacherName: 'Mr. Vikrant Desai'
  },
  {
    id: 'tt4',
    class: '10',
    section: 'A',
    day: 'Monday',
    period: 4,
    subject: 'Social Studies',
    teacherId: 'st2',
    teacherName: 'Ms. Farah Siddiqui'
  },
  {
    id: 'tt5',
    class: '10',
    section: 'A',
    day: 'Tuesday',
    period: 1,
    subject: 'Science',
    teacherId: 'ct2',
    teacherName: 'Mr. Vikrant Desai'
  },
  {
    id: 'tt6',
    class: '10',
    section: 'A',
    day: 'Tuesday',
    period: 2,
    subject: 'Mathematics',
    teacherId: 'ct1',
    teacherName: 'Ms. Radhika Suresh'
  }
];

export const busTrips: BusTrip[] = [
  {
    id: 'trip1',
    busNumber: 'TS09 AB 1234',
    driverId: 'driver1',
    driverName: 'Ms. Shalini Rao',
    route: 'Red Loop - Skyline Enclave',
    tripType: 'morning',
    startKm: 12720,
    endKm: 12778,
    date: '2025-10-20',
    pickupPoints: ['Stop 1: Skyline Gate', 'Stop 2: Lake View', 'Stop 3: KPHB'],
    status: 'completed'
  },
  {
    id: 'trip2',
    busNumber: 'TS09 CD 5678',
    driverId: 'driver2',
    driverName: 'Mr. Deepak Sharma',
    route: 'Green Loop - Hitech City',
    tripType: 'morning',
    startKm: 9025,
    endKm: 9058,
    date: '2025-10-20',
    pickupPoints: ['Stop 1: Madhapur', 'Stop 2: Gachibowli', 'Stop 3: Botanical Garden'],
    status: 'completed'
  },
  {
    id: 'trip3',
    busNumber: 'TS09 EF 9012',
    driverId: 'driver3',
    driverName: 'Ms. Aarti Deshpande',
    route: 'Blue Loop - Miyapur',
    tripType: 'morning',
    startKm: 15820,
    endKm: 15865,
    date: '2025-10-20',
    pickupPoints: ['Stop 1: Miyapur', 'Stop 2: Bachupally', 'Stop 3: Nizampet'],
    status: 'completed'
  }
];

export const homeworks: Homework[] = [
  {
    id: 'hw1',
    class: '10',
    section: 'A',
    subject: 'Mathematics',
    title: 'Coordinate Geometry Drill',
    description: 'Solve problem set on distance formula and section formula from Module 4',
    dueDate: '2025-10-27',
    uploadedBy: 'ct1',
    uploadDate: '2025-10-19',
    attachments: ['quadratic_equations.pdf']
  },
  {
    id: 'hw2',
    class: '10',
    section: 'A',
    subject: 'English',
    title: 'Debate Reflection',
    description: 'Write a reflective piece on the classroom debate about responsible media (250 words)',
    dueDate: '2025-10-24',
    uploadedBy: 'st1',
    uploadDate: '2025-10-18',
    attachments: []
  },
  {
    id: 'hw3',
    class: '10',
    section: 'B',
    subject: 'Science',
    title: 'Physics Lab Investigation',
    description: 'Document findings from the electromagnet strength experiment with graphs',
    dueDate: '2025-10-26',
    uploadedBy: 'ct2',
    uploadDate: '2025-10-17',
    attachments: ['lab_format.pdf']
  }
];

export const events: Event[] = [
  {
    id: 'evt1',
    title: "Founders' Day Break",
    titleInTelugu: 'స్థాపకుల దినోత్సవ సెలవు',
    description: "Campus closed for Founders' Day community outreach",
    descriptionInTelugu: 'స్థాపకుల దినోత్సవ కమ్యూనిటీ కార్యక్రమాల కారణంగా పాఠశాల మూసివేయబడింది',
    date: '2025-11-08',
    category: 'holiday',
    status: 'approved',
    approvedBy: 'principal1'
  },
  {
    id: 'evt2',
    title: 'Sports and Wellness Carnival',
    titleInTelugu: 'క్రీడా వెల్‌నెస్ కార్నివల్',
    description: 'Inter-house tournaments with student wellness workshops',
    descriptionInTelugu: 'ఇళ్ల మధ్య పోటీలు మరియు విద్యార్థి వెల్‌నెస్ వర్క్‌షాప్‌లు',
    date: '2025-11-18',
    category: 'sports',
    status: 'approved',
    approvedBy: 'principal1'
  },
  {
    id: 'evt3',
    title: 'Parent Strategy Forum',
    titleInTelugu: 'తల్లిదండ్రుల వ్యూహ సమ్మేళనం',
    description: 'Collaborative session to co-create learning goals for Q2',
    descriptionInTelugu: 'రెండవ త్రైమాసికం కోసం అభ్యాస లక్ష్యాలను రూపొందించేందుకు సమూహ చర్చ',
    date: '2025-10-30',
    category: 'meeting',
    status: 'pending',
    proposedBy: 'vp1'
  }
];

export const tickets: Ticket[] = [
  {
    id: 'tick1',
    category: 'attendance',
    title: 'Attendance Correction Request',
    description: 'My child was marked absent on Oct 19, but he boarded the Red Loop bus. Please review.',
    raisedBy: 'parent1',
    raisedByName: 'Mrs. Asha Narang',
    assignedTo: 'ct1',
    assignedToName: 'Ms. Radhika Suresh',
    status: 'in_progress',
    priority: 'medium',
    createdAt: '2025-10-20T14:30:00Z',
    updatedAt: '2025-10-21T09:20:00Z',
    comments: [
      {
        id: 'comm1',
        ticketId: 'tick1',
        userId: 'ct1',
        userName: 'Ms. Radhika Suresh',
        comment: 'Cross-checking transport manifests before updating the register.',
        timestamp: '2025-10-21T09:20:00Z'
      }
    ]
  },
  {
    id: 'tick2',
    category: 'transport',
    title: 'Bus Delay Issue',
    description: 'Green Loop morning service has been 15 minutes late this week.',
    raisedBy: 'parent4',
    raisedByName: 'Mr. Animesh Bose',
    assignedTo: 'ct1',
    assignedToName: 'Ms. Radhika Suresh',
    status: 'open',
    priority: 'high',
    createdAt: '2025-10-19T08:45:00Z',
    updatedAt: '2025-10-19T08:45:00Z'
  },
  {
    id: 'tick3',
    category: 'grades',
    title: 'Grade Query - Mathematics',
    description: 'Requesting a review meeting regarding the new quarterly math scores.',
    raisedBy: 'parent2',
    raisedByName: 'Mr. Pradeep Menon',
    assignedTo: 'ct1',
    assignedToName: 'Ms. Radhika Suresh',
    status: 'resolved',
    priority: 'low',
    createdAt: '2025-10-12T16:20:00Z',
    updatedAt: '2025-10-14T11:30:00Z',
    comments: [
      {
        id: 'comm2',
        ticketId: 'tick3',
        userId: 'ct1',
        userName: 'Ms. Radhika Suresh',
        comment: 'Explained updated grading rubric; shared extra algebra practice set.',
        timestamp: '2025-10-14T11:30:00Z'
      }
    ]
  }
];

export const notifications: Notification[] = [
  {
    id: 'notif1',
    userId: 'principal1',
    type: 'grade',
    title: 'Quarterly Grades Ready',
    message: '3 new grade submissions awaiting approval for Class 10A',
    read: false,
    timestamp: '2025-10-21T08:10:00Z'
  },
  {
    id: 'notif2',
    userId: 'ct1',
    type: 'ticket',
    title: 'New Ticket Assigned',
    message: 'Transport delay concern assigned to you',
    read: false,
    timestamp: '2025-10-19T08:45:00Z'
  },
  {
    id: 'notif3',
    userId: 'principal1',
    type: 'event',
    title: 'Event Proposal',
    message: 'Parent Strategy Forum proposed by Vice Principal',
    read: true,
    timestamp: '2025-10-16T11:00:00Z'
  }
];
